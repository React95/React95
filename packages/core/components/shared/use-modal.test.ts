import { describe, expect, it, vi, beforeEach, Mock } from 'vitest';
import { act, renderHook } from './test/utils';
import { useModal } from './use-modal';
import { ModalEvents, modals } from './events';

// Mock the modal controller
vi.mock('./modal-controller', () => ({
  modals: {
    emit: vi.fn(),
    on: vi.fn(),
    off: vi.fn(),
  },
}));

describe('useModal', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Modal control methods', () => {
    it('should provide all control methods', () => {
      const { result } = renderHook(() => useModal());

      expect(result.current).toHaveProperty('add');
      expect(result.current).toHaveProperty('remove');
      expect(result.current).toHaveProperty('minimize');
      expect(result.current).toHaveProperty('restore');
      expect(result.current).toHaveProperty('focus');
      expect(result.current).toHaveProperty('toggle');
      expect(result.current).toHaveProperty('subscribe');
    });

    it('should emit AddModal event when add is called', () => {
      const { result } = renderHook(() => useModal());
      const modal = {
        id: 'test-modal',
        title: 'Test Modal',
        hasButton: true,
      };

      act(() => {
        result.current.add(modal);
      });

      expect(modals.emit).toHaveBeenCalledWith(ModalEvents.AddModal, modal);
    });

    it('should emit RemoveModal event when remove is called', () => {
      const { result } = renderHook(() => useModal());
      const modalId = 'test-modal';

      act(() => {
        result.current.remove(modalId);
      });

      expect(modals.emit).toHaveBeenCalledWith(ModalEvents.RemoveModal, {
        id: modalId,
      });
    });

    it('should emit MinimizeModal event when minimize is called', () => {
      const { result } = renderHook(() => useModal());
      const modalId = 'test-modal';

      act(() => {
        result.current.minimize(modalId);
      });

      expect(modals.emit).toHaveBeenCalledWith(ModalEvents.MinimizeModal, {
        id: modalId,
      });
    });

    it('should emit RestoreModal event when restore is called', () => {
      const { result } = renderHook(() => useModal());
      const modalId = 'test-modal';

      act(() => {
        result.current.restore(modalId);
      });

      expect(modals.emit).toHaveBeenCalledWith(ModalEvents.RestoreModal, {
        id: modalId,
      });
    });

    it('should emit ModalVisibilityChanged event when focus is called', () => {
      const { result } = renderHook(() => useModal());
      const modalId = 'test-modal';

      act(() => {
        result.current.focus(modalId);
      });

      expect(modals.emit).toHaveBeenCalledWith(
        ModalEvents.ModalVisibilityChanged,
        {
          id: modalId,
        },
      );
    });
  });

  describe('toggle functionality', () => {
    it('should minimize when modal is active', () => {
      const { result } = renderHook(() => useModal());
      const modalId = 'test-modal';

      act(() => {
        result.current.toggle(modalId, true);
      });

      expect(modals.emit).toHaveBeenCalledWith(ModalEvents.MinimizeModal, {
        id: modalId,
      });
    });

    it('should restore and focus when modal is not active', () => {
      const { result } = renderHook(() => useModal());
      const modalId = 'test-modal';

      act(() => {
        result.current.toggle(modalId, false);
      });

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

  describe('Event subscription', () => {
    it('should subscribe to events and return unsubscribe function', () => {
      const { result } = renderHook(() => useModal());
      const callback = vi.fn();
      const unsubscribe = vi.fn();

      (modals.on as Mock).mockReturnValue(unsubscribe);

      let unsubscribeFunction: (() => void) | undefined;

      act(() => {
        unsubscribeFunction = result.current.subscribe(
          ModalEvents.AddModal,
          callback,
        );
      });

      expect(modals.on).toHaveBeenCalledWith(ModalEvents.AddModal, callback);
      expect(typeof unsubscribeFunction).toBe('function');

      // Test unsubscribe
      act(() => {
        unsubscribeFunction?.();
      });

      expect(modals.off).toHaveBeenCalledWith(ModalEvents.AddModal, callback);
    });

    it('should handle multiple event subscriptions', () => {
      const { result } = renderHook(() => useModal());
      const callback1 = vi.fn();
      const callback2 = vi.fn();

      act(() => {
        result.current.subscribe(ModalEvents.AddModal, callback1);
        result.current.subscribe(ModalEvents.RemoveModal, callback2);
      });

      expect(modals.on).toHaveBeenCalledWith(ModalEvents.AddModal, callback1);
      expect(modals.on).toHaveBeenCalledWith(
        ModalEvents.RemoveModal,
        callback2,
      );
    });
  });

  describe('Method stability', () => {
    it('should return stable function references across re-renders', () => {
      const { result, rerender } = renderHook(() => useModal());

      const initialMethods = { ...result.current };

      // Force re-render
      rerender();

      expect(result.current.add).toBe(initialMethods.add);
      expect(result.current.remove).toBe(initialMethods.remove);
      expect(result.current.minimize).toBe(initialMethods.minimize);
      expect(result.current.restore).toBe(initialMethods.restore);
      expect(result.current.focus).toBe(initialMethods.focus);
      expect(result.current.toggle).toBe(initialMethods.toggle);
      expect(result.current.subscribe).toBe(initialMethods.subscribe);
    });
  });
});
