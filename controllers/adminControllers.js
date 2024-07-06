const { Contact, User } = require("../config/db");

//admin controller to get all contacts
exports.getAllContacts = async (req, res) => {
  try {
    const allContactDetails = await Contact.find();
    res.status(200).send(allContactDetails);
  } catch (e) {
    console.log("Something went wrong", error);
    res.status(500).send("Internal server error");
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const allContactDetails = await User.find();
    res.status(200).send(allContactDetails);
  } catch (e) {
    console.log("Something went wrong", error);
    res.status(500).send("Internal server error");
  }
};
