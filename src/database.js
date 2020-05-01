const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://joven:bI0qHQuEAemh1PKE@joven-j4sp6.mongodb.net/test?retryWrites=true&w=majority\n', {
    useNewUrlParser: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));