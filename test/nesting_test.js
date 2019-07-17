const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/authors');

// create describer
describe('Nesting records', () => {

// call outside for it to be callable by individual tests
  var martin;

// using 'before' as I want the author to be created once for all 'it' tests
// as opposed to every one with 'beforeEach'
  before((done) => {
    // Create new model element and passes a model
    martin = new Author({
      name: 'J.R.R. Martin',
      books: [{ title: 'The Lord of the Rings', pages: 2000 }]
    });
    martin.save().then(() => {
      done();
    });
  });

  // Create new test
  it('Nest all records in database', (done) => {
    // Saves element
    // calls the creation variable, saves it and waits
    // then waits for the promise
    Author.findOne({ name: 'J.R.R. Martin' }).then((record) => {
      console.log(record + " RECORD");
      assert(record.books.length === 1);
      done();
    });
  });

  // Create new test
  it('Nest new book in database (PUSH)', (done) => {
    // Saves element
    // calls the creation variable, saves it and waits
    // then waits for the promise
    Author.findOne({ name: 'J.R.R. Martin' }).then((record) => {
      record.books.push({ title: 'Another book', pages: 20 });
      record.save().then(() => {

        Author.findOne({ name: 'J.R.R. Martin' }).then((result) => {
          console.log(result + " RESULT");
          assert(result.books.length === 2);
          done();
        });
      });
    });
  });

  // Create deleting test for Nested things
  it('Deletes single record in database', (done) => {
    Author.findOneAndRemove({ name: 'J.R.R. Martin' }).then(() => {
      Author.findOne({ name: 'J.R.R. Martin' }).then((result) => {
        // pass just the result, as specifying name or age will confuse it
        // console.log(result + " RESULT");
        assert(result === null);
        done();
      });
    });
  });

});
