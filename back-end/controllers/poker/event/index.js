const express = require("express");
const router = express.Router();

//controller
const event = require("./event-controller");

//routes after ...poker/event
//CRUD event
router.post("/create", event.createEvent);
router.get("/available", event.availableEvents);
router.put("/edit", event.editEvent);
router.delete("/delete", event.deleteEvent);

//manipulate results
router.put("/result", event.enterResults);
router.put("/editresult", event.editResults);

module.exports = router;
