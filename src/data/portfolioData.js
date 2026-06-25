/**
 * Portfolio Data Module
 * Contains structured metadata for Saba Al-Qaisi's artworks, interior murals, and studio behind-the-scenes.
 */

export const portfolioItems = [
  {
    id: 'proj-1',
    title: 'Aurora Flow Mural',
    category: 'murals',
    image: './assets/images/work1.jpg',
    description: 'Bespoke full-wall fluid acrylic pour in a luxury loft, harmonizing turquoise and magenta with gold foil accents.',
    gridSpan: 'md:col-span-2 md:row-span-2',
    accentColor: '#06B6D4'
  },
  {
    id: 'proj-2',
    title: 'Resin Turquoise Symphony',
    category: 'artworks',
    image: './assets/images/work2.jpg',
    description: 'High-gloss epoxy resin artwork exploring ocean depths and metallic lacing.',
    gridSpan: 'md:col-span-1 md:row-span-1',
    accentColor: '#EC4899'
  },
  {
    id: 'proj-3',
    title: 'Sunlit Botanical Serenade',
    category: 'murals',
    image: './assets/images/work3.jpg',
    description: 'Warm organic watercolor mural designed to breathe morning sunshine into a minimalist dining sanctuary.',
    gridSpan: 'md:col-span-1 md:row-span-2',
    accentColor: '#F59E0B'
  },
  {
    id: 'proj-4',
    title: 'Studio Pigment Alchemy',
    category: 'bts',
    image: './assets/images/bts1.jpg',
    description: 'Behind the scenes: Preparing custom-mixed fluid acrylic pigments before a major residential commission.',
    gridSpan: 'md:col-span-1 md:row-span-1',
    accentColor: '#F59E0B'
  },
  {
    id: 'proj-5',
    title: 'Cellular Coral Lacing',
    category: 'artworks',
    image: './assets/images/work4.jpg',
    description: 'Macro exploration of silicone-induced fluid lacing cells capturing energetic pink waves.',
    gridSpan: 'md:col-span-2 md:row-span-1',
    accentColor: '#EC4899'
  },
  {
    id: 'proj-7',
    title: 'Pouring Spontaneity',
    category: 'bts',
    image: './assets/images/bts2.jpg',
    description: 'The raw, meditative moment of pouring liquid pigment onto stretched canvas.',
    gridSpan: 'md:col-span-1 md:row-span-1',
    accentColor: '#F59E0B'
  },
  {
    id: 'proj-8',
    title: 'Golden Solar Awakening',
    category: 'artworks',
    image: './assets/images/work3.jpg',
    description: 'Energetic fine art print celebrating morning light with vibrant yellow and white lacing.',
    gridSpan: 'md:col-span-1 md:row-span-1',
    accentColor: '#EC4899'
  },
  {
    id: 'proj-9',
    title: 'Studio Creative Flow',
    category: 'bts',
    image: './assets/images/bts3.jpg',
    description: 'Behind the scenes: Capturing the spontaneous creative energy and acrylic pouring process.',
    gridSpan: 'md:col-span-1 md:row-span-1',
    accentColor: '#F59E0B'
  }
];

export const filterCategories = [
  { id: 'all', label: 'All Creations' },
  { id: 'artworks', label: 'Fluid Artworks' },
  { id: 'murals', label: 'Interior Murals' },
  { id: 'bts', label: 'Behind the Scenes' }
];
