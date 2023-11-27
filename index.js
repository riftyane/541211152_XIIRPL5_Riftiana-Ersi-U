
const express = require('express')
const app = express()
const userrouter = require('./router/users')

const port = 3000

app.use(express.json()) //for pasing aplication/json
app.use(express.urlencoded({extended: true})) //for pasing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(userrouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})