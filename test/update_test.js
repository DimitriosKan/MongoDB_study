const assert = require('assert');
const Cat = require('../models/cats');

describe('Updating records', () => {

  var cat;

  // runs before all others
  beforeEach((done) => {
    // Create new model element to
    // bypass the dropping of record
    cat = new Cat({
      name: 'Fluff Ball',
      age: 5,
      weight: 10
    });
    cat.save().then(() => {
      done();
    });
  });

  // Create updating test
  it('Updating single record in database', (done) => {
    // update from ... to ... , wat for it to finish
    Cat.findOneAndUpdate({ name: 'Fluff Ball'}, { name: 'Snowball' }).then(() => {
      Cat.findOne({ _id:cat._id }).then((result) => {
        assert(result.name === 'Snowball');
        done();
      });
    });

  });

  // More on operators:
  // https://docs.mongodb.com/manual/reference/operator/update/
  it('Increment weight by one', (done) => {
    // update weight by one increment, of all records
    Cat.updateOne({}, { $inc: { weight: 1 } }).then(() => {
      Cat.findOne({ name: 'Fluff Ball' }).then((record) => {
        assert(record.weight === 11);
        done();
      });
    });

  });

});
