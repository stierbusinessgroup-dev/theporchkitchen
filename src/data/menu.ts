// Menu data — drives the visible /menu page AND the schema.org Menu JSON-LD.
// Edit prices/items here only; everything else updates automatically.
//
// Aligned to the live Toast menu (treated as one menu, per ownership) — prices
// match Toast. Draft beer + wine are kept though they aren't sold via Toast.
// Toast's "Extras" (condiments / side dressings) are intentionally omitted.
//
// Dietary tags: ve = vegan · v = vegetarian · gf = gluten-free · s = signature
// Menus rotate with the season; order live on Toast for today's offerings.

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

export const mainMenu: Menu = {
  id: 'menu',
  title: 'Menu',
  served: 'Tuesday – Saturday',
  sections: [
    {
      title: 'Starters',
      items: [
        { name: 'Normandy Cheese', price: 18, tags: ['v'] },
        {
          name: 'Pickled Veggies',
          desc: 'House-pickled seasonal vegetables',
          price: 10,
          tags: ['ve', 'gf'],
        },
        { name: 'Focaccia Basket', desc: 'House-baked', price: 11, tags: ['v'] },
        { name: 'Rosemary Almonds', price: 7, tags: ['ve', 'gf'] },
        { name: 'Pomme Frites', desc: 'Aioli, parmesan, parsley', price: 12, tags: ['v', 'gf'] },
        {
          name: 'Cheese & Charcuterie Board',
          desc: "Chef's selection of cheeses & cured meats",
          price: 24,
          tags: ['s'],
        },
      ],
    },
    {
      title: 'Salads & Soup',
      items: [
        { name: 'Butternut Squash Salad', price: 17.95, tags: ['v', 'gf'] },
        { name: 'Beet Salad', price: 18, tags: ['v', 'gf'] },
        { name: 'Caesar', desc: 'Add roasted chicken +$2', price: 19 },
        { name: 'Soup of the Day', desc: 'Made fresh daily', price: 14 },
        { name: 'Kabocha Squash Soup', price: 14, tags: ['ve', 'gf'] },
        { name: 'Savory Grain Bowl', price: 21, tags: ['v'] },
      ],
    },
    {
      title: 'Sandwiches',
      items: [
        {
          name: 'Turkey Pesto',
          desc: 'House-roasted turkey, basil pesto — “the best turkey sandwich” (Yelp)',
          price: 20,
          tags: ['s'],
        },
        { name: 'Jambon Beurre', desc: 'Ham, sweet butter, baguette', price: 19 },
        {
          name: 'Chèvre Tomate',
          desc: 'Goat cheese, tomato, herbes de Provence',
          price: 19,
          tags: ['v'],
        },
        { name: 'Daily Sandwich', desc: "Chef Lisa's daily creation", price: 19 },
      ],
    },
    {
      title: 'Specials',
      items: [
        { name: 'Chicken Special', desc: "Ask about today's preparation", price: 28 },
      ],
    },
    {
      title: 'Sweets',
      items: [
        { name: 'Cookie Plate', price: 10, tags: ['v'] },
        { name: 'Cheesecake', price: 14, tags: ['v'] },
      ],
    },
    {
      title: 'Drinks',
      items: [
        { name: 'House Hibiscus Iced Tea', price: 5, tags: ['ve', 'gf'] },
        { name: 'Hot Coffee', price: 3.5, tags: ['ve', 'gf'] },
        { name: 'Hot Tea', price: 3, tags: ['ve', 'gf'] },
        { name: 'Yerba Mate', price: 4, tags: ['ve', 'gf'] },
        { name: 'San Pellegrino', desc: 'Plain or flavored', price: 3.5, tags: ['ve', 'gf'] },
        { name: 'Olipop', price: 3.5, tags: ['ve', 'gf'] },
        { name: 'Topo Chico', price: 3.5, tags: ['ve', 'gf'] },
        { name: 'Ethic Tonic', price: 5.5, tags: ['ve', 'gf'] },
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
        { name: 'Meyer Lemon Hummus', desc: 'House-made focaccia toast', price: 9, tags: ['ve'] },
        { name: 'Pomme Frites', desc: 'Aioli, parmesan, parsley', price: 10, tags: ['v', 'gf'] },
        { name: 'Salmon Cakes', desc: 'Two per order, zesty remoulade', price: 14 },
        {
          name: 'Beef Sliders',
          desc: 'Two per order — dry-aged beef, caramelized onion compote, house-made aioli, aged gruyère, mini toasted brioche buns',
          price: 12,
          tags: ['s'],
        },
        { name: 'Rosemary Almonds', price: 6, tags: ['ve', 'gf'] },
        { name: 'Kettle Corn', price: 5, tags: ['v', 'gf'] },
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

export const allMenus: Menu[] = [mainMenu, happyHourMenu];
