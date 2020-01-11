const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");

const passwords = require("./passwords");

module.exports = app => {
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(
    session({
      secret: passwords.session,
      resave: false,
      saveUninitialized: false
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.use((req, res, next) => {
    if (req.user) {
      res.locals.currentUser = req.user;
    }
    next();
  });

  app.use((req, res, next) => {
    //check if the user is 'Admin'
    if (req.user) {
      res.locals.isAdmin = req.user.roles.indexOf("Admin") !== -1;
    }
    next();
  });

  //app.use(express.static("./static"));
};
