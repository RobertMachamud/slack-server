const express = require('express')
const path = require('path')
const app = express()
require('dotenv').config()


app.get('/api/messages', require('./controllers/get_messages.js'))

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log('err', err)
  } else {
    console.log(`Server is listening on port ${process.env.PORT}`)
  }
})
