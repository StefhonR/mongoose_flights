require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const Flight = require('./models/flight')


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.once("open", () => {
  console.log("breached through their firewall, connected to the mongo server >:)")
})

const jsxViewEngine = require("jsx-view-engine")
app.set("view engine", "jsx")
app.set("views", "./views")
app.engine("jsx", jsxViewEngine())

app.use((req, res, next) => {
  console.log('Middleware: I run for all routes, 1');
  next()
})

app.use(express.urlencoded({ extended: false }))

// app.get("*", (req, res) => {
//   res.redirect("/flights")
// })

app.get('/flights', async (req, res) => {
  try {
    const foundFlights = await Flight.find({})
    res.status(200).render('Index', {
      flights: foundFlights
    })
  } catch (err) {
    res.status(400).send(err)
  }
})

app.get('/flights/new', (req, res) => {
  console.log('New controller')
  res.render('New')
})

app.post('/flights', async (req, res) => {
  try {
    const createdFlight = await Flight.create(req.body)

    res.status(201).redirect('/flights')
  } catch (err) {
    res.status(400).send(err)
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})