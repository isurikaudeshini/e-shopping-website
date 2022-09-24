const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uderSchema = new Schema({
  email: {
    type: 'string',
    required: true,
  },
  password: {
    type: 'string',
    required: true,
  },
  name: {
    type: 'string',
    required: true,
  },
  status: {
    type: 'string',
    required: true,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
