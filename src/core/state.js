/**
 * State Management Store
 * Manages reactive UI state decoupled from direct view rendering.
 */

class Store {
  constructor() {
    this.state = {
      activeCategory: 'all',
      isLoaderActive: true,
      selectedProject: null
    };
    this.listeners = {};
  }

  /**
   * Subscribes a listener callback to state change events.
   */
  subscribe(key, callback) {
    if (!this.listeners[key]) {
      this.listeners[key] = [];
    }
    this.listeners[key].push(callback);
  }

  /**
   * Updates state property and notifies registered subscribers.
   */
  setState(key, val) {
    try {
      if (this.state[key] !== val) {
        this.state[key] = val;
        if (this.listeners[key]) {
          this.listeners[key].forEach(cb => cb(val));
        }
      }
    } catch (error) {
      console.error(`Error updating state for key "${key}":`, error);
    }
  }

  /**
   * Retrieves current value of a state property.
   */
  getState(key) {
    return this.state[key];
  }
}

export const appState = new Store();
