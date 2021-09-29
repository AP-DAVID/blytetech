const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
      title: {
        type: String,
        trim: true,
         required: true
      },
      desc: {
        type: String,
        trim: true,
        required: true
      },
      body: {
        type: String,
        trim: true,
        required: true
      },
      references : {
        type : String,
        trim : true
      },

      date: {
        type: Date,
        default: Date.now
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Blogs || mongoose.model("Blogs", BlogSchema);