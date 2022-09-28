const express = require('express')
const res = require('express/lib/response')
const app = express()
const path = require('path');
const port = process.env.PORT || 3300




// const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/razorpay.html');
  });










app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })