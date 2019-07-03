const db_message = require('../models/message')

module.exports = (req, res) => {
  // res.send('Message Created') // Testing

  // db_message is collection in database
  // SQL insert etc
  db_message.create({
    autor: 'Robert',
    body: 'Hello Ladys and Ladyboys!',
    date: '3 Jul 2019'
  }).then( (data) => {
    res.send(data)
  }).catch( (err) => {
    res.send(err)
  })
}
