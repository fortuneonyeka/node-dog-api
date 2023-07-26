
const express = require("express");
const app = express()

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

const about = [
  {
    name: "Bull Dog",
    attr: "Dangerous"
  }
]

app.get("/dogs", (req, res) => {
    res.send(dogs)
})
app.get("/dogs/:id", (req, res) => {
    res.json(dogs[parseInt(req.params.id)- 1])
})
