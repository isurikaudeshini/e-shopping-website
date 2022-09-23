const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded(());
app.use(bodyParser.json()); //application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/feed',feedRoutes);

mongoose.connect(
    'mongodb+srv://Isurika:SM7aEw8n5DDRxxl8@cluster0.3h6s7p1.mongodb.net/shop?retryWrites=true&w=majority'
  ).then(result => {
    app.listen(8080);
  }).catch(err => console.log(err));
