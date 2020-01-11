module.exports = {
  get: (req, res) => {
    //returns all hosted by the user leagues
    res.status(200).json("All hosted leagues GET");
  },
  put: (req, res) => {
    //edit a hosted league in the DB
    res.status(200).json("All hosted leagues PUT");
  },
  del: (req, res) => {
    res.status(200).json("All hosted leagues DELETE");
  }
};
