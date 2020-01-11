const express = require("express");
const router = express.Router();

//controler
const hostedLeagues = require("./hosted-leagues");

//hosted leagues
router.get("/hostedleagues", hostedLeagues.get);
router.put("/hostedleagues", hostedLeagues.put);
router.delete("/hostedleagues", hostedLeagues.del);
module.exports = router;
