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
    ...rest
  }: ModalProps,
  ref: Ref<HTMLDivElement | null>,
) => {
  const [id] = useState<string>(providedId || nanoid());
  const [menuOpened, setMenuOpened] = useState('');
  const [isActive, setIsActive] = useState(false);
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

  useEffect(() => {
    add({
      icon,
      title: title || '',
      id,
      hasButton,
    });

    const unsubscribeVisibility = subscribe(
      ModalEvents.ModalVisibilityChanged,
      ({ id: activeId }) => {
        setIsActive(activeId === id);
      },
    );

    focus(id);

    return () => {
      remove(id);
      unsubscribeVisibility();
    };
  }, [id, icon, title, hasButton, providedId, add, remove, focus, subscribe]);

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

  useImperativeHandle(ref, () => {
    return draggableRef.current as HTMLDivElement;
  });

  return (
    <Frame
      {...rest}
      className={cn(
        styles.modalWrapper({ active: isActive, minimized: isModalMinimized }),
        className,
      )}
      role="dialog"
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
