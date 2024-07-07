const express = require("express");
const {
  getAllContacts,
  updateStatus,
  getAllUsers,
} = require("../controllers/adminControllers");
const router = express.Router();

//admin routes

//get all contacts
router.route("/admin/Contacts").get(getAllContacts);
router.route("/admin/update").put(updateStatus);

//get all users
router.route("/admin/Users").get(getAllUsers);

module.exports = router;
