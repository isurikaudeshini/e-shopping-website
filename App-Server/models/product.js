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
    //! Add try catch block instead of if statement because, if statement did not detect the error
    //     try {
    //       cb(JSON.parse(fileContent));
    //     } catch (_err) {
    //       return cb([]);
    //     }
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
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
