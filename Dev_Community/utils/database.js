// server logic
const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();

const serverStarted = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL).then(() => console.log(`DB connected : ${process.env.DATABASE_NAME}`));

  } catch (error) {
    console.log("db not connected");
  }
}

serverStarted();

module.exports =  serverStarted 
