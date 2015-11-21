var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var commentSchema = new mongoose.Schema({
  author: String,
  text: String
});

var entrySchema = new mongoose.Schema({
  author: String,
  photo_url: String,
  date_taken: Date,
  caption: String,
  likes: Number,
  comments: [commentSchema]
});

var userSchema = new mongoose.Schema({
  name:   String,
  entries: [entrySchema]
});

module.exports = mongoose.model('User', userSchema);
