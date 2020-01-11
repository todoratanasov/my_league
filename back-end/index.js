const express = require("express");
const env = process.env.NODE_ENV || "development";

//connect to the database
const config = require("./config/config")[env];
require("./config/database")(config);

//initialize express
const app = express();

//configuring express
require("./config/express")(app);

//configuring router
require("./config/routes")(app);

//use passport
require("./config/passport")();

app.listen(config.port, () => {
  console.log(`Server listen on port: ${config.port}`);
});
