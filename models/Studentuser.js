const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    section : {
        type : String,
        required : true,
        trim : true
    },
    
    email :{
        type : String,
        required : true,
        trim : true
    },
    phoneNumber : {
        type : String,
        required : true,
        trim : true
    },
    country: {
       type: String,
       required : true,
       trim : true
    },
    region:{
        type : String,
        required : true,
        trim : true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.models.Student || mongoose.model("Student", StudentSchema);