const db_message = require('../models/message')

module.exports = (req, res) => {
//   db_message.find({
//     author: 'Robert'
//   })
// }.then( (data) => {
//   res.send(data)
// }).catch( (err) => {
//   res.send(err)
// })
  db_message.find({}).then( (data) => {
    res.send(data)
  }).catch( (err) => {
    res.send(err)
  })
}