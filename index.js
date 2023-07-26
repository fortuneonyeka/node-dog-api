
const express = require("express");
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })
const port = 4996

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

const dogs = [

  { id: 1,name: "Osama",breed: "bull"},
  { id: 2,name: "Shark",breed: "husky"},
  { id: 3,name: "Terry",breed: "asesian"},
  { id: 4,name: "Pax",breed: "boa"},
  { id: 5,name: "Perry",breed: "german Shaphard"},
]



app.get("/dogs", (req, res) => {
    res.send(dogs)
})
app.get("/dogs/:id", (req, res) => {
    res.json(dogs[parseInt(req.params.id)- 1])
})

