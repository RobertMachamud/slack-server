const db_channel = require('../models/message')

module.exports = (req, res) => {
  db_channel.find({}).then( (data) => {
    res.send(data)
  }).catch( (err) => {
    res.send(err)
  })
}
