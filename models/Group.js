const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const Group = new Schema({
    name: String,
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Item"
      }
    ]
})

module.exports = {
  Group: mongoose.model("Group", Group)
}