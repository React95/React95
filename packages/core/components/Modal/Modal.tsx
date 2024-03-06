import * as React from 'react';

import Draggable from 'react-draggable';

import { DraggableProps } from 'react-draggable';
import Button from '../Button';
import List from '../List';
import TitleBar from '../TitleBar';
import ModalContext from './ModalContext';
import * as styles from './Modal.css';
import { Frame, FrameProps } from '../Frame/Frame';

import close from './close.svg';
import help from './help.svg';

export type ModalButtons = {
  value: string;
  onClick(event: React.MouseEvent): void;
};

export type ModalMenu = {
  name: string;
  list: React.ReactElement<typeof List>;
};

export type ModalDefaultPosition = {
  x: number;
  y: number;
};

export type ModalProps = {
  icon?: React.ReactElement;
  onClose(event: React.MouseEvent): void;
  onHelp?(event: React.MouseEvent): void;
  title: string;
  buttons?: Array<ModalButtons>;
  menu?: Array<ModalMenu>;
  defaultPosition?: DraggableProps['defaultPosition'];
  positionOffset?: DraggableProps['positionOffset'];
  hasWindowButton?: boolean;
  buttonsAlignment?: FrameProps['justifyContent'];
} & Omit<FrameProps, 'as'> &
  React.HTMLAttributes<HTMLDivElement>;

const ModalRenderer = (
  {
    hasWindowButton: hasButton = true,
    buttons = [],
    buttonsAlignment = 'flex-end',
    children,
    onClose = () => {},
    onHelp,
    defaultPosition = { x: 0, y: 0 },
    positionOffset,
    height,
    icon,
    menu = [],
    title,
    width,
    ...rest
  }: ModalProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const {
    addWindows,
    removeWindow,
    updateWindow,
    setActiveWindow,
    activeWindow,
  } = React.useContext(ModalContext);
  const [id, setId] = React.useState<string | null>(null);
  const [menuOpened, setMenuOpened] = React.useState('');
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      const newId = addWindows({ icon, title, hasButton });
      if (newId) {
        setId(newId);
        setActiveWindow(newId);
      }
    } else {
      updateWindow(id, { icon, title, hasButton });
    }
  }, [id, icon, title, hasButton]);
  React.useEffect(() => {
    return () => {
      if (id) {
        removeWindow(id);
      }
    };
  }, [id]);
  React.useEffect(() => setIsActive(id === activeWindow), [id, activeWindow]);

  return (
    <Draggable
      handle=".draggable"
      defaultPosition={defaultPosition}
      positionOffset={positionOffset}
      onMouseDown={id ? () => setActiveWindow(id) : undefined}
    >
      <Frame
        {...rest}
        width={width}
        height={height}
        className={styles.modalWrapper({ active: isActive })}
        ref={ref}
      >
        <TitleBar
          active={isActive}
          icon={icon}
          title={title}
          className="draggable"
        >
          <TitleBar.OptionsBox>
            {onHelp && (
              <TitleBar.Option>
                <img src={help} alt="help" onClick={onHelp} />
              </TitleBar.Option>
            )}

            <TitleBar.Option onClick={onClose}>
              <img src={close} alt="close" />
            </TitleBar.Option>
          </TitleBar.OptionsBox>
        </TitleBar>

        {menu && menu.length > 0 && (
          <ul className={styles.menuWrapper}>
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

        <div className={styles.content} onClick={() => setMenuOpened('')}>
          {children}
        </div>

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
    </Draggable>
  );
};

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ModalRenderer,
);

Modal.displayName = 'Modal';

Modal.defaultProps = {
  icon: undefined,
  title: 'Modal',
  children: null,
  defaultPosition: { x: 0, y: 0 },
  buttons: [],
  menu: [],
  width: undefined,
  height: undefined,
  onClose: () => {},
};
