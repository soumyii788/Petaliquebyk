// ============================================================
// PETALIQUE – Product Data
// Edit this file to update products, prices, and availability
// ============================================================

export const WHATSAPP_NUMBER = '919257346967';
export const WHATSAPP_DISPLAY = '+91 92573 46967';
export const INSTAGRAM_URL = 'https://www.instagram.com/petalique.by.k';
export const BUSINESS_EMAIL = 'petalique.byk@gmail.com';
export const BUSINESS_CITY = 'Jaipur, Rajasthan';
export const RAZORPAY_KEY_ID = 'rzp_test_placeholder'; // Replace with your Razorpay Key ID (rzp_test_... or rzp_live_...)

// ── Real Petalique Product Photographs ───────────────────────
export const HERO_IMAGE = '/photos/pink-lily-tulips-outdoor-kraft.jpg';
export const FOUNDER_IMAGE = '/photos/founder-khushi.png';

export const PROCESS_IMAGES = [
  { src: '/photos/craft-tools-process.png', caption: 'Carefully selecting wire and soft velvet materials' },
  { src: '/photos/pink-white-gradient-lilies-stem.jpg', caption: 'Handcrafting delicate multi-petal lilies with stamen wire' },
  { src: '/photos/dusky-pink-tulips-pair.jpg', caption: 'Shaping velvet petals and winding spiral stems' },
  { src: '/photos/custom-monogram-initial-bouquet-full.jpg', caption: 'Wrapped in signature papers, ready to bloom forever' },
];

export const COLLECTION_CATEGORIES = [
  {
    id: 'tulip-tales',
    name: 'Tulip Tales',
    description: 'Elegant handcrafted tulips in every shade',
    image: '/photos/pink-lily-tulips-outdoor-kraft.jpg',
    count: 12,
    slug: 'tulips',
  },
  {
    id: 'sunflower-love',
    name: 'Sunflower Love',
    description: 'Bright, cheerful sunflowers that never wilt',
    image: '/photos/sunflower-daisy-kraft-handheld.jpg',
    count: 8,
    slug: 'sunflowers',
  },
  {
    id: 'lily-dreams',
    name: 'Lily Dreams',
    description: 'Graceful lilies for the most special moments',
    image: '/photos/red-lily-white-tulips-maroon-wrap.jpg',
    count: 6,
    slug: 'lilies',
  },
  {
    id: 'rose-edit',
    name: 'The Rose Edit',
    description: 'Timeless roses, crafted to last a lifetime',
    image: '/photos/single-velvet-rose-sunlight.jpg',
    count: 10,
    slug: 'roses',
  },
  {
    id: 'mixed-bouquets',
    name: 'Mixed Bouquets',
    description: 'Curated mixes of our finest handmade blooms',
    image: '/photos/blue-teal-lily-maroon-wrap.jpg',
    count: 14,
    slug: 'mixed',
  },
  {
    id: 'custom-creations',
    name: 'Custom Creations',
    description: 'Your vision, handcrafted into reality',
    image: '/photos/custom-monogram-initial-bouquet-full.jpg',
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
    images: [
      '/photos/dusky-pink-tulips-pair.jpg',
      '/photos/pink-lily-tulips-outdoor-kraft.jpg',
      '/photos/pink-tulips-dome.png',
    ],
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
    images: [
      '/photos/sunflower-daisy-kraft-handheld.jpg',
      '/photos/sunflower-daisy-kraft-table.jpg',
      '/photos/sunflower-balcony-sky.jpg',
      '/photos/sunflower-tiger-lily-window.jpg',
    ],
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
    images: [
      '/photos/single-velvet-rose-sunlight.jpg',
      '/photos/single-velvet-rose.png',
    ],
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
    images: [
      '/photos/pink-white-gradient-lilies-stem.jpg',
      '/photos/red-lily-white-tulips-maroon-wrap.jpg',
      '/photos/blue-teal-lily-maroon-wrap.jpg',
      '/photos/cherry-red-lilies-bouquet-night.jpg',
    ],
    shortDescription: 'Graceful handcrafted lily with layered petals & fine stamens (+₹250 craft).',
    description: `The Graceful Lily Bloom captures the elegance of lilies in handcrafted fabric form. Because each lily involves complex multi-petal shaping and hand-finished stamens, it carries a +₹250 premium craft fee.\n\nLilies symbolise purity and devotion — a perfect gift for mothers, teachers, and life's most meaningful moments.`,
    colors: ['Pure White', 'Blush Pink', 'Soft Peach', 'Lavender Mist', 'Deep Red', 'Cobalt Blue'],
    sizes: ['1 Flower (Single Stem)', '3 Flowers (Trio)', '5 Flowers (Mini Bouquet)', '10 Flowers (Classic Bouquet)'],
    preparationDays: '4–5 business days',
    available: true,
    bestseller: false,
    tags: ['lilies', 'mothers day', 'elegant'],
  },
  {
    id: 5,
    name: 'Rainbow Meadow Mixed Bouquet',
    slug: 'rainbow-meadow-bouquet',
    category: 'mixed',
    price: 630,
    originalPrice: 1797,
    images: [
      '/photos/sunflower-tiger-lily-window.jpg',
      '/photos/pink-lily-tulips-outdoor-kraft.jpg',
      '/photos/sunflower-pink-lily-duo.jpg',
    ],
    shortDescription: 'A vibrant mixed bouquet of sunflowers, lilies and tulips (@ ₹210/bloom).',
    description: `The Rainbow Meadow Mixed Bouquet is our most colourful creation — a curated mix of handcrafted sunflowers, lilies and tulips in a cheerful, vibrant arrangement.\n\nA celebration in a bouquet, perfect for birthdays, farewells and happy occasions.`,
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
    images: [
      '/photos/dusky-pink-tulips-pair.jpg',
      '/photos/pastel-lilies-tulips.png',
      '/photos/pink-tulips-dome.png',
    ],
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
    images: [
      '/photos/single-velvet-rose-sunlight.jpg',
      '/photos/single-velvet-rose.png',
    ],
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
    name: 'Cherry Red Lilies & Tulips Bouquet',
    slug: 'grand-celebration-bouquet',
    category: 'mixed',
    price: 1050,
    originalPrice: 2995,
    images: [
      '/photos/red-lily-white-tulips-maroon-wrap.jpg',
      '/photos/cherry-red-lilies-bouquet-night.jpg',
      '/photos/cherry-red-lilies-bouquet-full.jpg',
    ],
    shortDescription: 'Signature statement bouquet of deep red lilies & white tulips in luxury maroon wrap.',
    description: `Our signature Cherry Red Lilies & Tulips bouquet is Petalique's showstopper arrangement — dramatic deep red lilies with golden stamens paired with graceful white tulips, wrapped in luxurious maroon paper with gold trim.\n\nBuilt to impress at graduations, milestone birthdays, anniversaries and grand celebrations.`,
    colors: ['Cherry Red & White', 'Deep Red & Gold', 'Custom Colors'],
    sizes: ['5 Flowers (Mini Bouquet)', '10 Flowers (Grand Bouquet)'],
    preparationDays: '6–8 business days',
    available: true,
    bestseller: false,
    tags: ['grand', 'celebration', 'graduation', 'engagement'],
  },
  {
    id: 9,
    name: 'Nazar Protection Evil Eye Bouquet',
    slug: 'evil-eye-protection-bouquet',
    category: 'mixed',
    price: 1150,
    originalPrice: 2899,
    images: [
      '/photos/evil-eye-nazar-blue-bouquet.jpg',
      '/photos/blue-teal-lily-maroon-wrap.jpg',
      '/photos/blue-lilies-tulips.png',
    ],
    shortDescription: 'Signature handmade sapphire & sky blue bouquet featuring a handcrafted Evil Eye (Nazar) amulet.',
    description: `Ward off negative energy and celebrate new beginnings with Petalique's signature Evil Eye Protection Bouquet. This unique arrangement features an intricately handmade chenille Nazar amulet nestled amongst sapphire blue lilies, sky blue lilies, cobalt tulips, and delicate blossom fillers.\n\nWrapped in luxury translucent shimmer netting, gold-trimmed Korean wrap, and tied with a royal blue satin ribbon. A deeply meaningful gift for housewarmings, graduations, new jobs, birthdays, and loved ones.`,
    colors: ['Sapphire & Sky Blue', 'Royal Blue & White', 'Cobalt Luxe'],
    sizes: ['Signature Protection Bouquet (7 Stems)', 'Grand Protection Bouquet (12 Stems)'],
    preparationDays: '4–6 business days',
    available: true,
    bestseller: true,
    tags: ['nazar', 'evil eye', 'protection', 'housewarming', 'graduation', 'custom', 'blue'],
  },
  {
    id: 10,
    name: 'Personalized Monogram Initial Bouquet',
    slug: 'personalized-monogram-bouquet',
    category: 'custom',
    price: 1299,
    originalPrice: 3499,
    images: [
      '/photos/custom-monogram-initial-bouquet-full.jpg',
      '/photos/custom-monogram-initial-bouquet-close.jpg',
      '/photos/pink-white-gradient-lilies-stem.jpg',
    ],
    shortDescription: 'Custom handcrafted bouquet with bespoke chenille monogram initial letter & heart wand.',
    description: `Make your gift deeply personal with Petalique's Personalized Monogram Initial Bouquet. Designed for birthdays, proposals, anniversaries and special milestones, this arrangement includes your choice of handcrafted chenille alphabet initial letter, a velvet heart wand, delicate gradient pink lilies, and blush tulip stems.\n\nWrapped in signature blush layers with satin ribbon. Mention your recipient's initial letter in the order note!`,
    colors: ['Blush Pink & White', 'Custom Color Theme'],
    sizes: ['Signature Monogram (6 Stems + Initial & Heart)', 'Grand Monogram (12 Stems + Initial & Heart)'],
    preparationDays: '4–6 business days',
    available: true,
    bestseller: true,
    tags: ['custom', 'monogram', 'initial', 'birthday', 'anniversary', 'heart', 'personalized'],
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
  { id: 1, image: '/photos/pink-lily-tulips-outdoor-kraft.jpg', alt: 'Pink lilies and blush tulips outdoor bouquet in kraft wrap' },
  { id: 2, image: '/photos/sunflower-daisy-kraft-handheld.jpg', alt: 'Two golden sunflowers and white daisies in kraft paper' },
  { id: 3, image: '/photos/red-lily-white-tulips-maroon-wrap.jpg', alt: 'Deep red lilies with golden stamens and white tulips in maroon wrap' },
  { id: 4, image: '/photos/blue-teal-lily-maroon-wrap.jpg', alt: 'Blue and teal lilies with white tulips in maroon wrap' },
  { id: 5, image: '/photos/custom-monogram-initial-bouquet-close.jpg', alt: 'Personalized monogram initial letter bouquet close up' },
  { id: 6, image: '/photos/single-velvet-rose-sunlight.jpg', alt: 'Handcrafted velvet rose in golden hour sunlight' },
];

export const FLOWER_TYPES = ['Tulips', 'Sunflowers', 'Roses', 'Lilies', 'Mixed'];
export const FLOWER_COLORS = ['Blush Pink', 'Deep Red', 'Ivory White', 'Golden Yellow', 'Lavender', 'Peach', 'Coral', 'Sage Green', 'Champagne', 'Burgundy'];
export const BOUQUET_SIZES = ['Mini (3–5 stems)', 'Classic (10–12 stems)', 'Grand (20–30 stems)', 'Grand Luxe (30+ stems)'];
export const WRAPPING_OPTIONS = ['Cream Tissue', 'Kraft Paper', 'Satin Paper', 'Premium Gift Box', 'Custom Color'];
export const RIBBON_COLORS = ['Sage Green', 'Dusty Rose', 'Ivory', 'Gold', 'Burgundy', 'Custom'];
