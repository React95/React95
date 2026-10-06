import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect, within } from 'storybook/test';

import {
  Button,
  TitleBar,
  TaskBar,
  Frame,
  useModal,
  Modal,
  ModalEvents,
} from '../components';

import {
  Computer,
  Mmsys113,
  ReaderClosed,
  WindowsExplorer,
  FolderOpen,
} from '@react95/icons';

const meta: Meta = {
  title: 'Hooks/useModal',
  parameters: {
    controls: { disable: true },
    design: { disable: true },
    clippy: {
      phrases: [
        'Try minimizing a modal: it waits for you in the TaskBar.',
        'useModal controls your modals without any React state.',
      ],
    },
    docs: {
      codePanel: false,
      description: {
        component: `
The \`useModal\` hook provides a programmatic API for controlling existing Modal components.
It allows you to manage modal visibility, focus, and lifecycle without managing React state.

## How It Works

1. **Modal Registration**: When a Modal component mounts, it automatically registers with the TaskBar
2. **Programmatic Control**: Use the hook methods to control registered modals
3. **Event System**: All communication happens through a centralized event system

## Basic Usage

\`\`\`tsx
import { useModal, Modal } from '@react95/core';

function MyComponent() {
  const { minimize, restore, focus } = useModal();

  return (
    <>
      <button onClick={() => minimize('my-modal')}>Minimize</button>
      <button onClick={() => restore('my-modal')}>Restore</button>

      <Modal id="my-modal" title="My Modal">
        Modal content here
      </Modal>
    </>
  );
}
\`\`\`

## API Reference

- \`add(modal)\` - Register a modal with the system
- \`remove(id)\` - Remove a modal from TaskBar (modal component still exists)
- \`minimize(id)\` - Minimize a modal (hides content, shows in TaskBar)
- \`restore(id)\` - Restore a minimized modal
- \`focus(id)\` - Bring a modal to the front
- \`toggle(id)\` - Toggle modal visibility
- \`subscribe(event, callback)\` - Listen to modal events

**Note**: \`add()\` is primarily used internally by Modal components during mounting to register with the TaskBar.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

type Canvas = Parameters<NonNullable<Story['play']>>[0]['canvas'];

const taskBarButtons = (canvas: Canvas, title: string) =>
  canvas.queryAllByRole('button', { name: title });

// the active modal is marked as the current one
const expectActive = async (modal: HTMLElement, active: boolean) => {
  if (active) {
    await expect(modal).toHaveAttribute('aria-current', 'true');
  } else {
    await expect(modal).not.toHaveAttribute('aria-current');
  }
};

const BasicUsageDemo = () => {
  const { add, remove } = useModal();
  const [title, setTitle] = React.useState('Basic Modal');

  const closeModal = () => {
    remove('basic-modal');
  };
  const addToTaskBar = () => {
    add({
      id: 'basic-modal',
      title,
      icon: <Computer variant="16x16_4" />,
      hasButton: true,
    });
  };
  const rename = () =>
    setTitle(current =>
      current === 'Basic Modal' ? 'Renamed Modal' : 'Basic Modal',
    );

  return (
    <Frame display="flex" flexDirection="column" gap="16px" p="20px">
      <TaskBar />

      <Frame display="flex" gap="10px">
        <Button onClick={closeModal}>Remove from TaskBar</Button>
        <Button onClick={addToTaskBar}>Add to TaskBar</Button>
        <Button onClick={rename}>Rename</Button>
      </Frame>

      <Modal
        id="basic-modal"
        icon={<Computer variant="16x16_4" />}
        title={title}
        titleBarOptions={<TitleBar.Close onClick={closeModal} />}
        dragOptions={{
          defaultPosition: {
            x: 0,
            y: 50,
          },
        }}
      >
        <Modal.Content width="300px" boxShadow="$in" bgColor="white" p="16px">
          <Frame as="div" display="flex" flexDirection="column" gap="8px">
            <h4>useModal Hook</h4>
            <p>
              This modal automatically registered with the TaskBar when it
              mounted.
            </p>
            <p>
              The Modal component handles its own rendering - the useModal hook
              provides programmatic control.
            </p>
          </Frame>
        </Modal.Content>
      </Modal>
    </Frame>
  );
};

export const BasicUsage: Story = {
  render: () => <BasicUsageDemo />,
  play: async ({ canvas, userEvent }) => {
    const modal = canvas.getByRole('dialog');

    // a modal registers with the TaskBar when it mounts
    await expect(taskBarButtons(canvas, 'Basic Modal')).toHaveLength(1);

    // remove(id) takes it off the TaskBar, but the modal stays
    await userEvent.click(
      canvas.getByRole('button', { name: 'Remove from TaskBar' }),
    );

    await expect(taskBarButtons(canvas, 'Basic Modal')).toHaveLength(0);
    await expect(modal).toBeVisible();

    // and add(modal) puts it back
    await userEvent.click(
      canvas.getByRole('button', { name: 'Add to TaskBar' }),
    );

    await expect(taskBarButtons(canvas, 'Basic Modal')).toHaveLength(1);

    // a new title renames its TaskBar button
    await userEvent.click(canvas.getByRole('button', { name: 'Rename' }));

    await expect(modal).toHaveTextContent('Renamed Modal');
    await expect(taskBarButtons(canvas, 'Basic Modal')).toHaveLength(0);
    await expect(taskBarButtons(canvas, 'Renamed Modal')).toHaveLength(1);
  },
  parameters: {
    docs: {
      description: {
        story:
          'Basic example showing modal registration and programmatic control using the useModal hook.',
      },
    },
  },
};

const MinimizeRestoreDemo = () => {
  const { remove, minimize, restore, focus, add, toggle, subscribe } =
    useModal();
  const [isVisible, setIsVisible] = React.useState(true);

  // follows the modal, so Toggle knows whether to minimize or restore it
  React.useEffect(() => {
    const unsubscribes = [
      subscribe(ModalEvents.MinimizeModal, ({ id }) => {
        if (id === 'minimize-modal') setIsVisible(false);
      }),
      subscribe(ModalEvents.RestoreModal, ({ id }) => {
        if (id === 'minimize-modal') setIsVisible(true);
      }),
    ];

    return () => unsubscribes.forEach(unsubscribe => unsubscribe());
  }, [subscribe]);

  const toggleModal = () => toggle('minimize-modal', isVisible);

  const closeModal = () => remove('minimize-modal');

  const minimizeModal = () => {
    minimize('minimize-modal');
    focus('no-id');
  };

  const restoreModal = () => {
    restore('minimize-modal');
    focus('minimize-modal');
  };

  const addToTaskBar = () => {
    add({
      id: 'minimize-modal',
      title: 'Minimize Example',
      icon: <Mmsys113 variant="16x16_4" />,
      hasButton: true,
    });
  };

  const removeFocus = () => {
    focus('no-id');
  };

  return (
    <Frame display="flex" flexDirection="column" gap="16px" p="20px">
      <TaskBar />

      <Frame display="flex" gap="10px" flexWrap="wrap">
        <Button onClick={minimizeModal}>Minimize</Button>
        <Button onClick={restoreModal}>Restore</Button>
        <Button onClick={toggleModal}>Toggle</Button>
        <Button onClick={closeModal}>Remove from TaskBar</Button>
        <Button onClick={addToTaskBar}>Add to TaskBar</Button>
        <Button onClick={removeFocus}>Remove Focus</Button>
      </Frame>

      <Modal
        id="minimize-modal"
        icon={<Mmsys113 variant="16x16_4" />}
        title="Minimize Example"
        titleBarOptions={[
          <Modal.Minimize key="minimize" />,
          <TitleBar.Close key="close" onClick={closeModal} />,
        ]}
        dragOptions={{
          defaultPosition: {
            x: 0,
            y: 50,
          },
        }}
      >
        <Modal.Content width="350px" boxShadow="$in" bgColor="white" p="16px">
          <Frame display="flex" flexDirection="column" gap="8px">
            <h4>Minimize & Restore</h4>
            <p>This modal demonstrates minimize/restore functionality:</p>
            <Frame as="ul" my="$8">
              <li>
                <code>minimize(id)</code> - Hide modal, show in TaskBar
              </li>
              <li>
                <code>restore(id)</code> - Show modal again
              </li>
              <li>
                <code>focus(id)</code> - Bring modal to front
              </li>
            </Frame>
            <p>
              Try minimizing this modal and restoring it from the TaskBar or
              control buttons.
            </p>
          </Frame>
        </Modal.Content>
      </Modal>
    </Frame>
  );
};

export const MinimizeRestore: Story = {
  render: () => <MinimizeRestoreDemo />,
  play: async ({ canvas, userEvent }) => {
    const modal = canvas.getByRole('dialog');
    const control = (name: string) =>
      userEvent.click(canvas.getByRole('button', { name }));

    await expectActive(modal, true);

    // minimize(id) hides the modal, restore(id) brings it back
    await control('Minimize');

    await expect(modal).not.toBeVisible();
    // a minimized modal isn't the active one, even though the demo
    // re-renders when it's minimized
    await expectActive(modal, false);

    await control('Restore');

    await expect(modal).toBeVisible();
    await expectActive(modal, true);

    // toggle(id, isActive) minimizes an open modal, and restores and focuses a
    // minimized one
    await control('Toggle');

    await expect(modal).not.toBeVisible();

    // with no modal active, so the focus can only come from toggle
    await control('Remove Focus');
    await control('Toggle');

    await expect(modal).toBeVisible();
    await expectActive(modal, true);

    // focus('no-id') leaves no modal active
    await control('Remove Focus');

    await expectActive(modal, false);

    // remove(id) and add(modal) take it off and put it back on the TaskBar
    await control('Remove from TaskBar');

    await expect(taskBarButtons(canvas, 'Minimize Example')).toHaveLength(0);

    await control('Add to TaskBar');

    await expect(taskBarButtons(canvas, 'Minimize Example')).toHaveLength(1);
  },
  parameters: {
    docs: {
      description: {
        story:
          'Example showing minimize and restore functionality with programmatic control.',
      },
    },
  },
};

const MODAL_ICONS = {
  'first-modal': <FolderOpen variant="16x16_4" />,
  'second-modal': <ReaderClosed variant="16x16_4" />,
  'third-modal': <WindowsExplorer variant="16x16_4" />,
} as const;

const MultipleModalsDemo = () => {
  const { add, remove, minimize, restore, focus } = useModal();

  const removeModal = (id: string) => {
    remove(id);
    minimize(id);
    focus('no-id');
  };

  const controlModal =
    (
      id: keyof typeof MODAL_ICONS,
      action: 'add' | 'focus' | 'minimize' | 'restore' | 'close',
    ) =>
    () => {
      switch (action) {
        case 'add':
          add({
            id,
            title: id,
            icon: MODAL_ICONS[id],
            hasButton: true,
          });
          focus(id);
          restore(id);
          break;
        case 'focus':
          focus(id);
          break;
        case 'minimize':
          minimize(id);
          focus('no-id');
          break;
        case 'restore':
          restore(id);
          focus(id);
          break;
        case 'close':
          removeModal(id);
          break;
      }
    };

  return (
    <Frame display="flex" flexDirection="column" gap="16px" p="20px">
      <TaskBar />

      <Frame display="flex" flexDirection="column" gap="8px">
        {(['first-modal', 'second-modal', 'third-modal'] as const).map(
          (id, index) => (
            <Frame key={id} display="flex" gap="8px" alignItems="center">
              <span style={{ minWidth: '80px', fontSize: '14px' }}>
                Modal {index + 1}:
              </span>
              <Button onClick={controlModal(id, 'focus')}>Focus</Button>
              <Button onClick={controlModal(id, 'minimize')}>Minimize</Button>
              <Button onClick={controlModal(id, 'restore')}>Restore</Button>
              <Button onClick={controlModal(id, 'close')}>Remove</Button>
              <Button onClick={controlModal(id, 'add')}>Add</Button>
            </Frame>
          ),
        )}
      </Frame>

      <Modal
        id="first-modal"
        icon={MODAL_ICONS['first-modal']}
        title="first-modal"
        dragOptions={{ defaultPosition: { x: 0, y: 130 } }}
        titleBarOptions={[
          <Modal.Minimize key="minimize" />,
          <TitleBar.Close
            key="close"
            onClick={() => removeModal('first-modal')}
          />,
        ]}
      >
        <Modal.Content width="300px" boxShadow="$in" bgColor="white" p="16px">
          <Frame as="div" display="flex" flexDirection="column" gap="8px">
            <h4>First Modal</h4>
            <p>
              ID: <code>first-modal</code>
            </p>
            <p style={{ fontSize: '12px' }}>
              Each modal has a unique ID for programmatic control.
            </p>
          </Frame>
        </Modal.Content>
      </Modal>

      <Modal
        id="second-modal"
        icon={MODAL_ICONS['second-modal']}
        title="second-modal"
        dragOptions={{ defaultPosition: { x: 320, y: 130 } }}
        titleBarOptions={[
          <Modal.Minimize key="minimize" />,
          <TitleBar.Close
            key="close"
            onClick={() => removeModal('second-modal')}
          />,
        ]}
      >
        <Modal.Content width="340px" boxShadow="$in" bgColor="white" p="16px">
          <Frame as="div" display="flex" flexDirection="column" gap="8px">
            <h4>Second Modal</h4>
            <p>
              ID: <code>second-modal</code>
            </p>
            <p style={{ fontSize: '12px' }}>
              Multiple modals can coexist and be controlled independently.
            </p>
          </Frame>
        </Modal.Content>
      </Modal>

      <Modal
        id="third-modal"
        icon={MODAL_ICONS['third-modal']}
        title="third-modal"
        dragOptions={{ defaultPosition: { x: 160, y: 330 } }}
        titleBarOptions={[
          <Modal.Minimize key="minimize" />,
          <TitleBar.Close
            key="close"
            onClick={() => removeModal('third-modal')}
          />,
        ]}
      >
        <Modal.Content width="300px" boxShadow="$in" bgColor="white" p="16px">
          <Frame as="div" display="flex" flexDirection="column" gap="8px">
            <h4>Third Modal</h4>
            <p>
              ID: <code>third-modal</code>
            </p>
            <p style={{ fontSize: '12px' }}>
              Focus management ensures proper z-index ordering.
            </p>
          </Frame>
        </Modal.Content>
      </Modal>
    </Frame>
  );
};

export const MultipleModals: Story = {
  render: () => <MultipleModalsDemo />,
  play: async ({ canvas, userEvent }) => {
    const [first, second, third] = canvas.getAllByRole('dialog');
    // each modal has a row of controls, labelled "Modal 1:", "Modal 2:"…
    const control = (modal: number, name: string) =>
      userEvent.click(
        within(canvas.getByText(`Modal ${modal}:`).parentElement!).getByRole(
          'button',
          { name },
        ),
      );

    // focusing one modal leaves the others inactive
    await control(2, 'Focus');

    await expectActive(first, false);
    await expectActive(second, true);
    await expectActive(third, false);

    // minimizing one doesn't touch the others
    await control(1, 'Minimize');

    await expect(first).not.toBeVisible();
    await expect(second).toBeVisible();
    await expect(third).toBeVisible();

    await control(1, 'Restore');

    await expect(first).toBeVisible();
    await expectActive(first, true);
    await expectActive(second, false);

    // removing one takes it off the TaskBar; adding it back returns it
    await control(3, 'Remove');

    await expect(third).not.toBeVisible();
    await expect(taskBarButtons(canvas, 'third-modal')).toHaveLength(0);
    await expect(taskBarButtons(canvas, 'first-modal')).toHaveLength(1);

    await control(3, 'Add');

    await expect(third).toBeVisible();
    await expect(taskBarButtons(canvas, 'third-modal')).toHaveLength(1);
  },
  parameters: {
    docs: {
      description: {
        story:
          'Example showing multiple modals with independent programmatic control.',
      },
    },
  },
};

const EventSubscriptionDemo = () => {
  const { remove, minimize, restore, subscribe, add, focus } = useModal();
  const eventLogRef = React.useRef<HTMLDivElement>(null);
  const eventCountRef = React.useRef(0);

  const addEventToLog = React.useCallback((eventText: string) => {
    if (eventLogRef.current) {
      const eventItem = document.createElement('div');
      eventItem.style.cssText = `
          font-size: 12px;
          padding: 2px 0;
          border-bottom: 1px solid #eee;
          font-family: monospace;
        `;
      eventCountRef.current += 1;
      eventItem.textContent = `${eventCountRef.current}. ${eventText}`;
      eventLogRef.current.appendChild(eventItem);

      eventLogRef.current.scrollTop = eventLogRef.current.scrollHeight;

      if (eventLogRef.current.children.length > 20) {
        const firstChild = eventLogRef.current.firstChild;
        if (firstChild) {
          eventLogRef.current.removeChild(firstChild);
        }
      }
    }
  }, []);

  const clearEventLog = React.useCallback(() => {
    if (eventLogRef.current) {
      eventLogRef.current.innerHTML = '';
      eventCountRef.current = 0;
    }
  }, []);

  React.useEffect(() => {
    const unsubscribes = [
      subscribe(ModalEvents.AddModal, ({ id, title }) => {
        addEventToLog(`➕ Added: ${title} (${id})`);
      }),
      subscribe(ModalEvents.RemoveModal, ({ id }) => {
        addEventToLog(`❌ Removed: ${id}`);
      }),
      subscribe(ModalEvents.MinimizeModal, ({ id }) => {
        addEventToLog(`➖ Minimized: ${id}`);
      }),
      subscribe(ModalEvents.RestoreModal, ({ id }) => {
        addEventToLog(`⬆️ Restored: ${id}`);
      }),
      subscribe(ModalEvents.ModalVisibilityChanged, ({ id }) => {
        addEventToLog(`👁️ Focus changed: ${id}`);
      }),
    ];

    return () => {
      unsubscribes.forEach(unsubscribe => unsubscribe());
    };
  }, [subscribe, addEventToLog]);

  return (
    <Frame display="flex" flexDirection="column" gap="16px" p="20px">
      <TaskBar />
      <Frame display="flex" gap="10px" flexWrap="wrap">
        <Button
          onClick={() => {
            minimize('event-modal');
            focus('no-id');
          }}
        >
          Minimize
        </Button>
        <Button
          onClick={() => {
            restore('event-modal');
            focus('event-modal');
          }}
        >
          Restore
        </Button>
        <Button
          onClick={() => {
            minimize('event-modal');
            remove('event-modal');
            focus('no-id');
          }}
        >
          Remove
        </Button>
        <Button
          onClick={() =>
            add({
              id: 'event-modal',
              title: 'Event Modal',
              icon: <Computer variant="16x16_4" />,
              hasButton: true,
            })
          }
        >
          Add
        </Button>
        <Button
          onClick={() => {
            focus('no-id');
          }}
        >
          Remove focus
        </Button>
        <Button onClick={clearEventLog}>Clear Log</Button>
      </Frame>

      <Frame display="flex" gap="16px">
        <Modal
          id="event-modal"
          icon={<Computer variant="16x16_4" />}
          title="Event Modal"
          titleBarOptions={[
            <Modal.Minimize key="minimize" />,
            <TitleBar.Close
              key="close"
              onClick={() => {
                console.log('Closing event modal');
                minimize('event-modal');
                remove('event-modal');
                focus('no-id');
              }}
            />,
          ]}
          dragOptions={{
            defaultPosition: {
              x: 0,
              y: 290,
            },
          }}
        >
          <Modal.Content width="350px" boxShadow="$in" bgColor="white" p="16px">
            <Frame as="div" display="flex" flexDirection="column" gap="8px">
              <h4>Event Subscription</h4>
              <p>This example demonstrates event subscription:</p>
              <ul>
                <li>
                  <code>AddModal</code> - Modal created
                </li>
                <li>
                  <code>RemoveModal</code> - Modal removed
                </li>
                <li>
                  <code>MinimizeModal</code> - Modal minimized
                </li>
                <li>
                  <code>RestoreModal</code> - Modal restored
                </li>
                <li>
                  <code>ModalVisibilityChanged</code> - Focus changed
                </li>
              </ul>
              <p style={{ fontSize: '12px' }}>
                Events are logged in real-time using DOM manipulation to avoid
                re-render loops.
              </p>
            </Frame>
          </Modal.Content>
        </Modal>

        <Frame
          display="flex"
          flexDirection="column"
          width="320px"
          height="200px"
          boxShadow="$out"
          bgColor="$material"
          p="$8"
        >
          <Frame as="h4" fontSize="14px" m="$0" mb="$8">
            Event Log
          </Frame>
          <Frame
            boxShadow="$in"
            bgColor="white"
            p="$8"
            ref={eventLogRef}
            overflow="auto"
            backgroundColor="#fafafa"
            flexGrow={1}
          />
        </Frame>
      </Frame>
    </Frame>
  );
};

export const EventSubscription: Story = {
  render: () => <EventSubscriptionDemo />,
  play: async ({ canvas, userEvent }) => {
    const log = canvas.getByText('Event Log').nextElementSibling;
    const control = (name: string) =>
      userEvent.click(canvas.getByRole('button', { name }));

    // each call emits its events, which subscribers receive
    await control('Minimize');

    await expect(log).toHaveTextContent('Minimized: event-modal');
    await expect(log).toHaveTextContent('Focus changed: no-id');

    await control('Restore');

    await expect(log).toHaveTextContent('Restored: event-modal');
    await expect(log).toHaveTextContent('Focus changed: event-modal');

    await control('Remove');

    await expect(log).toHaveTextContent('Removed: event-modal');

    await control('Add');

    await expect(log).toHaveTextContent('Added: Event Modal (event-modal)');

    // and back on screen, for whoever opens the story
    await control('Restore');

    await expect(canvas.getByRole('dialog')).toBeVisible();
  },
  parameters: {
    docs: {
      description: {
        story:
          'Example showing how to subscribe to modal events with real-time logging that avoids infinite re-render loops by using DOM manipulation instead of React state.',
      },
    },
  },
};
