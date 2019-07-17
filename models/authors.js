const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Books schema creation
// !! Have the schema to-be-nested before the parent schema !!
const BookSchema = new Schema ({
  title: String,
  pages: Number
});

// Author schema creation
const AuthorSchema = new Schema ({
  name: String,
  age: Number,
  books: [BookSchema]
});

// Making the model, passing a collection name and the schema
const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;
