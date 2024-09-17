import { Emitter } from './events';
import { describe, expect, it, vi } from 'vitest';

describe('Emitter', () => {
  it('should emit events with the correct data', () => {
    const emitter = new Emitter();
    const callback = vi.fn();

    emitter.on('add', callback);
    emitter.emit('add', { lib: 'react95' });

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith({ lib: 'react95' });
  });

  it('should not emit events to removed listeners', () => {
    const emitter = new Emitter();
    const callback = vi.fn();

    emitter.on('add', callback);
    emitter.off('add', callback);
    emitter.emit('add', { lib: 'react95' });

    expect(callback).not.toHaveBeenCalled();
  });

  it('should emit events to multiple listeners', () => {
    const emitter = new Emitter();
    const callback1 = vi.fn();
    const callback2 = vi.fn();

    emitter.on('add', callback1);
    emitter.on('add', callback2);
    emitter.emit('add', { lib: 'react95' });

    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback1).toHaveBeenCalledWith({ lib: 'react95' });
    expect(callback2).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledWith({ lib: 'react95' });
  });

  it('should not throw an error when emitting an event with no listeners', () => {
    const emitter = new Emitter();

    expect(() => emitter.emit('add', { lib: 'react95' })).not.toThrow();
  });
});
