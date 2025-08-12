const {addProfileDetails, updateProfileDetails} = require("../controllers/profileController.js"); 
const {authMiddleWare} = require("../middlewares/authMiddleware.js");
const express = require("express");
const router = express.Router();

router.post("/profile", authMiddleWare, addProfileDetails);
router.post("/update/profile", authMiddleWare, updateProfileDetails);

module.exports = router;
