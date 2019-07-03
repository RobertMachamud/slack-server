const mongoose = require('mongoose')

// by default - userN and passW blanc - localhost etc.  Name of Database in this case -> slack03
mongoose.connect('mongodb://localhost:27017/slack03',
{useNewUrlParser: true}, (err) => {
  if (err) {
    console.log('Error:', err)
  } else {
    console.log('Connected to MongoDB');
  }
})

// export
module.exports = mongoose
