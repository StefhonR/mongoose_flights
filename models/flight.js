const mongoose = require("mongoose")

const destinationSchema = new mongoose.Schema(
  {
    airport: { type: String, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'], required: true },
    arrival: { type: Date }
  }
)

const flightSchema = new mongoose.Schema(
  {
    airline: { type: String, enum: ['American', 'Southwest', 'United'], required: true },
    flightNum: { type: Number, min: 10, max: 9999, required: true },
    departs: { type: Date },
    airport: { type: String, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'], default: 'SAN' },
    destinations: { type: [destinationSchema] }
  },
  {
    timestamps: true,
  }
)

const Flight = mongoose.model("Flight", flightSchema)

module.exports = Flight