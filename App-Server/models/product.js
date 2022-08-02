const fs = require('fs');
const path = require('path');

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(
      path.dirname(require.main.filename),
      'data',
      'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
        //! Add try catch block instead of if statement because, if statement did not detect the error 
        try {
          products = JSON.parse(fileContent);
        } catch (err) {
          products = [];
        }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(
      path.dirname(require.main.filename),
      'data',
      'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
       //! Add try catch block instead of if statement because, if statement did not detect the error 
       try {
        cb(JSON.parse(fileContent));
      } catch (_err) {
        cb([]);
      }
    });
  }
};
