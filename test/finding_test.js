const assert = require('assert');
const Cat = require('../models/cats');

describe('Finding records', () => {

  var cat;

  // runs before all others
  beforeEach((done) => {
    // Create new model element to
    // bypass the dropping of record
    cat = new Cat({
      name: 'Fluff Ball',
      age: 5
    });
    cat.save().then(() => {
      done();
    });
  });

  // Create finding test
  it('Finds single record in database', (done) => {

    // findOne (name or other atribute from Schema structure)
    // after it loads .then passing a result param
    Cat.findOne({ name: 'Fluff Ball'}).then((result) => {
      // take result and pass the parameter you wanna compare
      // (anything previously defined when saving the element)
      assert(result.name === 'Fluff Ball');
      done();
    });

  });
  // Create finding test by ID
  it('Finds single record by ID in the database', (done) => {

    // findOne by ID
    Cat.findOne({ _id: cat._id }).then((result) => {
      // take result and pass the parameter ID
      // IDs are Objects ... So to compare, you have to make into strings
      assert(result._id.toString() === cat._id.toString());
      done();
    });

  });

});
