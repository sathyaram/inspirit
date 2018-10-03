const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const Category = new Schema({
    name: String,
})

module.exports = {
  Category: mongoose.model("Category", Category)
}