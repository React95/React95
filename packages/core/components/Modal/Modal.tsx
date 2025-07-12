import { nanoid } from 'nanoid';
import React, {
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

export type ModalProps = {
  id?: string;
  buttons?: Array<ModalButtons>;
  menu?: Array<ModalMenu>;
  dragOptions?: Omit<DragOptions, 'handle'>;
  hasWindowButton?: boolean;
  buttonsAlignment?: FrameProps<'div'>['justifyContent'];
  titleBarOptions?:
    | ReactElement<TitleBarOptions>
    | ReactElement<TitleBarOptions>[];
} & Omit<FrameProps<'div'>, 'as'> &
  HTMLAttributes<HTMLDivElement> &
  Pick<TitleBarBackgroundProps, 'title' | 'icon'>;

const ModalContent = fixedForwardRef<HTMLDivElement, FrameProps<'div'>>(
  (rest, ref) => (
    <Frame {...rest} ref={ref} className={cn(styles.content, rest.className)} />
  ),
);

const ModalMinimize = fixedForwardRef<HTMLButtonElement, OptionProps<'button'>>(
  (props, ref) => {
    const [id, setId] = useState<string>('');
    const { minimize, focus, subscribe } = useModal();

    useEffect(() => {
      const handleVisibilityChange = ({ id: activeId }: { id: string }) => {
        setId(activeId);
      };

      const unsubscribe = subscribe(
        ModalEvents.ModalVisibilityChanged,
        handleVisibilityChange,
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
    buttons = [],
    buttonsAlignment = 'flex-end',
    children,
    icon,
    menu = [],
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
  useDraggable(draggableRef, {
    ...dragOptions,
    handle: '.draggable',
  });

  const menuRef = useRef<HTMLUListElement>(null);
  useOnClickOutside(menuRef, () => {
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
    return draggableRef.current;
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

export const Modal = Object.assign(
  fixedForwardRef<HTMLDivElement, ModalProps>(ModalRenderer),
  {
    Content: ModalContent,
    Minimize: ModalMinimize,
  },
) as ModalProps &
  typeof ModalRenderer & {
    Content: typeof ModalContent;
    Minimize: typeof ModalMinimize;
  };
