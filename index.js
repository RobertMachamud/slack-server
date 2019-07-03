const express = require('express')
const path = require('path')
const app = express()
const dotenv = require('dotenv')
// app.use(express.static(path.join(__dirname, '')))

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'))
// })

app.listen(4000, (err) => {
  if (err) {
    console.log('err', err)
  } else {
    console.log('Server is listening on port 4000')
  }
})
