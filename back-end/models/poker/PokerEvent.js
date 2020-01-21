const mongoose = require("mongoose");

const PokerEventSchema = new mongoose.Schema({
  name: { type: mongoose.Schema.Types.String, unique: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  creationDate: { type: mongoose.Schema.Types.Date, default: Date.now },
  address: { type: mongoose.Schema.Types.String, required: true },
  eventDateTime: { type: mongoose.Schema.Types.Date },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  isActive: { type: mongoose.Schema.Types.Boolean, default: "true" },
  results: [{ type: mongoose.Schema.Types.ObjectId, ref: "PokerResult" }],
  league: { type: mongoose.Schema.Types.ObjectId, ref: "PokerLeague" }
});

const PokerEvent = mongoose.model("PokerEvent", PokerEventSchema);

module.exports = PokerEvent;
