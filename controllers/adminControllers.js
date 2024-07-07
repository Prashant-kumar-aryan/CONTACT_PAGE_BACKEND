const { Contact, User } = require("../config/db");
const { main } = require("../helpers/nodeMailer");
const updateEmailTemplate = require("../routes/updateEmailTemplate");

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

// Assuming this is in your server-side file (e.g., routes/admin.js or controllers/adminController.js)
// Import your Contact model
exports.updateStatus = async (req, res) => {
  try {
    const { id, newStatus } = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { status: newStatus },
      { new: true }
    );
    if (!updatedContact) {
      return res.status(404).send("Contact not found");
    }
    const html = updateEmailTemplate(
      updatedContact.name,
      updatedContact.topic,
      updatedContact.status
    );
    main(updatedContact.email, "Status Updated", html);
    res.status(200).json(updatedContact); // Send back the updated contact
  } catch (e) {
    console.error("Something went wrong", e);
    res.status(500).send("Internal server error");
  }
};
