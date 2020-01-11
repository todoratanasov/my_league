module.exports = {
  getUserDetails: (req, res) => {
    //returns info for the user from DB
    res.status(200).json("User GET");
  },
  createUser: (req, res) => {
    //login user. Returns auth token
    res.status(200).json("Login POST");
  },
  editUser: (req, res) => {
    //edit user in DB
    res.status(200).json("User PUT");
  },
  deleteUser: (req, res) => {
    //delete user in DB
    res.status(200).json("User DELETE");
  }
};
