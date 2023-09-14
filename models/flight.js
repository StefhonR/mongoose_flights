const mongoose = require("mongoose")

const flightSchema = new mongoose.Schema(
  {
    airline: { type: String, enum: ['American', 'Southwest', 'United'], required: true },
    flightNum: { type: Number, min: 10, max: 9999, required: true },
    departs: { type: Date }
  },
  {
    timestamps: true,
  }
)

const Flight = mongoose.model("Flight", flightSchema)

module.exports = Flight