const express = require("express");
const router = express.Router({ strict: true });

const testHome = require("./home-test");

router.get("/", testHome.get);
router.get("/dd", (req, res) => {
  res.send("it is in dd");
});
router.get("/xx", testHome.getXx);
module.exports = router;
