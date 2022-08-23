const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://Isurika:SM7aEw8n5DDRxxl8@cluster0.3h6s7p1.mongodb.net/?retryWrites=true&w=majority'
  )
    .then((client) => {
      console.log('Connected!');
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;