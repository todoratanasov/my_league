module.exports = {
  get: (req, res) => {
    res.send("Test, home, get!");
  },
  getXx: (req, res) => {
    res.status(200).send("XX works");
  }
};
