module.exports = {
  createEvent: (req, res) => {
    //create new event
    res.status(200).json("Create event POST");
  },
  availableEvents: (req, res) => {
    //get all available for join events
    res.status(200).json("Available events GET");
  },
  editEvent: (req, res) => {
    //edit the details of an event
    res.status(200).json("Edit event PUT");
  },
  deleteEvent: (req, res) => {
    //delete an event
    res.status(200).json("Delete event DELETE");
  },
  enterResults: (req, res) => {
    //enter results from an event
    res.status(200).json("Enter resuts PUT");
  },
  editResults: (req, res) => {
    //edit results from an event. Only the admin of the league can do that
    res.status(200).json("Edit results PUT");
  }
};
