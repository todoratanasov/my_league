const express = require("express");
const router = express.Router();

//controller
const user = require("./user-controller");

//routes after url ...poker/user
router.get("/userdetails", user.getUserDetails);
router.post("/login", user.createUser);
router.put("/edit", user.editUser);
router.delete("/delete", user.deleteUser);

module.exports = router;
