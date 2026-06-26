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
        { name: 'Beet Salad', price: 16.95, tags: ['v', 'gf'] },
        { name: 'Caesar', desc: 'Add roasted chicken +$4.70', price: 15.25 },
        { name: 'Soup of the Day', desc: 'Made fresh daily', price: 12 },
        { name: 'Kabocha Squash Soup', price: 10.95, tags: ['ve', 'gf'] },
        { name: 'Savory Grain Bowl', price: 19.95, tags: ['v'] },
      ],
    },
    {
      title: 'Sandwiches',
      items: [
        {
          name: 'Turkey Pesto',
          desc: 'House-roasted turkey, basil pesto — “the best turkey sandwich” (Yelp)',
          price: 17.95,
          tags: ['s'],
        },
        { name: 'Jambon Beurre', desc: 'Ham, sweet butter, baguette', price: 16.95 },
        {
          name: 'Chèvre Tomate',
          desc: 'Goat cheese, tomato, herbes de Provence',
          price: 16.95,
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
  served: 'Wednesday – Saturday, 3:00 – 6:00pm',
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
      title: 'Cans',
      note: '$5',
      items: [
        { name: 'Dust Bowl Taco Truck Lager', priceText: '5' },
        { name: 'Iron Ox Adamoxium IPA', priceText: '5' },
        { name: 'Iron Ox Black Oyster Lager', priceText: '5' },
        { name: 'Ethic Scarlet Cider', priceText: '5' },
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

export const beveragesMenu: Menu = {
  id: 'beverages',
  title: 'Beverages',
  served: 'All day',
  sections: [
    {
      title: 'Sparkling, White & Rosé',
      note: 'glass / bottle',
      items: [
        {
          name: 'Blanc de Blancs Sparkling Brut',
          desc: "Crémant d'Alsace, NV, France",
          priceText: '13 / 39',
        },
        {
          name: 'Brut Rosé Sparkling',
          desc: 'Baron de Seillac, NV, France',
          priceText: '9 / 30',
        },
        {
          name: 'Bubbly Rosé',
          desc: 'Square Peg, California (12 oz can)',
          priceText: '12 / —',
        },
        {
          name: 'Extra Brut Premier Cru Champagne',
          desc: "Jean François d'Autreville, NV, France",
          priceText: '— / 72',
        },
        { name: 'Viognier', desc: 'Le Chansac, 2021, France', priceText: '9 / 27' },
        {
          name: 'Gewürztraminer',
          desc: 'Les Comtes de Ribeauvillé, 2016, Alsace, France',
          priceText: '14 / 42',
        },
        {
          name: 'Sauvignon Blanc',
          desc: 'La Villaudière, 2024, Loire Valley, France',
          priceText: '11 / 33',
        },
        {
          name: 'Sancerre',
          desc: 'Domaine Jean-Paul & Jean-Luc Millet, 2024, Sancerre, France',
          priceText: '15 / —',
        },
        { name: 'Chardonnay', desc: '5 Russians, 2025, Sonoma Coast', priceText: '11 / 33' },
        { name: 'Rosé Provence', desc: 'Domaine de Beaupré, 2022, France', priceText: '10 / 30' },
        {
          name: 'Rosé of Pinot Noir',
          desc: 'Tongue Dancer Wines, 2025, Sonoma County',
          priceText: '13 / —',
        },
      ],
    },
    {
      title: 'Red Wine',
      note: 'glass / bottle',
      items: [
        { name: 'Beaujolais', desc: 'Pascal Berthier, 2020, France', priceText: '9 / 27' },
        { name: 'Pinot Noir', desc: '5 Russians, 2023, Sonoma Coast', priceText: '10 / 30' },
        {
          name: 'Pinot Noir',
          desc: 'Breaking Bread, 2024, Sonoma Coast',
          priceText: '15 / —',
        },
        { name: 'Malbec', desc: 'Clos La Coutale, 2023, France', priceText: '11 / 33' },
        {
          name: 'Red Blend',
          desc: 'Peterson Winery, 2021, Dry Creek Valley',
          priceText: '14 / —',
        },
      ],
    },
    {
      title: 'Beer — On Tap',
      items: [
        {
          name: 'Happy Hops IPA',
          desc: 'Russian River Brewing · 16 oz · 6.5% ABV',
          price: 7.5,
        },
        {
          name: 'Bukovany Five Czech Pils',
          desc: 'Old Caz · 16 oz · 5.1% ABV',
          price: 7.5,
        },
        {
          name: 'Damnation Belgian Golden Ale',
          desc: 'Russian River Brewing · 12 oz pour · 7.5% ABV',
          price: 7.5,
        },
      ],
    },
    {
      title: 'Beer — Cans',
      items: [
        {
          name: 'Taco Truck Lager',
          desc: 'Dust Bowl Brewing · 16 oz · 4.7% ABV',
          price: 7,
        },
        {
          name: 'Black Pearl Oyster Lager',
          desc: 'Iron Ox Brewing · 16 oz · 5.1% ABV',
          price: 7,
        },
        {
          name: 'Free Craisg Tropical Hazy IPA',
          desc: 'Old Caz · 16 oz · 6.9% ABV',
          price: 8,
        },
        {
          name: 'Kaleidoscope Hazy IPA',
          desc: 'Parliament Brewing · 16 oz · 6.9% ABV',
          price: 8,
        },
        {
          name: 'Adamoxium IPA',
          desc: 'Iron Ox Brewing · 16 oz · 6.9% ABV',
          price: 8,
        },
        {
          name: 'Revision Double IPA',
          desc: 'Revision Brewing · 16 oz · 8% ABV',
          price: 8.5,
        },
      ],
    },
    {
      title: 'Cider, Seltzer & Sour',
      items: [
        {
          name: 'Scarlett Cider',
          desc: 'Ethic Ciders · local apples, blackberries & raspberries · 16 oz · 7.5% ABV',
          price: 8,
        },
        {
          name: 'Brut Cider',
          desc: 'Le Père Jules, France · farmhouse style · 11 oz · 5% ABV',
          price: 7,
        },
        {
          name: 'Sparklepants Seltzer',
          desc: 'Cactus Coopa, Cooperage Brewing · orange & pineapple · 16 oz · 6.6% ABV',
          price: 7,
        },
        {
          name: 'Passionfruit Guava Seltzer',
          desc: 'Belching Beaver Brewing · 12 oz · 5.5% ABV',
          price: 6,
        },
        {
          name: 'Fruitception POG Kettle Sour',
          desc: 'Cooperage · passionfruit, orange, guava · 16 oz · 5.3% ABV',
          price: 8,
        },
      ],
    },
    {
      title: 'Non-Alcoholic',
      items: [
        {
          name: 'House Hibiscus Mint Tea',
          desc: 'Fresh-brewed, slightly sweet',
          price: 5,
          tags: ['ve', 'gf'],
        },
        {
          name: 'Ethic Sparkling Apple Tonic',
          desc: 'Local apples, ACV, refreshing',
          price: 5.5,
          tags: ['ve', 'gf'],
        },
        { name: 'San Pellegrino Sparkling Water', price: 3, tags: ['ve', 'gf'] },
        { name: 'San Pellegrino Aranciata', desc: 'Orange', price: 3.5, tags: ['ve', 'gf'] },
        { name: 'San Pellegrino Limonata', desc: 'Lemon', price: 3.5, tags: ['ve', 'gf'] },
        {
          name: 'OliPop Sodas',
          desc: 'Root beer, ginger ale, cherry vanilla',
          price: 3.5,
          tags: ['ve', 'gf'],
        },
      ],
    },
  ],
};

export const allMenus: Menu[] = [mainMenu, happyHourMenu, beveragesMenu];
