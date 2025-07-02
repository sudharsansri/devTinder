const mongoose =require("mongoose") ;

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String},
  age: { type: Number },
  gender:{ type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;