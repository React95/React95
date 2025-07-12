export class Emitter<U extends string, T> {
  private listeners: { [key in U]?: Array<(data: Partial<T>) => void> } = {};

  on(eventName: U, callback: (data: Partial<T>) => void) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName]?.push(callback);
  }

  off(eventName: U, callback: (data: Partial<T>) => void) {
    if (this.listeners[eventName]) {
      this.listeners[eventName] = this.listeners[eventName]?.filter(
        cb => cb !== callback,
      );
    }
  }

  emit(eventName: U, data: Partial<T>) {
    if (this.listeners[eventName]) {
      this.listeners[eventName]?.forEach(callback => {
        try {
          callback(data);
        } catch (error) {
          console.error(`Error in event listener for ${eventName}:`, error);
        }
      });
    }
  }
}
