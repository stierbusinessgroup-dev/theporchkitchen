// Menu data — drives the visible /menu page AND the schema.org Menu JSON-LD.
// Edit prices/items here only; everything else updates automatically.
//
// Dietary tags: ve = vegan · v = vegetarian · gf = gluten-free · s = signature
// Menus rotate with the season and the farmers' market.

export type Diet = 've' | 'v' | 'gf' | 's';

export interface MenuItem {
  name: string;
  desc?: string;
  /** Numeric price in USD, used for schema.org offers. Omit for market/varies. */
  price?: number;
  /** Display override when price is a range or "add" modifier. */
  priceText?: string;
  tags?: Diet[];
}

export interface MenuSection {
  title: string;
  note?: string;
  items: MenuItem[];
}

export interface Menu {
  id: string;
  title: string;
  /** When this menu is served, for humans + schema. */
  served: string;
  sections: MenuSection[];
}

export const DIET_LABELS: Record<Diet, string> = {
  ve: 'vegan',
  v: 'vegetarian',
  gf: 'gluten-free',
  s: 'signature',
};

// schema.org RestrictedDiet mapping for suitableForDiet.
export const DIET_SCHEMA: Partial<Record<Diet, string>> = {
  ve: 'https://schema.org/VeganDiet',
  v: 'https://schema.org/VegetarianDiet',
  gf: 'https://schema.org/GlutenFreeDiet',
};

export const lunchMenu: Menu = {
  id: 'lunch',
  title: 'Lunch',
  served: 'Tuesday – Saturday, 11:00am – 3:00pm',
  sections: [
    {
      title: 'Sandwiches',
      items: [
        { name: 'Jambon Beurre', desc: 'Ham, sweet butter, baguette', price: 16.95 },
        {
          name: 'Chèvre Tomate',
          desc: 'Goat cheese, tomato, herbes de Provence',
          price: 16.95,
          tags: ['v'],
        },
        {
          name: 'House Pesto Turkey',
          desc: 'House-roasted turkey, basil pesto — “the best turkey sandwich” (Yelp)',
          price: 17.95,
          tags: ['s'],
        },
        { name: 'Focaccia, ¼ Sheet', desc: 'House-baked, to share', price: 10.5, tags: ['v'] },
      ],
    },
    {
      title: 'Artisan Salads',
      items: [
        { name: 'Butternut Squash Salad', price: 17.95, tags: ['v', 'gf'] },
        { name: '“OG” Caesar', desc: 'Add roasted chicken +5', price: 15.25, tags: ['v'] },
        { name: 'Adobo Roasted Chicken Salad', price: 17.95, tags: ['gf'] },
        { name: 'Roasted Beet Salad', price: 16.95, tags: ['v', 'gf'] },
      ],
    },
    {
      title: 'Nourishing Grain Bowls',
      items: [
        { name: 'Warm Savory Grain Bowl', price: 19.95, tags: ['v'] },
        { name: 'Red Quinoa Grain Bowl', price: 16.95, tags: ['ve', 'gf'] },
        { name: 'Butternut Squash Farro', price: 10.95, tags: ['v'] },
        {
          name: 'Roasted Kabocha Coconut Soup',
          desc: 'Seasonal',
          price: 10.95,
          tags: ['ve', 'gf'],
        },
      ],
    },
    {
      title: 'Add a Protein',
      items: [
        { name: 'Roasted Wild Salmon', price: 12.0, tags: ['gf'] },
        { name: 'Five-Spice Pork Loin', price: 7.0, tags: ['gf'] },
        { name: 'Roasted Shredded Chicken', price: 5.0, tags: ['gf'] },
        { name: 'Two Eggs', price: 4.5, tags: ['v', 'gf'] },
      ],
    },
    {
      title: 'Sweets',
      items: [
        { name: 'Tahitian Vanilla Cheesecake', price: 5.5, tags: ['v'] },
        { name: 'Bread Pudding', price: 7.95, tags: ['v'] },
        { name: 'Bag of Cookies', price: 10.0, tags: ['v'] },
        { name: 'House Jam Jar', price: 10.0, tags: ['ve'] },
      ],
    },
    {
      title: 'Drinks',
      items: [
        { name: 'House Hibiscus Iced Tea', price: 5.0, tags: ['ve', 'gf'] },
        { name: 'Hot Coffee / Hot Tea', price: 3.5, tags: ['ve', 'gf'] },
        { name: 'San Pellegrino / Olipop', price: 3.5, tags: ['ve', 'gf'] },
      ],
    },
  ],
};

export const happyHourMenu: Menu = {
  id: 'happy-hour',
  title: 'Happy Hour',
  served: 'Tuesday – Saturday, 3:00 – 6:00pm',
  sections: [
    {
      title: 'Small Bites',
      items: [
        {
          name: 'Local Cheese Plate',
          desc: 'Rotating local cheeses, house-made confiture, rosemary crackers, local honey',
          price: 14,
          tags: ['v'],
        },
        {
          name: 'Meyer Lemon Hummus',
          desc: 'House-made focaccia toast',
          price: 9,
          tags: ['ve'],
        },
        {
          name: 'Pomme Frites',
          desc: 'Aioli, parmesan, parsley',
          price: 10,
          tags: ['v', 'gf'],
        },
        {
          name: 'Salmon Cakes',
          desc: 'Two per order, zesty remoulade',
          price: 12,
        },
        {
          name: 'Beef Sliders',
          desc: 'Two per order — dry-aged beef, caramelized onion compote, house-made aioli, aged gruyère, mini toasted brioche buns',
          price: 12,
          tags: ['s'],
        },
        { name: 'Rosemary Almonds', price: 6, tags: ['ve', 'gf'] },
      ],
    },
    {
      title: 'On Draft',
      note: '$6',
      items: [
        { name: 'Old Caz Czech Pils', priceText: '6' },
        { name: 'Russian River Damnation', priceText: '6' },
        { name: 'Russian River Happy Hops', priceText: '6' },
      ],
    },
    {
      title: 'Wine by the Glass',
      note: '$7',
      items: [
        { name: 'White', priceText: '7' },
        { name: 'Red', priceText: '7' },
        { name: 'Rosé', priceText: '7' },
      ],
    },
  ],
};

export const allMenus: Menu[] = [lunchMenu, happyHourMenu];
