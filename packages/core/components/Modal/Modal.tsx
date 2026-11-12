import { nanoid } from 'nanoid';
import React, {
  ForwardedRef,
  HTMLAttributes,
  MouseEvent,
  ReactElement,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { DragOptions, useDraggable } from '@neodrag/react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { Button } from '../Button/Button';
import { fixedForwardRef, Frame, FrameProps } from '../Frame/Frame';
import { List } from '../List/List';
import {
  TitleBar,
  TitleBarBackgroundProps,
  OptionProps,
  OptionReturnType,
} from '../TitleBar/TitleBar';
import * as styles from './Modal.css';

import cn from 'classnames';
import { useOnClickOutside } from 'usehooks-ts';
import { ModalEvents, useModal } from '../shared/events';
import { modalStackIndex } from '../shared/modal-controller';

export type ModalButtons = {
  value: string;
  onClick(event: MouseEvent): void;
};

export type ModalMenu = {
  name: string;
  list: ReactElement<typeof List>;
};

export type ModalDefaultPosition = {
  x: number;
  y: number;
};

type TitleBarOptions =
  | typeof TitleBar.Close
  | typeof TitleBar.Help
  | typeof TitleBar.Maximize
  | typeof TitleBar.Minimize
  | typeof TitleBar.Restore;

const EMPTY_BUTTONS: Array<ModalButtons> = [];
const EMPTY_MENU: Array<ModalMenu> = [];

export type ModalProps = {
  id?: string;
  buttons?: Array<ModalButtons>;
  menu?: Array<ModalMenu>;
  dragOptions?: Omit<DragOptions, 'handle'>;
  hasWindowButton?: boolean;
  buttonsAlignment?: FrameProps['justifyContent'];
  titleBarOptions?:
    | ReactElement<TitleBarOptions>
    | ReactElement<TitleBarOptions>[];
} & Omit<FrameProps, 'as'> &
  HTMLAttributes<HTMLDivElement> &
  Pick<TitleBarBackgroundProps, 'title' | 'icon'>;

type ModalContentProps = HTMLAttributes<HTMLDivElement> & FrameProps;

const ModalContent = fixedForwardRef<HTMLDivElement, ModalContentProps>(
  (rest, ref) => (
    <Frame {...rest} ref={ref} className={cn(styles.content, rest.className)} />
  ),
);

const ModalMinimize = fixedForwardRef<HTMLButtonElement, OptionProps<'button'>>(
  (props, ref) => {
    const [id, setId] = useState<string>('');
    const { minimize, focus, subscribe } = useModal();

    useEffect(() => {
      const unsubscribe = subscribe(
        ModalEvents.ModalVisibilityChanged,
        ({ id: activeId }) => {
          setId(activeId || '');
        },
      );

      return unsubscribe;
    }, [subscribe]);

    const handleMinimize = () => {
      minimize(id);
      focus('no-id');
    };

    return <TitleBar.Minimize {...props} ref={ref} onClick={handleMinimize} />;
  },
) as OptionReturnType;

const ModalRenderer = (
  {
    id: providedId,
    hasWindowButton: hasButton = true,
    buttons = EMPTY_BUTTONS,
    buttonsAlignment = 'flex-end',
    children,
    icon,
    menu = EMPTY_MENU,
    title,
    dragOptions,
    titleBarOptions,
    className,
    style,
    ...rest
  }: ModalProps,
  ref: Ref<HTMLDivElement | null>,
) => {
  const [id] = useState<string>(providedId || nanoid());
  const [menuOpened, setMenuOpened] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [stackIndex, setStackIndex] = useState(0);
  const [isModalMinimized, setIsModalMinimized] = useState(false);
  const { add, remove, focus, subscribe } = useModal();

  const draggableRef = useRef<HTMLDivElement>(null);
  useDraggable(draggableRef as React.RefObject<HTMLElement>, {
    ...dragOptions,
    handle: '.draggable',
  });

  const menuRef = useRef<HTMLUListElement>(null);
  useOnClickOutside(menuRef as React.RefObject<HTMLElement>, () => {
    setMenuOpened('');
  });

  // what the TaskBar shows for this modal. Read through a ref, so a new
  // `icon` element on every render doesn't register the modal again
  const taskBarWindow = useRef({ icon, title: title || '', id, hasButton });

  useEffect(() => {
    taskBarWindow.current = { icon, title: title || '', id, hasButton };
  });

  // registered and focused when it mounts, unregistered when it unmounts.
  // Focusing any modal can change this one's place in the stacking order
  useEffect(() => {
    add(taskBarWindow.current);

    const unsubscribeVisibility = subscribe(
      ModalEvents.ModalVisibilityChanged,
      ({ id: activeId }) => {
        setIsActive(activeId === id);
        setStackIndex(Math.max(modalStackIndex(id), 0));
      },
    );

    focus(id);

    return () => {
      remove(id);
      unsubscribeVisibility();
    };
  }, [id, add, remove, focus, subscribe]);

  // a new title updates its TaskBar button, without taking the focus
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      return;
    }

    add(taskBarWindow.current);
  }, [title, hasButton, add]);

  useEffect(() => {
    const unsubscribeMinimize = subscribe(
      ModalEvents.MinimizeModal,
      ({ id: activeId }) => {
        if (activeId === id) {
          setIsModalMinimized(true);
        }
      },
    );

    const unsubscribeRestore = subscribe(
      ModalEvents.RestoreModal,
      ({ id: activeId }) => {
        if (activeId === id) {
          setIsModalMinimized(false);
        }
      },
    );

    return () => {
      unsubscribeMinimize();
      unsubscribeRestore();
    };
  }, [id, subscribe]);

  // the element in the modal that had the focus last, given back to it when
  // the modal is given the focus
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const modal = draggableRef.current;

    if (!modal) return;

    const remember = (event: FocusEvent) => {
      lastFocused.current = event.target as HTMLElement;
    };

    modal.addEventListener('focusin', remember);

    return () => modal.removeEventListener('focusin', remember);
  }, []);

  // the TaskBar gives the focus to the window its button activates. A
  // minimized modal is hidden, so it can only take the focus once it's shown
  const focusPending = useRef(false);
  const [focusRequest, setFocusRequest] = useState(0);

  useEffect(
    () =>
      subscribe(ModalEvents.FocusModal, ({ id: focusedId }) => {
        if (focusedId === id) {
          focusPending.current = true;
          setFocusRequest(request => request + 1);
        }
      }),
    [id, subscribe],
  );

  useEffect(() => {
    const modal = draggableRef.current;

    if (!focusPending.current || isModalMinimized || !modal) return;

    focusPending.current = false;

    const last = lastFocused.current;

    (last && last.isConnected && modal.contains(last) ? last : modal).focus();
  }, [focusRequest, isModalMinimized]);

  useImperativeHandle(ref, () => {
    return draggableRef.current as HTMLDivElement;
  });

  return (
    <Frame
      // the title names the dialog, unless the caller names it otherwise
      aria-label={title}
      // it can take the focus itself, for when nothing in it can
      tabIndex={-1}
      {...rest}
      className={cn(
        styles.modalWrapper({ minimized: isModalMinimized }),
        className,
      )}
      // a `zIndex` in the caller's style still wins over the stacking order
      style={{
        ...assignInlineVars({ [styles.stackIndex]: String(stackIndex) }),
        ...style,
      }}
      role="dialog"
      // the open modals are a set, and the active one is its current item
      aria-current={isActive || undefined}
      aria-hidden={isModalMinimized}
      ref={draggableRef}
      onMouseDown={() => {
        focus(id);
      }}
    >
      <TitleBar
        active={isActive}
        icon={icon}
        title={title}
        className="draggable"
        mb="$2"
      >
        {titleBarOptions && (
          <TitleBar.OptionsBox>{titleBarOptions}</TitleBar.OptionsBox>
        )}
      </TitleBar>

      {menu && menu.length > 0 && (
        <ul className={styles.menuWrapper} ref={menuRef}>
          {menu.map(({ name, list }) => {
            const active = menuOpened === name;
            return (
              <li
                key={name}
                onMouseDown={() => setMenuOpened(name)}
                className={styles.menuItem({ active })}
              >
                {name}
                {active && list}
              </li>
            );
          })}
        </ul>
      )}

      {children}

      {buttons && buttons.length > 0 && (
        <Frame
          className={styles.buttonWrapper}
          justifyContent={buttonsAlignment}
        >
          {buttons.map(button => (
            <Button
              key={button.value}
              onClick={button.onClick}
              value={button.value}
            >
              {button.value}
            </Button>
          ))}
        </Frame>
      )}
    </Frame>
  );
};

type ModalComponent = ((
  props: ModalProps & { ref?: ForwardedRef<HTMLDivElement> },
) => ReactElement) & {
  Content: typeof ModalContent;
  Minimize: typeof ModalMinimize;
};

export const Modal = Object.assign(
  fixedForwardRef<HTMLDivElement, ModalProps>(ModalRenderer),
  {
    Content: ModalContent,
    Minimize: ModalMinimize,
  },
) as ModalComponent;
