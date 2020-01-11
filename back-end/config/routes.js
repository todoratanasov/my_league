const controllers = require("../controllers");
//const restrictedPages = require("./auth");

module.exports = app => {
  app.enable("strict routing");
  app.use(controllers);
};
