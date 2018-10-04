const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const Item = new Schema({
    title: String,
    link: String,
    category: String,
    description: String,
    color: String,
})

module.exports = {
    Item: mongoose.model("Item", Item)
}