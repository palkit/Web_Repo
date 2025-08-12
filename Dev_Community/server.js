const express = require("express");
const dotenv = require("dotenv");
// const mongoose = require("mongoose");
const serverStarted = require("./utils/database.js");
// const { registerUser, loginUser } = require("./controllers/userController.js");
// const {addProfileDetails, updateProfileDetails} = require("./controllers/profileController.js");
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require("./routes/profileRoutes.js");

const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 5566;

const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;

app.get("/", (req, res) => {
  res.send({message: "Dashboard"});
})

app.use("/api/user", userRoutes, profileRoutes);

serverStarted().then(() => {
  app.listen(PORT, () => {
    console.log(`Your server is running on ${PORT}`);
  });
}).catch((err) => {
  console.error("Failed to start server due to DB connection error:", err);
});

