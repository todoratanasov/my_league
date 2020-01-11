const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//const User = require("../models/User");

module.exports = config => {
  mongoose.connect(config.dbPath, {
    useNewUrlParser: true
  });
  const db = mongoose.connection;
  db.once("open", err => {
    if (err) {
      throw err;
    }
    //on first connection Admin user will be created
    // User.seedAdminUser()
    //   .then(() => {
    //     console.log("Database ready");
    //   })
    //   .catch(reason => {
    //     console.log(
    //       "Something went wrong with FIRST connection to the database!"
    //     );
    //     console.log(reason);
    //   });
  });
  db.on("error", reason => {
    console.log("Something went wrong with connection to the database!");
    console.log(reason);
  });
};
