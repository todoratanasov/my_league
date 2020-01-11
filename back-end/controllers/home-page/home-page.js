const express = require("express");
const router = express.Router({ strict: true });
router.use("/", (req, res) => {
  res.send("Home page");
});
module.exports = router;
