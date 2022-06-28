const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name:{
      type : String,
      required : true,
},
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type:String,
    enum:['user','admin'],
    default:"user"
  },
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },

   country: {
     type:String,
    required: true,
  },
  imageUrl:String,
  message:{
    type:String,
    required:true
  }
});
module.exports = mongoose.model("User", userSchema);