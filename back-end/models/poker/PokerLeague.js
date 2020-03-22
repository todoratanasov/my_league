const mongoose = require("mongoose");

const leagueSchema = new mongoose.Schema({
  name: { type: mongoose.Schema.Types.String, unique: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  creationDate: { type: mongoose.Schema.Types.Date, default: Date.now },
  closeDate: { type: mongoose.Schema.Types.Date },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  awaitingParticipants: [{ type: mongoose.Schema.Types.ObjectId }],
  isActive: { type: mongoose.Schema.Types.Boolean, default: "true" },
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: "PokerEvent" }]
});

const League = mongoose.model("PokerLeague", leagueSchema);

module.exports = League;
