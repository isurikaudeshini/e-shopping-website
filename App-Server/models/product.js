const fs = require('fs');
const path = require('path');

const Cart = require('./cart');

//gobal helper constant
const p = path.join(
  path.dirname(require.main.filename),
  'data',
  'products.json'
);

// helper function
const getProductsFromFile = (cb) => {
  fs.readFile(p, (_err, fileContent) => {
    try {
      cb(JSON.parse(fileContent));
    } catch (_err) {
      cb([]);
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, price, description) {
    //initialize new product
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    //add a new property to entire product object
    getProductsFromFile((products) => {
      if (this.id) {
        const existingProductIndex = products.findIndex(
          (prod) => prod.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          if (err) return console.log(err);
        });
      }
    });
  }

  static deleteById(id) {
    getProductsFromFile((products) => {
      const product = products.find((prod) => prod.id === id);
      const updatedProducts = products.filter((prod) => prod.id !== id); //takes an nonymous function and will return me all elements as part of a new arry
      fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
        if (!err) {
          Cart.deleteProduct(id, product.price);
        }
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
};
