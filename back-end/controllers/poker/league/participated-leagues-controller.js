module.exports = {
  getParticipatedLeagues: (req, res) => {
    //return all leagues that the user is participating in
    res.status(200).json("Participated leagues GET");
  }
};
