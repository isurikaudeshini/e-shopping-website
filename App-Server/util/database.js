const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
   'mongodb+srv://Isurika:SM7aEw8n5DDRxxl8@cluster0.3h6s7p1.mongodb.net/?retryWrites=true&w=majority'
  )
    .then((client) => {
      console.log('Connected!');
      _db = client.db('test');
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if(_db) {
    return _db
  }
  throw 'No database found!'
}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;