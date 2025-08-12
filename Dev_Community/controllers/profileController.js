const PROFILE = require("../models/profileModel.js");

const addProfileDetails = async (req, res) => {
  const {profileImg, experience, githubProfile, linkedinProfile, codingPlatform, skills, location, achievements } = req.body;
  
  // validate data
  if(!profileImg || !experience || !githubProfile || !linkedinProfile || !codingPlatform || !skills || !location || !achievements) {
    return res.status(500).json({message: "All fields are required!"});
  }
  try{
    const newProfile = await  PROFILE.create({
      profileImg,
      experience,
      githubProfile,
      linkedinProfile,
      codingPlatform,
      skills,
      location,
      achievements
    })
    return res.status(201).json({profile: newProfile});
  }
  catch(err) {
    return res.status(500).json({message : "Profile not created"});
  }
}

const getProfileDetails = async(req, res) => {
  try {
    const data = await PROFILE.findOne({});
    return res.status(200).json({data});
  } catch (error) {
    return res.status(500).json({message:"profile not found"});
  }  
}

const updateProfileDetails = async (req, res) => {
  
}

module.exports = {getProfileDetails, addProfileDetails, updateProfileDetails};
