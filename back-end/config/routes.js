//const controllers = require("../controllers");
//const restrictedPages = require("./auth");

module.exports = app => {
  //home
  //app.get("/", controllers.home.index);

  //test GET
  app.get("/", (req, res) => {
    res.send("It is working!");
  });

  app.all("*", (req, res) => {
    res.json("This is 404!");
  });
};
