export default {
  recipes: [
    {
      id: 1,
      title: 'Watermelon',
      subtitle: 'Recipes with Anna Grace',
      imageURL: '/img/products/watermelon.png',
    },
    {
      id: 2,
      title: 'Asparagus',
      subtitle: 'Recipes with Anna Grace',
      imageURL: '/img/products/asparagus.png',
    },
  ],

  news: {
    standard: {
      type: 'standard',
      title: 'Organic bar',
      description:
        'Especially suitable for athletes, but also ideal for preventing fatigue and loss of productivity',
      callToAction: 'Shop now',
      callToActionURL: '#',
      imageURL: '/img/products/snacks.png',
    },
    coupon: {
      type: 'coupon',
      title: 'Spring coupon',
      coupon: 'FRUITS2021',
      discount: 10,
      description:
        'Gives 10% off all seasonal fruits on your first purchase.',
    },
  },

  saleProducts: [
    {
      id: 1,
      imageURL: '/img/products/blackberry-bluestem.png',
      name: 'Blackberry bluestem',
      price: [
        {
          name: 'regular',
          price: 6,
        },
        {
          name: 'sale',
          price: 6 * 0.7,
        },
      ],
      unit: 'pound',
      rate: 5,
    },
    {
      id: 2,
      imageURL: '/img/products/blueberries.png',
      name: 'Blueberries',
      price: [
        {
          name: 'regular',
          price: 11,
        },
        {
          name: 'sale',
          price: 11 * 0.7,
        },
      ],
      unit: 'pound',
      rate: 5,
    },
    {
      id: 3,
      imageURL: '/img/products/white-grapes-muscat.png',
      name: 'White grapes muscat',
      price: [
        {
          name: 'regular',
          price: 9,
        },
        {
          name: 'sale',
          price: 9 * 0.7,
        },
      ],
      unit: 'pound',
      rate: 5,
    },
    {
      id: 4,
      imageURL: '/img/products/yellow-buckthorn.png',
      name: 'Yellow buckthorn',
      price: [
        {
          name: 'regular',
          price: 10,
        },
        {
          name: 'sale',
          price: 10 * 0.7,
        },
      ],
      unit: 'pound',
      rate: 4.5,
    },
    {
      id: 5,
      imageURL: '/img/products/white-adriatic-figs.png',
      name: 'White adriatic figs',
      price: [
        {
          name: 'regular',
          price: 4,
        },
        {
          name: 'sale',
          price: 4 * 0.7,
        },
      ],
      unit: 'pound',
      rate: 4.4,
    },
    {
      id: 6,
      imageURL: '/img/products/natural-mango.png',
      name: 'Natural mango King size',
      price: [
        {
          name: 'regular',
          price: 12,
        },
        {
          name: 'sale',
          price: 12 * 0.7,
        },
      ],
      unit: 'pound',
      rate: 4.5,
    },
    {
      id: 7,
      imageURL: '/img/products/gold-apricots.png',
      name: 'Gold apricots Jumbo Limited edition',
      price: [
        {
          name: 'regular',
          price: 5.4,
        },
        {
          name: 'sale',
          price: 5.4 * 0.7,
        },
      ],
      unit: 'pound',
      rate: 4.5,
    },
  ],

  newProducts: [
    {
      id: 10,
      imageURL: '/img/products/raisins-from-red-grapes.png',
      name: 'Raisins from red grapes Extra series',
      price: [{ name: 'regular', price: 4 }],
      unit: 'pound',
      rate: 4.5,
    },
    {
      id: 11,
      imageURL: '/img/products/pistachios.png',
      name: 'Roasted peeled pistachios',
      price: [{ name: 'regular', price: 10 }],
      unit: 'pound',
      rate: 4.9,
    },
    {
      id: 12,
      imageURL: '/img/products/red-beans.png',
      name: 'Red beans',
      price: [{ name: 'regular', price: 7 }],
      unit: 'pound',
      rate: 5,
    },
    {
      id: 13,
      imageURL: '/img/products/assorted.png',
      name: 'Assorted: black, red, spotty and string beans',
      price: [{ name: 'regular', price: 9 }],
      unit: 'pound',
      rate: 5,
    },
    {
      id: 14,
      imageURL: '/img/products/black-beans.png',
      name: 'Black beans',
      price: [{ name: 'regular', price: 12 }],
      unit: 'pound',
      rate: 4.9,
    },
    {
      id: 15,
      imageURL: '/img/products/chocolate-apricots.png',
      name: 'Chocolate apricots',
      price: [
        {
          name: 'regular',
          price: 2.6,
        },
      ],
      unit: 'pound',
      rate: 4.4,
    },
    {
      id: 16,
      imageURL: '/img/products/seedless-prune.png',
      name: 'Seedless prune',
      price: [
        {
          name: 'regular',
          price: 3,
        },
      ],
      unit: 'pound',
      rate: 4.4,
    },
  ],
}
