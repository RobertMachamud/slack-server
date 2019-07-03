const db = require('../db')

// model has 2 args - 1. Connection (); 2. Schema (besstimmt das Schema - author soll ein String sein usw.)
// security - we ...
const db_message = db.model('message', {
  // takes the type
  author: String,
  // Date is a type
  // date: Date,
  date: String,
  body: String
})

module.exports = db_message
