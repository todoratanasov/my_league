module.exports = {
  //local host database
  development: {
    port: process.env.PORT || 3001,
    dbPath: "mongodb://localhost:27017/my-league"
  },
  //production database
  production: {
    port: process.env.PORT || 3001,
    dbPath: ""
  }
};
