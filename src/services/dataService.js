
const catalog = [
    {
        title: 'Orange',
        category: 'Fruit',
        price: 15.9,
        image: '/images/oranges.png',
        _id: '1',
      },
      {
        title: 'Banana',
        category: 'Fruit',
        price: 17.012,
        image: '/images/banana.png',
        _id: '2',
      },
      {
        title: 'Chesse',
        category: 'Dairy and Eggs',
        price: 33.3,
        image: '/images/chesse.png',
        _id: '3',
      },
      {
        title: 'Coffee',
        category: 'Beverages',
        price: 73.12,
        image: '/images/coffee.png',
        _id: '4',
      },
      {
        title: 'Hoodie',
        category: 'Merchandise',
        price: 41.92,
        image: '/images/hoodie.png',
        _id: '5',
      },
      {
        title: 'Milk',
        category: 'Dairy and Eggs',
        price: 11.2,
        image: '/images/milk.png',
        _id: '6',
      },
      {
        title: 'Vitamins',
        category: 'Merchandise',
        price: 43.76,
        image: '/images/vitamins.png',
        _id: '7',
      },
      {
        title: 'Granada Juice',
        category: 'Beverages',
        price: 23.36,
        image: '/images/product-22.jpg',
        _id: '8',
      },
      {
        title: 'Tomatos',
        category: 'Vegetables',
        price: 12.46,
        image:
          'https://www.melissas.com/cdn/shop/files/image-of-organic-tomatoes-fruit-34547171950636_600x601.jpg?v=1691078328',
        _id: 'asdas',
      },    
];


var categories = ['Fruit','Vegetables', 'Dairy and Eggs', 'Merchandise', 'Beverages'];

class DataService {

    getProducts() {
        // todo: call the server to retrieve products

        // hardcoded values
        return catalog;
    }

    getCategories() {
        // todo: call the server 

        // hardcoded values
        return categories;
    }
}

export default new DataService();