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

export const PRODUCTS = [
  {
    id: 1,
    name: 'Blush Tulip Bouquet',
    slug: 'blush-tulip-bouquet',
    category: 'tulips',
    price: 899,
    originalPrice: 1099,
    images: [TULIP_IMG, BOUQUET1_IMG, PROCESS1_IMG],
    shortDescription: 'A dreamy bouquet of 10 handcrafted blush tulips with sage ribbon.',
    description: `Each Blush Tulip Bouquet is lovingly assembled using premium chenille-textured fabric petals, individually shaped by hand. The blush pink blooms are paired with lush green fabric leaves and wrapped in our signature cream tissue with a sage satin ribbon.\n\nPerfect for birthdays, anniversaries, or any day you want to say "you matter."`,
    colors: ['Blush Pink', 'Ivory White', 'Lavender', 'Coral'],
    sizes: ['Mini (5 stems)', 'Classic (10 stems)', 'Grand (20 stems)'],
    preparationDays: '3–5 business days',
    available: true,
    bestseller: true,
    tags: ['tulips', 'birthday', 'anniversary'],
  },
  {
    id: 2,
    name: 'Sunshine Sunflower Bunch',
    slug: 'sunshine-sunflower-bunch',
    category: 'sunflowers',
    price: 749,
    originalPrice: 899,
    images: [SUNFLOWER_IMG, BOUQUET2_IMG, PROCESS2_IMG],
    shortDescription: 'Bright handmade sunflowers to light up any room, any day.',
    description: `These cheerful handcrafted sunflowers are made with textured golden-yellow petals and rich brown centers, bringing permanent sunshine into any space. Wrapped in natural kraft paper with a rustic twine bow.\n\nA favourite for friendship gifts, graduation bouquets and housewarming presents.`,
    colors: ['Golden Yellow', 'Burnt Orange', 'Lemon Yellow'],
    sizes: ['Mini (3 stems)', 'Classic (7 stems)', 'Grand (12 stems)'],
    preparationDays: '3–4 business days',
    available: true,
    bestseller: true,
    tags: ['sunflowers', 'friendship', 'graduation'],
  },
  {
    id: 3,
    name: 'Eternal Rose Collection',
    slug: 'eternal-rose-collection',
    category: 'roses',
    price: 1199,
    originalPrice: 1499,
    images: [ROSE_IMG, BOUQUET1_IMG, TULIP_IMG],
    shortDescription: 'Classic handcrafted roses in rich velvet-touch fabric. A gift that lasts.',
    description: `Our Eternal Rose Collection reimagines the classic rose in handcrafted velvet-touch fabric. Each petal is cut, shaped and assembled by hand to capture the natural elegance of a fresh rose — forever.\n\nAvailable in a range of rich colors, these bouquets are perfect for Valentine's Day, anniversaries, and romantic gestures.`,
    colors: ['Deep Red', 'Dusty Rose', 'Champagne', 'Burgundy', 'Peach'],
    sizes: ['Single Stem', 'Mini (5 stems)', 'Classic (12 stems)', 'Grand (24 stems)'],
    preparationDays: '4–6 business days',
    available: true,
    bestseller: true,
    tags: ['roses', 'valentine', 'anniversary', 'romance'],
  },
  {
    id: 4,
    name: 'Lily Dreams Arrangement',
    slug: 'lily-dreams-arrangement',
    category: 'lilies',
    price: 999,
    originalPrice: 1199,
    images: [LILY_IMG, MIXED_IMG, PROCESS1_IMG],
    shortDescription: 'Graceful handmade lily blooms for someone truly special.',
    description: `The Lily Dreams Arrangement captures the elegance of lilies in handcrafted fabric form. Each petal is carefully shaped and the stamens are hand-finished for a realistic, beautiful result.\n\nLilies symbolise purity and devotion — a perfect gift for mothers, teachers and mentors.`,
    colors: ['Pure White', 'Blush Pink', 'Soft Peach', 'Lavender Mist'],
    sizes: ['Mini (3 stems)', 'Classic (6 stems)', 'Grand (10 stems)'],
    preparationDays: '4–5 business days',
    available: true,
    bestseller: false,
    tags: ['lilies', 'mothers day', 'elegant'],
  },
  {
    id: 5,
    name: 'Rainbow Meadow Bouquet',
    slug: 'rainbow-meadow-bouquet',
    category: 'mixed',
    price: 1349,
    originalPrice: 1699,
    images: [MIXED_IMG, BOUQUET2_IMG, ROSE_IMG],
    shortDescription: 'A vibrant mix of tulips, roses and sunflowers — all handcrafted.',
    description: `The Rainbow Meadow Bouquet is our most colourful creation — a curated mix of handcrafted tulips, roses and sunflowers in a cheerful, vibrant arrangement. Wrapped in rainbow-striped paper with a matching ribbon.\n\nA celebration in a bouquet, perfect for birthdays, farewells and happy occasions.`,
    colors: ['Multicolor Bright', 'Pastel Mix', 'Warm Tones'],
    sizes: ['Classic (15 stems)', 'Grand (25 stems)'],
    preparationDays: '5–7 business days',
    available: true,
    bestseller: true,
    tags: ['mixed', 'birthday', 'celebration'],
  },
  {
    id: 6,
    name: 'Pastel Charm Tulip Set',
    slug: 'pastel-charm-tulip-set',
    category: 'tulips',
    price: 679,
    originalPrice: null,
    images: [TULIP_IMG, BOUQUET1_IMG, PROCESS2_IMG],
    shortDescription: 'Soft pastel tulips tied with a dreamy satin bow. Pure sweetness.',
    description: `Our Pastel Charm Tulip Set features an assortment of soft pastel fabric tulips — lavender, mint, peach and cream — tied elegantly with a satin bow. Each bloom is individually handcrafted for a natural, layered look.\n\nLight, cheerful and absolutely adorable. A perfect gift for your best friend.`,
    colors: ['Pastel Mix', 'Pink & Mint', 'Peach & Cream'],
    sizes: ['Mini (5 stems)', 'Classic (10 stems)'],
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
    price: 349,
    originalPrice: null,
    images: [ROSE_IMG, BOUQUET2_IMG, LILY_IMG],
    shortDescription: 'A single handcrafted velvet rose — the most meaningful gift.',
    description: `Sometimes, one is enough. Our Velvet Rose Single Stem is a handcrafted statement piece — a perfect rose in rich fabric with natural-looking petals and a long graceful stem.\n\nComes in a keepsake box with a handwritten tag — ready to gift. Perfect for Valentine's Day, anniversaries and heartfelt messages.`,
    colors: ['Deep Red', 'Dusty Rose', 'Champagne', 'Midnight Purple'],
    sizes: ['Single Stem'],
    preparationDays: '2–3 business days',
    available: true,
    bestseller: false,
    tags: ['roses', 'single', 'valentine', 'gift'],
  },
  {
    id: 8,
    name: 'Grand Celebration Bouquet',
    slug: 'grand-celebration-bouquet',
    category: 'mixed',
    price: 2299,
    originalPrice: 2799,
    images: [BOUQUET2_IMG, MIXED_IMG, ROSE_IMG],
    shortDescription: 'A grand statement bouquet for life\'s biggest moments.',
    description: `The Grand Celebration Bouquet is our most impressive arrangement — a generous mix of 30+ handcrafted roses, tulips and lilies in your chosen colour palette. Wrapped in premium satin-touch paper with a custom satin ribbon and personalised tag.\n\nBuilt to impress at graduations, milestone birthdays, engagements and grand celebrations.`,
    colors: ['All Red', 'Pink & White', 'Sunset Tones', 'Custom'],
    sizes: ['Grand (30+ stems)'],
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
