module.exports = {
  getHostedLeagues: (req, res) => {
    //returns all hosted by the user leagues
    res.status(200).json("All hosted leagues GET");
  }
};
