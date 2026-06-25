/**
 * Masonry Gallery Rendering Module
 * Manages asymmetric grid item rendering, vibrant category borders on hover, and IntersectionObserver scroll reveal.
 */
import { portfolioItems } from '../../data/portfolioData.js';

let observerInstance = null;

/**
 * Renders portfolio grid items filtered by active category.
 */
export function renderMasonryGrid(category = 'all') {
  try {
    const gridContainer = document.getElementById('portfolioMasonryGrid');
    if (!gridContainer) return;

    // Filter items
    const filteredItems = category === 'all'
      ? portfolioItems
      : portfolioItems.filter(item => item.category === category);

    // Disconnect old observer
    if (observerInstance) {
      observerInstance.disconnect();
    }

    gridContainer.innerHTML = '';

    if (filteredItems.length === 0) {
      gridContainer.innerHTML = `<div class="col-span-full py-16 text-center text-gray-500 font-light">No artistic creations found in this category.</div>`;
      return;
    }

    filteredItems.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = `gallery-card reveal-item group bg-white shadow-lg cursor-pointer ${item.gridSpan}`;
      card.dataset.category = item.category;
      
      // Calculate inline stagger delay for scroll reveal
      card.style.transitionDelay = `${(index % 4) * 120}ms`;

      card.innerHTML = `
        <div class="relative w-full h-full min-h-[280px] md:min-h-[340px] overflow-hidden bg-gray-100 flex items-center justify-center">
          <img 
            src="${item.image}" 
            alt="${item.title}" 
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/30 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6 md:p-8 z-20">
            <span class="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-wider font-semibold mb-2 text-white shadow-sm" style="background-color: ${item.accentColor}">
              ${formatCategoryName(item.category)}
            </span>
            <h3 class="text-xl md:text-2xl font-bold text-white tracking-tight mb-1 font-heading">${item.title}</h3>
            <p class="text-sm text-gray-200 line-clamp-2 font-light">${item.description}</p>
          </div>
        </div>
      `;

      gridContainer.appendChild(card);
    });

    // Initialize scroll reveal observer
    initScrollObserver();
  } catch (error) {
    console.error('Error rendering masonry grid:', error);
  }
}

/**
 * Initializes IntersectionObserver to trigger stagger slide up bounce animations.
 */
function initScrollObserver() {
  const items = document.querySelectorAll('.reveal-item');
  if (!items.length) return;

  observerInstance = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observerInstance.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  items.forEach(item => observerInstance.observe(item));
}

/**
 * Helper to map category id to display name.
 */
function formatCategoryName(cat) {
  switch (cat) {
    case 'artworks': return 'Fluid Artwork';
    case 'murals': return 'Interior Mural';
    case 'bts': return 'Behind the Scenes';
    default: return 'Creation';
  }
}
