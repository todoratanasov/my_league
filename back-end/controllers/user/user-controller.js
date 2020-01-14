module.exports = {
  getUserDetails: (req, res) => {
    //returns info for the user from DB for all different games (poker, football, basketball)
    res.status(200).json("User GET");
  },
  loginUser: (req, res) => {
    //login user. Returns auth token
    res.status(200).json("Login POST");
  },
  editUser: (req, res) => {
    //edit user in DB
    res.status(200).json("User edit PUT");
  },
  deleteUser: (req, res) => {
    //delete user in DB
    res.status(200).json("User delete DELETE");
  },
  createUser: (req, res) => {
    res.status(200).json("User created POST");
  }
};
