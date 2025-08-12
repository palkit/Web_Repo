const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  profileImg : {
    type:String,
    required : true
  },
  experience : {
    type:String,
    required:true
  },
  githubProfile : {
    type : String,
    required : true
  },
  linkedinProfile : {
    type: String,
    required:true
  },
  codingPlatform : {
    type:[String],
    required : true
  },
  skills : {
    type : [String],
    required : true
  },
  location : {
    type:String,
    required:true
  },
  achievements : {
    type:String, 
    required:true
  }
}, {timestamps : true} );

const profileModel = mongoose.model("Profile", profileSchema);

module.exports = profileModel;
