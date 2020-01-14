module.exports = {
  getLeague: (req, res) => {
    res.status(200).json("Get league details GET");
  },
  createLeague: (req, res) => {
    res.status(200).json("Create league POST");
  },
  deleteLeague: (req, res) => {
    res.status(200).json("Delete league DELETE");
  },
  editLeague: (req, res) => {
    res.status(200).json("Edit league PUT");
  }
};
