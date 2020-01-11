const express = require("express");
const router = express.Router();
//controllers
const homePage = require("./home-page/home-page");
const poker = require("./poker");

const test = require("./test/index");

//routes
router.get("/", homePage);
router.use("/poker", poker);
router.use("/test", test);

//catch all unknown routes
router.use("*", (req, res) => {
  res.status(404).json("404");
});

module.exports = router;
