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
import { TitleBar, TitleBarBackgroundProps } from '../TitleBar/TitleBar';
import * as styles from './Modal.css';

import cn from 'classnames';
import { useOnClickOutside } from 'usehooks-ts';
import { ModalEvents, modals } from '../shared/events';

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

const ModalMinimize = fixedForwardRef<HTMLButtonElement, any>((props, ref) => {
  const [id, setId] = useState<string>("");

  useEffect(() => {
    const handleVisibilityChange = ({ id: activeId }: { id: string }) => {
      setId(activeId); 
    };

    modals.on(ModalEvents.ModalVisibilityChanged, handleVisibilityChange);

    return () => {
      modals.off(ModalEvents.ModalVisibilityChanged, handleVisibilityChange);
    };
  }, []);

  const handleMinimize = () => {
    modals.emit(ModalEvents.MinimizeModal, { id });
    modals.emit(ModalEvents.ModalVisibilityChanged, { id: 'no id' });
  };

  return <TitleBar.Minimize {...props} ref={ref} onClick={handleMinimize} />;
});

const ModalRenderer = (
  {
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
  const [id] = useState<string>(nanoid());
  const [menuOpened, setMenuOpened] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isModalMinimized, setIsModalMinimized] = useState(false);

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
    modals.emit(ModalEvents.AddModal, {
      icon,
      title,
      id,
      hasButton,
    });

    modals.on(ModalEvents.ModalVisibilityChanged, ({ id: activeId }) => {
      setIsActive(activeId === id);
    });

    modals.emit(ModalEvents.ModalVisibilityChanged, { id });

    return () => {
      modals.emit(ModalEvents.RemoveModal, { id });
    };
  }, []);

  useEffect(() => {
    modals.on(ModalEvents.MinimizeModal, ({ id: activeId }) => {
      if (activeId === id) {
        setIsModalMinimized(true);
      }
    });

    modals.on(ModalEvents.RestoreModal, ({ id: activeId }) => {
      if (activeId === id) {
        setIsModalMinimized(false);
      }
    });

    return () => {
      modals.off(ModalEvents.MinimizeModal, () => {});
      modals.off(ModalEvents.RestoreModal, () => {});
    };
  }, [id]);

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
      ref={draggableRef}
      onMouseDown={() => {
        modals.emit(ModalEvents.ModalVisibilityChanged, { id });
      }}
    >
      <TitleBar
        active={isActive}
        icon={icon}
        title={title}
        className="draggable"
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
