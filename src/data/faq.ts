// FAQ data — single source of truth for the visible accordion (Faq.astro) AND
// the schema.org FAQPage JSON-LD (JsonLd.astro). Authored for AI/search answers:
// short, direct, self-contained questions a person (or an LLM) would actually ask.
//
// Location/hours/happy-hour answers interpolate from site.ts so the NAP and hours
// can never drift from the rest of the site. Menu answers reference real dishes —
// keep them in sync with menu.ts when the menu changes seasonally.

import { site } from './site';

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'Where is The Porch Kitchen located?',
    a: `The Porch Kitchen is at ${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode} — behind The Barlow and next door to Patisserie Angelica.`,
  },
  {
    q: 'What are your hours?',
    a: `We're open ${site.hoursRows[0].label}, ${site.hoursRows[0].value}. ${site.hoursRows[1].label}: ${site.hoursRows[1].value}.`,
  },
  {
    q: 'Do you have outdoor seating?',
    a: 'Yes — The Porch has a relaxed outdoor seating area.',
  },
  {
    q: 'Do you take reservations?',
    a: `We're walk-in and first-come, so no reservations are needed. For larger groups or private events, get in touch through ${site.parent}.`,
  },
  {
    q: 'Is there parking?',
    a: 'Yes — there is parking available right by The Barlow, a short walk from The Porch.',
  },
  {
    q: 'Are you dog-friendly?',
    a: 'Yes — well-behaved, leashed dogs are welcome in our outdoor seating area.',
  },
  {
    q: 'Is The Porch Kitchen kid-friendly?',
    a: 'Yes — kids are welcome. The Porch is a relaxed, family-friendly spot.',
  },
  {
    q: 'What kind of food does The Porch Kitchen serve?',
    a: 'Farm-fresh California cooking, French at heart — house-made sandwiches, artisan salads, grain bowls, soups, and seasonal starters, all made from scratch by chef Lisa Boisset.',
  },
  {
    q: 'What sandwiches do you serve?',
    a: 'Our sandwiches include the signature Turkey Pesto (house-roasted turkey and basil pesto, called “the best turkey sandwich” on Yelp), the Jambon Beurre (ham and sweet butter on baguette), the Chèvre Tomate (goat cheese, tomato, and herbes de Provence), and a rotating Daily Sandwich from chef Lisa. Menus change with the season.',
  },
  {
    q: 'What salads do you have?',
    a: 'You’ll find the Butternut Squash Salad, the Beet Salad, a classic Caesar (add roasted chicken), and our Savory Grain Bowl. Salads rotate with the season and the day’s market.',
  },
  {
    q: 'Do you have vegan, vegetarian, and gluten-free options?',
    a: 'Yes — plenty. Many dishes are vegetarian, vegan, or gluten-free; look for the tags on our menu, and just ask if you have a question.',
  },
  {
    q: 'Do you serve alcohol? Is there a happy hour?',
    a: `Yes — we pour draft beer, local wine, cider, and more. Happy Hour runs ${site.happyHour.days}, ${site.happyHour.time}.`,
  },
  {
    q: 'Can I order takeout or online?',
    a: 'Yes — you can order online anytime through Toast for pickup.',
  },
  {
    q: 'Who is the chef? Is this related to The Cook & The Drummer?',
    a: `The Porch Kitchen is by ${site.owners.lisa} and ${site.owners.kevin} of ${site.parent}. Chef Lisa trained at the California Culinary Academy and Le Cordon Bleu in Paris, with twenty years as an executive chef.`,
  },
  {
    q: 'Do you offer catering or private events?',
    a: `Yes — catering and private events are handled through our parent, ${site.parent}.`,
  },
];
