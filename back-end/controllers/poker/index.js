const express = require("express");
const router = express.Router();

//controler path
const league = require("./league");
const event = require("./event");
//league
router.use("/league", league);
router.use("/event", event);
module.exports = router;
