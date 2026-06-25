/**
 * Paint Splatter Page Loader Module
 * Orchestrates the organic watercolor reveal animation upon initial page load.
 */
import { appState } from '../../core/state.js';

/**
 * Initializes the loader curtain dismissal timer and transitions.
 */
export function initPaintLoader() {
  try {
    const loaderElement = document.getElementById('paintLoader');
    if (!loaderElement) {
      appState.setState('isLoaderActive', false);
      return;
    }

    // Simulate organic watercolor spread duration
    setTimeout(() => {
      loaderElement.classList.add('hidden-loader');
      appState.setState('isLoaderActive', false);
      
      // Remove element from DOM after transition completes to free memory
      setTimeout(() => {
        if (loaderElement.parentNode) {
          loaderElement.parentNode.removeChild(loaderElement);
        }
      }, 1000);
    }, 1200);
  } catch (error) {
    console.error('Failed to initialize Paint Splatter loader:', error);
  }
}
