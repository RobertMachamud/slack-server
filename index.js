const express = require('express')
const path = require('path')
const app = express()
require('dotenv').config()

require('./db')

app.post('/api/messages', require('./controllers/post_message'))
app.get('/api/messages', require('./controllers/get_messages'))


app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log('err', err)
  } else {
    console.log(`Server is listening on port ${process.env.PORT}`)
  }
})
