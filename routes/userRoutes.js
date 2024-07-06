const express = require("express");
const { createNewContact } = require("../controllers/userControllers");
const router = express.Router();

//user route
router.route("/newContact").post(createNewContact);

module.exports = router;
