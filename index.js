const express = require('express')
const path = require('path')
const app = express()
require('dotenv').config()

// test connection to mongodb
// require('./db')

// route for messages
app.post('/api/messages', require('./controllers/post_message'))
app.get('/api/messages', require('./controllers/get_messages'))
// this one is the route for channels
app.post('/api/channels', require('./controllers/post_channel'))
app.get('/api/channels', require('./controllers/post_channel'))



app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log('err', err)
  } else {
    console.log(`Server is listening on port ${process.env.PORT}`)
  }
})
