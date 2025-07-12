import React from 'react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { Modal } from '../Modal/Modal';
import { TaskBar } from '../TaskBar/TaskBar';
import { useModal } from './use-modal';
import { ModalEvents } from './modal-types';
import { Computer } from '@react95/icons';

// Test component that uses useModal hook
const TestModalController = () => {
  const { add, remove, minimize, restore, focus, subscribe } = useModal();
  const [events, setEvents] = React.useState<string[]>([]);

  React.useEffect(() => {
    const unsubscribes = [
      subscribe(ModalEvents.AddModal, ({ id, title }) => {
        setEvents(prev => [...prev, `Added: ${title} (${id})`]);
      }),
      subscribe(ModalEvents.RemoveModal, ({ id }) => {
        setEvents(prev => [...prev, `Removed: ${id}`]);
      }),
      subscribe(ModalEvents.MinimizeModal, ({ id }) => {
        setEvents(prev => [...prev, `Minimized: ${id}`]);
      }),
      subscribe(ModalEvents.RestoreModal, ({ id }) => {
        setEvents(prev => [...prev, `Restored: ${id}`]);
      }),
      subscribe(ModalEvents.ModalVisibilityChanged, ({ id }) => {
        setEvents(prev => [...prev, `Focus: ${id}`]);
      }),
    ];

    return () => {
      unsubscribes.forEach(unsubscribe => unsubscribe());
    };
  }, [subscribe]);

  return (
    <div>
      <button onClick={() => remove('test-modal')} data-testid="remove-modal">
        Remove Modal
      </button>
      <button
        onClick={() => minimize('test-modal')}
        data-testid="minimize-modal"
      >
        Minimize Modal
      </button>
      <button onClick={() => restore('test-modal')} data-testid="restore-modal">
        Restore Modal
      </button>
      <button onClick={() => focus('test-modal')} data-testid="focus-modal">
        Focus Modal
      </button>
      <div data-testid="events-log">
        {events.map((event, index) => (
          <div key={index}>{event}</div>
        ))}
      </div>
    </div>
  );
};

describe('Modal System Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Modal registration and TaskBar integration', () => {
    it('should register modal with TaskBar when mounted', async () => {
      const { getByText } = render(
        <>
          <Modal
            id="integration-modal"
            icon={<Computer variant="16x16_4" />}
            title="Integration Test"
          >
            <Modal.Content>Test Content</Modal.Content>
          </Modal>
          <TaskBar />
        </>,
      );

      await waitFor(() => {
        expect(getByText('Integration Test')).toBeInTheDocument();
      });
    });

    it('should show modal in TaskBar with correct title', async () => {
      const { getByText } = render(
        <>
          <Modal
            id="taskbar-modal"
            icon={<Computer variant="16x16_4" />}
            title="TaskBar Modal"
          >
            <Modal.Content>Test Content</Modal.Content>
          </Modal>
          <TaskBar />
        </>,
      );

      await waitFor(() => {
        expect(getByText('TaskBar Modal')).toBeInTheDocument();
      });
    });
  });

  describe('useModal hook integration', () => {
    it('should handle modal lifecycle events', async () => {
      const { getByTestId, getByText } = render(<TestModalController />);

      // Test minimizing modal
      fireEvent.click(getByTestId('minimize-modal'));

      await waitFor(() => {
        expect(getByText(/Minimized: test-modal/)).toBeInTheDocument();
      });

      // Test restoring modal
      fireEvent.click(getByTestId('restore-modal'));

      await waitFor(() => {
        expect(getByText(/Restored: test-modal/)).toBeInTheDocument();
      });

      // Test removing modal
      fireEvent.click(getByTestId('remove-modal'));

      await waitFor(() => {
        expect(getByText(/Removed: test-modal/)).toBeInTheDocument();
      });
    });

    it('should handle focus changes', async () => {
      const { getByTestId } = render(<TestModalController />);

      // Test focus change
      fireEvent.click(getByTestId('focus-modal'));

      await waitFor(() => {
        // Should have multiple focus events now
        const focusEvents = getByTestId('events-log').textContent;
        expect(focusEvents).toMatch(/Focus: test-modal/);
      });
    });
  });

  describe('Modal minimize/restore functionality', () => {
    it('should hide modal when minimized', async () => {
      const { queryByRole, container } = render(
        <Modal
          id="minimize-test"
          icon={<Computer variant="16x16_4" />}
          title="Minimize Test"
          titleBarOptions={[<Modal.Minimize key="minimize" />]}
        >
          <Modal.Content>Test Content</Modal.Content>
        </Modal>,
      );

      // Modal should be visible initially
      expect(queryByRole('dialog')).toBeInTheDocument();

      // Find and click minimize button
      const minimizeButton = container
        .querySelector('img[alt="minimize"]')
        ?.closest<HTMLButtonElement>('button');

      if (minimizeButton) {
        fireEvent.click(minimizeButton);

        await waitFor(() => {
          expect(queryByRole('dialog')).not.toBeInTheDocument();
        });
      }
    });
  });

  describe('Multiple modal management', () => {
    it('should handle multiple modals independently', async () => {
      const { getAllByText } = render(
        <>
          <TaskBar />

          <Modal
            id="modal-1"
            icon={<Computer variant="16x16_4" />}
            title="Modal 1"
          >
            <Modal.Content>Content 1</Modal.Content>
          </Modal>
          <Modal
            id="modal-2"
            icon={<Computer variant="16x16_4" />}
            title="Modal 2"
          >
            <Modal.Content>Content 2</Modal.Content>
          </Modal>
        </>,
      );

      await waitFor(() => {
        // Each modal title should appear twice:
        // once in the TaskBar button and once in the Modal title
        const modal1Elements = getAllByText('Modal 1');
        const modal2Elements = getAllByText('Modal 2');

        // TaskBar button + Modal title
        expect(modal1Elements).toHaveLength(2);
        // TaskBar button + Modal title
        expect(modal2Elements).toHaveLength(2);
      });
    });
  });

  describe('Error scenarios', () => {
    it('should handle missing modal IDs gracefully', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      const { getByTestId } = render(<TestModalController />);

      // Try to remove non-existent modal
      fireEvent.click(getByTestId('remove-modal'));

      // Should not throw error
      expect(() => {
        fireEvent.click(getByTestId('minimize-modal'));
        fireEvent.click(getByTestId('restore-modal'));
        fireEvent.click(getByTestId('focus-modal'));
      }).not.toThrow();

      consoleSpy.mockRestore();
    });
  });
});
