const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
     postdata: String,
     userid: {
         type : mongoose.Schema.Types.ObjectId,
         ref : 'usermodel',
     },
   });
   module.exports = mongoose.model("post", postSchema);