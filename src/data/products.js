// ============================================================
// PETALIQUE – Product Data
// Edit this file to update products, prices, and availability
// ============================================================

export const WHATSAPP_NUMBER = '919257346967';
export const WHATSAPP_DISPLAY = '+91 92573 46967';
export const INSTAGRAM_URL = 'https://www.instagram.com/petalique.by.k';
export const BUSINESS_EMAIL = 'petalique.byk@gmail.com';
export const BUSINESS_CITY = 'Jaipur, Rajasthan';

// ── Unsplash placeholder images (floral themed) ──────────────
const HERO_IMG = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80';
const TULIP_IMG = 'https://images.unsplash.com/photo-1490750967868-88df5691cc0c?w=800&q=80';
const SUNFLOWER_IMG = 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800&q=80';
const ROSE_IMG = 'https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?w=800&q=80';
const LILY_IMG = 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=800&q=80';
const MIXED_IMG = 'https://images.unsplash.com/photo-1563241527-3004b7be0b2c?w=800&q=80';
const BOUQUET1_IMG = 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80';
const BOUQUET2_IMG = 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=800&q=80';
const PROCESS1_IMG = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80';
const PROCESS2_IMG = 'https://images.unsplash.com/photo-1531228852084-5edd856aef2c?w=800&q=80';
const FOUNDER_IMG = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80';

export const HERO_IMAGE = HERO_IMG;
export const FOUNDER_IMAGE = FOUNDER_IMG;

export const PROCESS_IMAGES = [
  { src: PROCESS1_IMG, caption: 'Carefully selecting each petal material' },
  { src: PROCESS2_IMG, caption: 'Handshaping every bloom with love' },
  { src: TULIP_IMG, caption: 'Assembling the final arrangement' },
  { src: BOUQUET1_IMG, caption: 'Wrapped and ready to bloom forever' },
];

export const COLLECTION_CATEGORIES = [
  {
    id: 'tulip-tales',
    name: 'Tulip Tales',
    description: 'Elegant handcrafted tulips in every shade',
    image: TULIP_IMG,
    count: 12,
    slug: 'tulips',
  },
  {
    id: 'sunflower-love',
    name: 'Sunflower Love',
    description: 'Bright, cheerful sunflowers that never wilt',
    image: SUNFLOWER_IMG,
    count: 8,
    slug: 'sunflowers',
  },
  {
    id: 'lily-dreams',
    name: 'Lily Dreams',
    description: 'Graceful lilies for the most special moments',
    image: LILY_IMG,
    count: 6,
    slug: 'lilies',
  },
  {
    id: 'rose-edit',
    name: 'The Rose Edit',
    description: 'Timeless roses, crafted to last a lifetime',
    image: ROSE_IMG,
    count: 10,
    slug: 'roses',
  },
  {
    id: 'mixed-bouquets',
    name: 'Mixed Bouquets',
    description: 'Curated mixes of our finest handmade blooms',
    image: MIXED_IMG,
    count: 14,
    slug: 'mixed',
  },
  {
    id: 'custom-creations',
    name: 'Custom Creations',
    description: 'Your vision, handcrafted into reality',
    image: BOUQUET2_IMG,
    count: null,
    slug: 'custom',
  },
];

export const OCCASION_CARDS = [
  { id: 'birthdays', label: 'Birthdays', tagline: 'Celebrate their day', color: 'bg-blush' },
  { id: 'anniversaries', label: 'Anniversaries', tagline: 'Forever & always', color: 'bg-dusty/20' },
  { id: 'valentines', label: "Valentine's Day", tagline: 'From the heart', color: 'bg-blush' },
  { id: 'friendship', label: 'Friendship', tagline: 'Unbreakable bond', color: 'bg-sage/30' },
  { id: 'graduation', label: 'Graduation', tagline: 'Honor milestone', color: 'bg-blush' },
  { id: 'just-because', label: 'Just Because', tagline: 'A gentle surprise', color: 'bg-dusty/20' },
];

export const BASE_FLOWER_SP = 210;
export const BASE_FLOWER_CP = 599;
export const LILY_EXTRA_COST = 250;
export const LILY_SP = 460;
export const LILY_CP = 849;

export const PRODUCTS = [
  {
    id: 1,
    name: 'Blush Tulip Bloom',
    slug: 'blush-tulip-bouquet',
    category: 'tulips',
    price: 210,
    originalPrice: 599,
    images: [TULIP_IMG, BOUQUET1_IMG, PROCESS1_IMG],
    shortDescription: 'Handcrafted blush tulip bloom shaped from textured chenille fabric.',
    description: `Each Blush Tulip Bloom is lovingly handcrafted using premium chenille-textured fabric petals, individually shaped by hand. The blush pink bloom is paired with lush green fabric leaves.\n\nPerfect for birthdays, anniversaries, or creating your own bouquet arrangement.`,
    colors: ['Blush Pink', 'Ivory White', 'Lavender', 'Coral'],
    sizes: ['1 Flower (Single Stem)', '3 Flowers (Trio)', '5 Flowers (Mini Bouquet)', '10 Flowers (Classic Bouquet)'],
    preparationDays: '3–5 business days',
    available: true,
    bestseller: true,
    tags: ['tulips', 'birthday', 'anniversary'],
  },
  {
    id: 2,
    name: 'Sunshine Sunflower Bloom',
    slug: 'sunshine-sunflower-bunch',
    category: 'sunflowers',
    price: 210,
    originalPrice: 599,
    images: [SUNFLOWER_IMG, BOUQUET2_IMG, PROCESS2_IMG],
    shortDescription: 'Bright handcrafted golden sunflower bloom to bring permanent sunshine.',
    description: `These cheerful handcrafted sunflowers are made with textured golden-yellow petals and rich brown centers, bringing permanent sunshine into any space. Wrapped with natural ribbon accents.\n\nA favourite for friendship gifts, graduation bouquets and housewarming presents.`,
    colors: ['Golden Yellow', 'Burnt Orange', 'Lemon Yellow'],
    sizes: ['1 Flower (Single Stem)', '3 Flowers (Trio)', '5 Flowers (Mini Bouquet)', '10 Flowers (Classic Bouquet)'],
    preparationDays: '3–4 business days',
    available: true,
    bestseller: true,
    tags: ['sunflowers', 'friendship', 'graduation'],
  },
  {
    id: 3,
    name: 'Eternal Velvet Rose Bloom',
    slug: 'eternal-rose-collection',
    category: 'roses',
    price: 210,
    originalPrice: 599,
    images: [ROSE_IMG, BOUQUET1_IMG, TULIP_IMG],
    shortDescription: 'Classic handcrafted rose in rich velvet-touch fabric that lasts forever.',
    description: `Our Eternal Rose reimagines the classic rose in handcrafted velvet-touch fabric. Each petal is cut, shaped and assembled by hand to capture the natural elegance of a fresh rose — forever.\n\nAvailable in a range of rich colors, these blooms are perfect for Valentine's Day, anniversaries, and romantic gestures.`,
    colors: ['Deep Red', 'Dusty Rose', 'Champagne', 'Burgundy', 'Peach'],
    sizes: ['1 Flower (Single Stem)', '3 Flowers (Trio)', '5 Flowers (Mini Bouquet)', '10 Flowers (Classic Bouquet)'],
    preparationDays: '4–6 business days',
    available: true,
    bestseller: true,
    tags: ['roses', 'valentine', 'anniversary', 'romance'],
  },
  {
    id: 4,
    name: 'Graceful Lily Bloom',
    slug: 'lily-dreams-arrangement',
    category: 'lilies',
    price: 460,
    originalPrice: 849,
    images: [LILY_IMG, MIXED_IMG, PROCESS1_IMG],
    shortDescription: 'Graceful handcrafted lily with layered petals & fine stamens (+₹250 craft).',
    description: `The Graceful Lily Bloom captures the elegance of lilies in handcrafted fabric form. Because each lily involves complex multi-petal shaping and hand-finished stamens, it carries a +₹250 premium craft fee.\n\nLilies symbolise purity and devotion — a perfect gift for mothers, teachers, and life's most meaningful moments.`,
    colors: ['Pure White', 'Blush Pink', 'Soft Peach', 'Lavender Mist'],
    sizes: ['1 Flower (Single Stem)', '3 Flowers (Trio)', '5 Flowers (Mini Bouquet)', '10 Flowers (Classic Bouquet)'],
    preparationDays: '4–5 business days',
    available: true,
    bestseller: false,
    tags: ['lilies', 'mothers day', 'elegant'],
  },
  {
    id: 5,
    name: 'Rainbow Meadow Trio (3 Blooms)',
    slug: 'rainbow-meadow-bouquet',
    category: 'mixed',
    price: 630,
    originalPrice: 1797,
    images: [MIXED_IMG, BOUQUET2_IMG, ROSE_IMG],
    shortDescription: 'A vibrant 3-bloom bouquet mix of tulips, roses and sunflowers (@ ₹210/bloom).',
    description: `The Rainbow Meadow Trio is our most colourful creation — a curated 3-flower mix of handcrafted tulips, roses and sunflowers in a cheerful, vibrant arrangement. (Priced at our standard ₹210/flower rate).\n\nA celebration in a bouquet, perfect for birthdays, farewells and happy occasions.`,
    colors: ['Multicolor Bright', 'Pastel Mix', 'Warm Tones'],
    sizes: ['3 Flowers (Trio)', '5 Flowers (Mini Bouquet)', '10 Flowers (Grand Bouquet)'],
    preparationDays: '5–7 business days',
    available: true,
    bestseller: true,
    tags: ['mixed', 'birthday', 'celebration'],
  },
  {
    id: 6,
    name: 'Pastel Charm Tulip',
    slug: 'pastel-charm-tulip-set',
    category: 'tulips',
    price: 210,
    originalPrice: 599,
    images: [TULIP_IMG, BOUQUET1_IMG, PROCESS2_IMG],
    shortDescription: 'Soft pastel fabric tulip bloom in lavender, mint, peach or cream.',
    description: `Our Pastel Charm Tulip features soft pastel fabric tulips — lavender, mint, peach and cream. Each bloom is individually handcrafted for a natural, layered look.\n\nLight, cheerful and absolutely adorable. A perfect gift for your best friend.`,
    colors: ['Pastel Mix', 'Pink & Mint', 'Peach & Cream'],
    sizes: ['1 Flower (Single Stem)', '3 Flowers (Trio)', '5 Flowers (Mini Bouquet)', '10 Flowers (Classic Bouquet)'],
    preparationDays: '3–4 business days',
    available: true,
    bestseller: false,
    tags: ['tulips', 'pastel', 'friendship'],
  },
  {
    id: 7,
    name: 'Velvet Rose Single Stem',
    slug: 'velvet-rose-single-stem',
    category: 'roses',
    price: 210,
    originalPrice: 599,
    images: [ROSE_IMG, BOUQUET2_IMG, LILY_IMG],
    shortDescription: 'A single handcrafted velvet rose — the most meaningful gift.',
    description: `Sometimes, one is enough. Our Velvet Rose Single Stem is a handcrafted statement piece — a perfect rose in rich fabric with natural-looking petals and a long graceful stem.\n\nComes in a keepsake wrap with a handwritten tag — ready to gift. Perfect for Valentine's Day, anniversaries and heartfelt messages.`,
    colors: ['Deep Red', 'Dusty Rose', 'Champagne', 'Midnight Purple'],
    sizes: ['1 Flower (Single Stem)'],
    preparationDays: '2–3 business days',
    available: true,
    bestseller: false,
    tags: ['roses', 'single', 'valentine', 'gift'],
  },
  {
    id: 8,
    name: 'Grand Celebration Bouquet (5 Blooms)',
    slug: 'grand-celebration-bouquet',
    category: 'mixed',
    price: 1050,
    originalPrice: 2995,
    images: [BOUQUET2_IMG, MIXED_IMG, ROSE_IMG],
    shortDescription: 'A grand 5-bloom handcrafted statement arrangement (@ ₹210/bloom).',
    description: `The Grand Celebration Bouquet is a generous 5-flower handcrafted mix in your chosen colour palette. Wrapped in premium paper with a satin ribbon and personalised tag. (Priced at our standard ₹210/flower rate).\n\nBuilt to impress at graduations, milestone birthdays, engagements and grand celebrations.`,
    colors: ['All Red', 'Pink & White', 'Sunset Tones', 'Custom'],
    sizes: ['5 Flowers (Mini Bouquet)', '10 Flowers (Grand Bouquet)'],
    preparationDays: '6–8 business days',
    available: true,
    bestseller: false,
    tags: ['grand', 'celebration', 'graduation', 'engagement'],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Aanya Sharma',
    location: 'Delhi',
    rating: 5,
    text: 'I ordered the Blush Tulip Bouquet for my best friend\'s birthday and she absolutely cried. These flowers look SO real but they\'ll last forever. Petalique is magic!',
    product: 'Blush Tulip Bouquet',
    avatar: 'AS',
  },
  {
    id: 2,
    name: 'Rohan Mehta',
    location: 'Mumbai',
    rating: 5,
    text: 'Ordered a custom bouquet for my girlfriend\'s anniversary. K was so patient with all my requests and the final result was breathtaking. Worth every rupee!',
    product: 'Custom Bouquet',
    avatar: 'RM',
  },
  {
    id: 3,
    name: 'Priya Kapoor',
    location: 'Jaipur',
    rating: 5,
    text: 'The packaging alone made me emotional. The flowers are gorgeous, handmade with so much care. My mom still keeps them on her dressing table 6 months later!',
    product: 'Eternal Rose Collection',
    avatar: 'PK',
  },
  {
    id: 4,
    name: 'Sneha Verma',
    location: 'Bangalore',
    rating: 5,
    text: 'Found Petalique on Instagram and immediately placed an order. The Rainbow Meadow Bouquet for my grad was stunning. Everyone at the ceremony was asking about it!',
    product: 'Rainbow Meadow Bouquet',
    avatar: 'SV',
  },
];

export const INSTAGRAM_POSTS = [
  { id: 1, image: TULIP_IMG, alt: 'Handcrafted tulip bouquet' },
  { id: 2, image: ROSE_IMG, alt: 'Velvet rose arrangement' },
  { id: 3, image: SUNFLOWER_IMG, alt: 'Sunshine sunflower bunch' },
  { id: 4, image: MIXED_IMG, alt: 'Mixed bloom collection' },
  { id: 5, image: BOUQUET1_IMG, alt: 'Premium wrapped bouquet' },
  { id: 6, image: BOUQUET2_IMG, alt: 'Grand celebration bouquet' },
];

export const FLOWER_TYPES = ['Tulips', 'Sunflowers', 'Roses', 'Lilies', 'Mixed'];
export const FLOWER_COLORS = ['Blush Pink', 'Deep Red', 'Ivory White', 'Golden Yellow', 'Lavender', 'Peach', 'Coral', 'Sage Green', 'Champagne', 'Burgundy'];
export const BOUQUET_SIZES = ['Mini (3–5 stems)', 'Classic (10–12 stems)', 'Grand (20–30 stems)', 'Grand Luxe (30+ stems)'];
export const WRAPPING_OPTIONS = ['Cream Tissue', 'Kraft Paper', 'Satin Paper', 'Premium Gift Box', 'Custom Color'];
export const RIBBON_COLORS = ['Sage Green', 'Dusty Rose', 'Ivory', 'Gold', 'Burgundy', 'Custom'];
