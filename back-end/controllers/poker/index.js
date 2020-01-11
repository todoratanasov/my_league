const express = require("express");
const router = express.Router();

//controler path
const user = require("./user");
const league = require("./league");

//user
router.use("/user", user);

//league
router.use("/league", league);

module.exports = router;
