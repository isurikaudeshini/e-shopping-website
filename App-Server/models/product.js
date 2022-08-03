const fs = require('fs');
const path = require('path');

//gobal helper constant
const p = path.join(
  path.dirname(require.main.filename),
  'data',
  'products.json'
);

// helper function
const getProductsFromFile = (cb) => {
  fs.readFile(p, (_err, fileContent) => {
    if (_err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, price, description) {          //initialize new product
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
