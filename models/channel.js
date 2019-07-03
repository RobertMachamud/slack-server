const db = require('../db')

// model has 2 args - 1. Connection (); 2. Schema (besstimmt das Schema - author soll ein String sein usw.)
// security - we ...
const db_channel = db.model('channel', {
  // takes the type
  name: String
})

module.exports = db_channel
