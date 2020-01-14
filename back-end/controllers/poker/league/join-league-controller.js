module.exports = {
  availableLeagues: (req, res) => {
    res.status(200).json("Available leagues GET");
  },
  joinLeague: (req, res) => {
    res.status(200).json("Join league POST");
  }
};
