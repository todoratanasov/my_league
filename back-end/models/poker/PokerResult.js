const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  league: { type: mongoose.Schema.Types.ObjectId, ref: "PokerLeague" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  buyIn: { type: mongoose.Schema.Types.Number, required: true },
  cashOut: { type: mongoose.Schema.Types.Number, required: true }
});

const Result = mongoose.model("PokerResult", ResultSchema);

module.exports = Result;
