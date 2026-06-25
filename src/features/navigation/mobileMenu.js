/**
 * Mobile Navigation Drawer Module
 * Handles responsive hamburger toggle interactions and smooth section routing on mobile viewports.
 */

/**
 * Initializes mobile menu button and navigation link listeners.
 */
export function initMobileMenu() {
  try {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const menuPanel = document.getElementById('mobileMenuPanel');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const closeMenuIcon = document.getElementById('closeMenuIcon');
    const navLinks = document.querySelectorAll('.mobile-nav-link');

    if (!menuBtn || !menuPanel) return;

    let isMenuOpen = false;

    /**
     * Toggles mobile menu visibility state and animates icons.
     */
    const toggleMenu = (forceClose = false) => {
      if (isMenuOpen || forceClose) {
        // Close menu
        isMenuOpen = false;
        menuPanel.classList.add('-translate-y-4', 'opacity-0', 'pointer-events-none');
        menuPanel.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
        
        if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
        if (closeMenuIcon) closeMenuIcon.classList.add('hidden');

        setTimeout(() => {
          if (!isMenuOpen) menuPanel.classList.add('hidden');
        }, 300);
      } else {
        // Open menu
        isMenuOpen = true;
        menuPanel.classList.remove('hidden');
        
        // Force reflow for smooth CSS transition
        void menuPanel.offsetWidth;

        menuPanel.classList.remove('-translate-y-4', 'opacity-0', 'pointer-events-none');
        menuPanel.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');

        if (hamburgerIcon) hamburgerIcon.classList.add('hidden');
        if (closeMenuIcon) closeMenuIcon.classList.remove('hidden');
      }
    };

    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close menu when tapping any mobile navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleMenu(true);
      });
    });

    // Close menu when tapping outside the panel
    document.addEventListener('click', (e) => {
      if (isMenuOpen && !menuPanel.contains(e.target) && !menuBtn.contains(e.target)) {
        toggleMenu(true);
      }
    });

    // Close menu on viewport resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        toggleMenu(true);
      }
    });
  } catch (error) {
    console.error('Error initializing mobile menu:', error);
  }
}
