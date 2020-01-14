const express = require("express");
const router = express.Router();

//controller
const user = require("./user-controller");

//routes after url .../user
router.get("/details", user.getUserDetails);
router.post("/login", user.loginUser);
router.put("/edit", user.editUser);
router.delete("/delete", user.deleteUser);
router.post("/create", user.createUser);
module.exports = router;
