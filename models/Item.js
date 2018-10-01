const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const Item = new Item({
    name: String,
    link: String,
    tags: [String],
    description: String,
    color: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
})

module.exports = {
    Item: mongoose.model("Item", Item)
}