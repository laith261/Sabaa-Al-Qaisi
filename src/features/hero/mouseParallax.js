/**
 * Hero Interactive Parallax & Fluid Canvas Module
 * Tracks mouse movement for 3D depth parallax and renders ambient watercolor particles on canvas.
 */

/**
 * Initializes mouse move listeners for layered hero parallax.
 */
export function initHeroParallax() {
  try {
    const heroSection = document.getElementById('hero');
    const bgLayer = document.getElementById('heroBgLayer');
    const textLayer = document.getElementById('heroTextLayer');
    const canvasLayer = document.getElementById('heroCanvas');

    if (!heroSection) return;

    // Initialize Canvas Particles
    if (canvasLayer) {
      initFluidCanvas(canvasLayer);
    }


  } catch (error) {
    console.error('Error initializing hero parallax:', error);
  }
}

/**
 * Renders ambient floating fluid particles on HTML5 canvas.
 */
function initFluidCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const colorPalette = ['rgba(236, 72, 153, 0.25)', 'rgba(6, 182, 212, 0.25)', 'rgba(245, 158, 11, 0.25)'];

  // Spawn initial ambient particles
  for (let i = 0; i < 35; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 80 + 20,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      color: colorPalette[Math.floor(Math.random() * colorPalette.length)]
    });
  }

  /**
   * Animation loop for organic particle drift.
   */
  function animateCanvas() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around screen boundaries
      if (p.x - p.radius > width) p.x = -p.radius;
      if (p.x + p.radius < 0) p.x = width + p.radius;
      if (p.y - p.radius > height) p.y = -p.radius;
      if (p.y + p.radius < 0) p.y = height + p.radius;

      // Draw soft blurred watercolor droplet
      ctx.beginPath();
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
      gradient.addColorStop(0, p.color);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animateCanvas);
  }

  animateCanvas();
}
