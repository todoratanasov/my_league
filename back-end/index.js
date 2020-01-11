const env = process.env.NODE_ENV || "development";

//connect to the database
const config = require("./config/config")[env];
require("./config/database")(config);
