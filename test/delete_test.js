const assert = require('assert');
const Cat = require('../models/cats');

describe('Deleting records', () => {

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

  // Create deleting test
  it('Deletes single record in database', (done) => {
    Cat.findOneAndRemove({ name: 'Fluff Ball' }).then(() => {
      Cat.findOne({ name: 'Fluff Ball' }).then((result) => {
        // pass just the result, as specifying name or age will confuse it
        assert(result === null);
        done();
      });
    });
  });

});
