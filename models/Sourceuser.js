const mongoose = require("mongoose");

const SourceSchema = new mongoose.Schema(
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

module.exports = mongoose.models.Source || mongoose.model("Source", SourceSchema);