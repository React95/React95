import { describe, expect, it, vi, beforeEach } from 'vitest';
import { modalController, modals } from './modal-controller';
import { ModalEvents } from './modal-types';

// Mock the emitter
vi.mock('./emitter', () => ({
  Emitter: vi.fn().mockImplementation(() => ({
    emit: vi.fn(),
    on: vi.fn(),
    off: vi.fn(),
  })),
}));

describe('modalController', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('add', () => {
    it('should emit AddModal event', () => {
      const modal = {
        id: 'test-modal',
        title: 'Test Modal',
        hasButton: true,
      };

      modalController.add(modal);

      expect(modals.emit).toHaveBeenCalledWith(ModalEvents.AddModal, modal);
    });
  });

  describe('remove', () => {
    it('should emit RemoveModal event with id', () => {
      const modalId = 'test-modal';

      modalController.remove(modalId);

      expect(modals.emit).toHaveBeenCalledWith(ModalEvents.RemoveModal, {
        id: modalId,
      });
    });
  });

  describe('minimize', () => {
    it('should emit MinimizeModal event with id', () => {
      const modalId = 'test-modal';

      modalController.minimize(modalId);

      expect(modals.emit).toHaveBeenCalledWith(ModalEvents.MinimizeModal, {
        id: modalId,
      });
    });
  });

  describe('restore', () => {
    it('should emit RestoreModal event with id', () => {
      const modalId = 'test-modal';

      modalController.restore(modalId);

      expect(modals.emit).toHaveBeenCalledWith(ModalEvents.RestoreModal, {
        id: modalId,
      });
    });
  });

  describe('focus', () => {
    it('should emit ModalVisibilityChanged event with id', () => {
      const modalId = 'test-modal';

      modalController.focus(modalId);

      expect(modals.emit).toHaveBeenCalledWith(
        ModalEvents.ModalVisibilityChanged,
        {
          id: modalId,
        },
      );
    });
  });

  describe('toggle', () => {
    it('should minimize when modal is active', () => {
      const modalId = 'test-modal';

      modalController.toggle(modalId, true);

      expect(modals.emit).toHaveBeenCalledWith(ModalEvents.MinimizeModal, {
        id: modalId,
      });
    });

    it('should restore and focus when modal is not active', () => {
      const modalId = 'test-modal';

      modalController.toggle(modalId, false);

      expect(modals.emit).toHaveBeenCalledWith(ModalEvents.RestoreModal, {
        id: modalId,
      });
      expect(modals.emit).toHaveBeenCalledWith(
        ModalEvents.ModalVisibilityChanged,
        {
          id: modalId,
        },
      );
    });
  });

  describe('modals emitter instance', () => {
    it('should be properly exported', () => {
      expect(modals).toBeDefined();
      expect(modals.emit).toBeDefined();
      expect(modals.on).toBeDefined();
      expect(modals.off).toBeDefined();
    });
  });
});
