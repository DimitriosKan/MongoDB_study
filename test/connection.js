const mongoose = require('mongoose');

// ES6 Promises (Mocha deprecation fix)
mongoose.Promise = global.Promise;

// Connect before running tests
// ('before' is a mocha hook)
before((done) => {
  // Connection destination,
  mongoose.connect('mongodb://localhost/swag',
    { useNewUrlParser: true,
      useFindAndModify: false
    });

  // listens to when the connection is open
  mongoose.connection.once('open', function() {
    console.log('We are connected!');
    done();
  }).on('error', function(error) {
    console.log('Connection error', error);
  });

});

// Drop collection before each TEST
beforeEach((done) => {
  // Drop collection
  // call mongoose, collections in the connection and drop
  mongoose.connection.collections.cats.drop(() => {
    done();
  });
});
