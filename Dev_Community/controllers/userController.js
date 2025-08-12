const USER = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const dotenv = require("dotenv");
const token = require("../utils/generateToken.js");


dotenv.config();

const registerUser = async  (req, res) => {
  const {first_name, last_name, email, password} = req.body;

  if(!first_name || !last_name || !email || !password) {
    return res.status(400).json({message: "Please add all fields"});
  }
  const userExists = await USER.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "Already Exist" });
    }
  try {
    const newUser = await USER.create({
      first_name,
      last_name,
      email,
      password : await bcrypt.hash(password, 10)
    });
    return res.status(201).json({message : "User created successfully", user: newUser});
  }
  catch(error){
    return res.status(500).json({message : "User not created"});
  }
}

const loginUser = async(req, res) => {
  const {email, password} = req.body;

  // validation
  if(!email || !password) {
    return res.status(400).json({message : "Please fill all the details"});
  }
  const userExist = await USER.findOne({email});

  if(!userExist) res.status(400).json({message : "user not found"});
  try {
  const hash = userExist.password;
  const match = await bcrypt.compare(password, hash);

  if(!match) return res.status(401).json({message : "password is wrong"});

  console.log(userExist);
  return res.status(200).json({first_name : userExist.first_name,email : userExist.email,  token});
  }
  catch(err) {
    return res.status(500).json({err : err.message});
  }

}
module.exports = {registerUser, loginUser};
