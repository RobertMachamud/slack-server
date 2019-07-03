const db_channel = require('../models/channel')

module.exports = (req, res) => {
  // res.send('Message Created') // Testing

  // db_message is collection in database
  // SQL insert etc
  db_channel.create({

    name: 'geneal'

  }).then( (data) => {
    res.send(data)
  }).catch( (err) => {
    res.send(err)
  })
}
