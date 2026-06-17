// Single source of truth for the business's name/address/phone (NAP), hours, and links.
// Both the visible UI and the JSON-LD structured data render from this object, so what
// humans see can never drift from what search engines and LLMs read.

export const site = {
  name: 'The Porch Kitchen',
  legalName: 'The Porch Kitchen',
  parent: 'The Cook & The Drummer',
  tagline: 'Farm-fresh California cooking, French at heart.',
  shortDescription:
    'Farm-fresh California lunch and happy hour in Sebastopol, from chef Lisa Boisset of The Cook & The Drummer. Everything made by hand — French-style sandwiches, artisan salads, grain bowls, and a Tuesday–Saturday happy hour with draft beer and local wine.',
  // Used as the meta description on the home page (keep ~150–160 chars).
  metaDescription:
    'The Porch Kitchen in Sebastopol — farm-fresh California cooking, French at heart. Lunch & happy hour Tue–Sat. House-made sandwiches, salads, grain bowls. Order online.',

  // ── Contact / location ──────────────────────────────────────────────
  url: 'https://theporchkitchen.com',
  phoneDisplay: '(707) 494-0996',
  phoneHref: 'tel:+17074940996',
  email: 'lisa@thecookandthedrummer.com',
  address: {
    street: '6811 Laguna Park Way',
    locality: 'Sebastopol',
    region: 'CA',
    regionName: 'California',
    postalCode: '95472',
    country: 'US',
    neighborhood: 'Behind The Barlow, next to Patisserie Angelica',
  },
  // Approximate — refine from the Google Business Profile pin when available.
  geo: { lat: 38.4006, lng: -122.8219 },
  mapEmbedQuery: '6811+Laguna+Park+Way,+Sebastopol,+CA+95472',
  mapDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=6811+Laguna+Park+Way+Sebastopol+CA+95472',

  // ── Hours ───────────────────────────────────────────────────────────
  // openDays drive the JSON-LD openingHoursSpecification; the rows drive the UI table.
  openDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const,
  opens: '11:00',
  closes: '20:00',
  hoursRows: [
    { label: 'Tuesday – Saturday', value: '11:00am – 8:00pm' },
    { label: 'Sunday – Monday', value: 'Closed' },
  ],
  happyHour: { days: 'Wednesday – Saturday', time: '3:00 – 6:00pm' },
  serviceSummary: 'Lunch · Happy Hour — Tuesday through Saturday',

  cuisine: ['Californian', 'French', 'New American', 'Cafe'],
  priceRange: '$$',

  // ── Links ───────────────────────────────────────────────────────────
  toastOrderUrl:
    'https://www.toasttab.com/local/order/the-cook-and-the-drummer-6811-laguna-park-way',
  instagram: 'https://www.instagram.com/theporchkitchen/',
  facebook: 'https://www.facebook.com/profile.php?id=61582885402145',
  cateringUrl: 'https://thecookandthedrummer.com/',
  parentUrl: 'https://thecookandthedrummer.com/',

  // ── People ──────────────────────────────────────────────────────────
  owners: {
    lisa: 'Lisa Boisset',
    kevin: 'Kevin Boisset',
  },
} as const;

export type Site = typeof site;

// Full day list for openingHoursSpecification rendering.
export const ALL_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const;
