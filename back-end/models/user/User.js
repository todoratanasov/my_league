const mongoose = require("mongoose");
const encryption = require("../../util/encryption");
const passwords = require("../../config/passwords");

const userSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true
  },
  email: { type: mongoose.Schema.Types.String, required: true, unique: true },
  firstName: { type: mongoose.Schema.Types.String, required: true },
  lastName: { type: mongoose.Schema.Types.String, required: true },
  creationDate: { type: mongoose.Schema.Types.Date },
  hashedPass: { type: mongoose.Schema.Types.String, required: true },
  salt: { type: mongoose.Schema.Types.String, required: true },
  roles: [{ type: mongoose.Schema.Types.String }],
  poker: { type: mongoose.Schema.Types.Boolean, default: "false" },
  pokerHostedLeagues: [
    { type: mongoose.Schema.Types.ObjectId, ref: "PokerLeague" }
  ],
  pokerHostedEvents: [
    { type: mongoose.Schema.Types.ObjectId, ref: "PokerEvent" }
  ],
  pokerParticipatedEvents: [
    { type: mongoose.Schema.Types.ObjectId, ref: "PokerEvent" }
  ],
  pokerResults: [{ type: mongoose.Schema.Types.ObjectId, ref: "PokerResult" }],
  football: { type: mongoose.Schema.Types.Boolean, default: "false" },
  basketball: { type: mongoose.Schema.Types.Boolean, default: "false" }
});

//this is the method that is going to authenticate the user
userSchema.method({
  authenticate: function(password) {
    return (
      encryption.generateHashedPassword(this.salt, password) === this.hashedPass
    );
  }
});

const User = mongoose.model("User", userSchema);
//creating a Admin user if one does not presents
User.seedAdminUser = async () => {
  try {
    let users = await User.find();
    if (users.length > 0) return;
    const salt = encryption.generateSalt();
    const hashedPass = encryption.generateHashedPassword(
      salt,
      passwords.encryptPassword
    );
    return User.create({
      username: "Admin",
      salt,
      hashedPass,
      roles: ["Admin"]
    });
  } catch (e) {
    console.log(e);
  }
};
module.exports = User;
