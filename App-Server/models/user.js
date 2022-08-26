const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email, cart, id) {
    this.name = username;
    this.email = email;
    this.cart = cart; //{items: []}-an object
    this._id = id;
  }

  save() {}

  static findById(userId) {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  addToCart(product) {
    // const cartProduct = this.cart.items.findIndex(cp => {
    //   return cp._id === product._id;
    // });
    const updatedCart = {
      /*updatedCart is an object, has items property array*/
      items: [
        {
          productId: new ObjectId(product._id),/*pullout all properties of this object_spread operator*/
          quantity: 1 /*in product the quantity property is overwrited*/,
        },
      ],
    };
    const db = getDb();
    return db
    .collection('users')
    .updateOne(
      { _id: new ObjectId(this._id) },
      { $set: { cart: updatedCart } } //overwritten by $set
    );
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .findOne({ _id: new ObjectId(userId) }) //findOne is an alternative for the find().next(),
      .then((user) => {
        console.log(user);
        return user;
      })
      .catch((err) => console.log(err));
  }
}

module.exports = User;
