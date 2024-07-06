const { Contact, User } = require("../config/db");
const emailTemplate = require("../helpers/emailTemplate");
const { main } = require("../helpers/nodeMailer");
const validateContact = require("../middlewares/authMiddleware");

// User controller to raise a new contact request
exports.createNewContact = async (req, res) => {
  const { error } = validateContact.validate(req.body);

  if (error) {
    // If input is invalid, return without saving
    return res
      .status(400)
      .json({ error: "Bad Request", message: error.details[0].message });
  }

  try {
    // Check if the user exists based on email
    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      // If user does not exist, create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
      });
    }

    // Create the new contact
    await Contact.create({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      topic: req.body.topic,
      message: req.body.message,
      user: user._id, // Link to the user object ID
    });
    const html = emailTemplate(req.body.name, req.body.topic);
    main(req.body.email, "Thanks For Contacting TO LET GLOBE", html);
    // Send success response
    return res.status(200).json({ message: "Contact created successfully" });
  } catch (error) {
    // If error occurs
    console.error("Error creating contact:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: "Failed to create contact",
    });
  }
};
