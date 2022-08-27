const mongoose = require('mongoose');

const Schema = mongoose.Schema;  //mongoose is an object, Schema is a constructor

const productSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  price: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }

});



// const mongodb = require('mongodb');
// const getDb = require('../util/database').getDb;

// class Product {
//   constructor(title, price, description, imageUrl, id, userId) {
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.imageUrl = imageUrl;
//     this._id = id ? new mongodb.ObjectId(id) : null; //ternary expression,if else
//     this.userId = userId;
//   }

//   save() {
//     const db = getDb();
//     let dbOp;
//     if (this._id) {
//       //update
//       dbOp = db
//         .collection('products')
//         .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this });
//     } else {
//       dbOp = db.collection('products').insertOne(this);
//     }
//     return dbOp
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => console.log(err));
//   }

//   static fetchAll() {
//     const db = getDb();
//     return db
//       .collection('products')
//       .find()
//       .toArray() //get all documents and put them in an arrray
//       .then((products) => {
//         console.log(products);
//         return products;
//       })
//       .catch((err) => console.log(err));
//   }

//   static findById(prodId) {
//     const db = getDb();
//     return (
//       db
//         .collection('products')
//         .find({ _id: new mongodb.ObjectId(prodId) })
//         //here passes the objectid(prodId) object as id instead of a string
//         .next()
//         .then((product) => {
//           console.log(product);
//           return product;
//         })
//         .catch((err) => console.log(err))
//     );
//   }

//   static deleteById(prodId) {
//     const db = getDb(); //access database
//     console.log(prodId, 'line 62');
//     return (
//       db
//         .collection('products')
//         .deleteOne({ _id: new mongodb.ObjectId(prodId) })
//         /* reachout products collection,deleteone product with specified filter , prodId argument is 
//    converted to a objectid by passing it to the ObjectId constructor */
//         .then((result) => {
//           console.log('Deleted!');
//         })
//         .catch((err) => console.log(err))
//     );
//   }
// }

// module.exports = Product;
