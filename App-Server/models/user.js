const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }

  save() {}

  static findById(userId) {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }
  static findById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .findOne({ _id: new ObjectId(userId) }) //findOne is an alternative for the find().next(),
      .then(user => {
        console.log(user);
        return user;
      })
      .catch((err) => console.log(err));
  }
}

module.exports = User;
