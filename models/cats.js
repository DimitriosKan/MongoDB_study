const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema creation
const CatSchema = new Schema ({
  name: String,
  age: Number,
  weight: Number,
  fluff: Boolean
});

// Making the model, passing a collection name and the schema
const Cat = mongoose.model('cats', CatSchema);

module.exports = Cat;
