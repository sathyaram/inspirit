const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const Category = new Schema({
    name: String,
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Item"
      }
    ]
})

module.exports = {
  Category: mongoose.model("Category", Category)
}