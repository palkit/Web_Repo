const jwt = require("jsonwebtoken");
const userExist = require("../controllers/userController.js");


const token = jwt.sign(
   {id:userExist._id},
   process.env.SECRET_KEY, {expiresIn : '1h'}
)

module.exports = token
