/**
 * About Section Reveal Module
 * Manages scroll-triggered reveal animations for the split-screen artist biography section.
 */

/**
 * Attaches scroll observer to about section elements.
 */
export function initAboutReveal() {
  try {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;

    const revealElements = aboutSection.querySelectorAll('.about-reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-12');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    revealElements.forEach(el => observer.observe(el));
  } catch (error) {
    console.error('Error initializing about reveal:', error);
  }
}
