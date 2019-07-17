const assert = require('assert');
const Cat = require('../models/cats');

// create describer
describe('Saving records', () => {
  // create new test
  it('Saves record to database', (done) => {
    // Create new model element and passes a model
    var cat = new Cat({
      name: 'Fluff Ball'
    });

    // Saves element
    // calls the creation variable, saves it and waits
    // then waits for the promise
    cat.save().then(() => {
      // assert, checks if the new cat
      // has been saved to DB aka isNew = false
      assert(cat.isNew === false);
      // done breaks the wait (also set in the 'it' funct)
      done();
    });

  });

});
