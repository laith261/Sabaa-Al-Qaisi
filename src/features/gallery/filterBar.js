/**
 * Gallery Filter Bar Module
 * Renders filter category buttons and handles instant client-side filtering without page reloads.
 */
import { filterCategories } from '../../data/portfolioData.js';
import { appState } from '../../core/state.js';
import { renderMasonryGrid } from './masonryGrid.js';

/**
 * Initializes filter buttons and subscribes to category state changes.
 */
export function initFilterBar() {
  try {
    const filterContainer = document.getElementById('portfolioFilterBar');
    if (!filterContainer) return;

    filterContainer.innerHTML = '';

    filterCategories.forEach(cat => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.dataset.category = cat.id;
      btn.className = `px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform active:scale-95 shadow-sm border ${
        cat.id === 'all'
          ? 'bg-cyan-500 text-white border-cyan-500 shadow-cyan-500/30'
          : 'bg-white/80 text-gray-700 border-gray-200 hover:border-cyan-400 hover:text-cyan-600'
      }`;
      btn.textContent = cat.label;

      btn.addEventListener('click', () => {
        appState.setState('activeCategory', cat.id);
      });

      filterContainer.appendChild(btn);
    });

    // Subscribe to state change to update button styling and re-render grid
    appState.subscribe('activeCategory', (activeCat) => {
      updateFilterButtons(filterContainer, activeCat);
      renderMasonryGrid(activeCat);
    });
  } catch (error) {
    console.error('Error initializing filter bar:', error);
  }
}

/**
 * Updates active pill button visual styling.
 */
function updateFilterButtons(container, activeCat) {
  const buttons = container.querySelectorAll('button');
  buttons.forEach(btn => {
    if (btn.dataset.category === activeCat) {
      btn.className = 'px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform scale-105 shadow-md bg-cyan-500 text-white border-cyan-500 shadow-cyan-500/30';
    } else {
      btn.className = 'px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-102 bg-white/80 text-gray-700 border border-gray-200 hover:border-cyan-400 hover:text-cyan-600 shadow-sm';
    }
  });
}
