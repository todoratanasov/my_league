const express = require("express");
const router = express.Router();

//controllers
const homePage = require("./home-page/home-page-controller");
const poker = require("./poker");
const user = require("./user");

//routes
router.get("/", homePage);
router.use("/poker", poker);
router.use("/user", user);

//catch all unknown routes
router.use("*", (req, res) => {
  res.status(404).json("404");
});

module.exports = router;
