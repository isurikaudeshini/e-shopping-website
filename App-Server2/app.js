const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session'); //when we start up server for every incoming request initializing this

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin'); //registering the routes to reach them
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth'); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'my secret', resave: false, saveUninitialized: false})
);
//session setup is a js object, secret is a long string, session will not be save for every request but some thing changed, ensuring no session will save unless changed

app.use((req, res, next) => {
  User.findById('5bab316ce0a7c75f783cb8a8')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://Isurika:SM7aEw8n5DDRxxl8@cluster0.3h6s7p1.mongodb.net/shop?retryWrites=true&w=majority'
  )
  .then(result => console.log('connected'))
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Max',
          email: 'max@test.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
