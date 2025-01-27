require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("karthikdotcom")
})

app.get('/login', (req, res) => {
    res.send("<h1>Please enter your login details</h1>")
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Welcome to youtube</h2>")
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})