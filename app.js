const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//database
const { connectDatabase } = require("./config/db");
connectDatabase();
//routes
const user = require("./routes/userRoutes");
const admin = require("./routes/adminRoutes");
app.use("/api/v1", user);
app.use("/api/v1", admin);

module.exports = app;
