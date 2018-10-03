const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const User = new Schema({
  username: String,
  email: String,
  password: String,
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item"
    }
  ]
});

User.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

module.exports = mongoose.model("User", User);
