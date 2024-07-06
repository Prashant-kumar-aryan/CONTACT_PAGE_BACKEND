const express = require("express");
const { getAllContacts } = require("../controllers/adminControllers");
const router = express.Router();

//admin routes

//get all contacts
router.route("/admin/Contacts").get(getAllContacts);

//get all users
router.route("/admin/Users").get(getAllContacts);

module.exports = router;
