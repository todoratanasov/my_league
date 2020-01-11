const express = require("express");
const router = express.Router();

//controller
const hostedLeagues = require("./hosted-leagues-controller");
const participatedLeagues = require("./participated-leagues-controller");
const league = require("./league-controller");

//routes after url ...poker/league
//league
router.get("/league", league.getLeague);
router.post("/league", league.postLeague);
router.delete("/league", league.deleteLeague);
router.put("/league", league.editLeague);

//hosted leagues
router.get("/hostedleagues", hostedLeagues.getHostedLeagues);

//participated leagues
router.get("/participatedleagues", participatedLeagues.getParticipatedLeagues);

module.exports = router;
