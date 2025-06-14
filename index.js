const express = require("express")
const app = express()
const PORT = 3000
const matchData = require("./routes/login")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(cors())

// Middleware to parse JSON
app.use(express.json())

// For parsing application/json
app.use(bodyParser.json())

// For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, world!")
})

app.post("/", (req, res) => {
  console.log("Accepted Request")
  const inputData = req.body
  const result = matchData(inputData)
  res.json(result)
  console.log(result)
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
