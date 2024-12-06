const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  password: String,
  posts: [{ type : mongoose.Schema.Types.ObjectId,
        ref : 'usermodel', }],
});
module.exports = mongoose.model("user", userSchema);
