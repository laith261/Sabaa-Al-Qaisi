/**
 * Main Application Bootstrapper
 * Initializes all feature modules, animations, and state subscriptions.
 */
import { initPaintLoader } from '../features/loader/paintLoader.js';
import { initHeroParallax } from '../features/hero/mouseParallax.js';
import { initFilterBar } from '../features/gallery/filterBar.js';
import { renderMasonryGrid } from '../features/gallery/masonryGrid.js';
import { initAboutReveal } from '../features/about/aboutReveal.js';
import { initContactForm } from '../features/contact/contactForm.js';
import { initMagneticButtons } from '../features/contact/magneticBtn.js';

/**
 * Boots the application safely once DOM is fully parsed.
 */
function bootstrapApp() {
  console.log('🎨 Bootstrapping Sabaa Al-Qaisi Art & Interior Portfolio...');

  try {
    initPaintLoader();
  } catch (err) { console.error('Loader init failed:', err); }

  try {
    initHeroParallax();
  } catch (err) { console.error('Hero parallax init failed:', err); }

  try {
    initFilterBar();
    renderMasonryGrid('all');
  } catch (err) { console.error('Gallery init failed:', err); }

  try {
    initAboutReveal();
  } catch (err) { console.error('About reveal init failed:', err); }

  try {
    initContactForm();
  } catch (err) { console.error('Contact form init failed:', err); }

  try {
    initMagneticButtons();
  } catch (err) { console.error('Magnetic buttons init failed:', err); }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrapApp);
} else {
  bootstrapApp();
}
