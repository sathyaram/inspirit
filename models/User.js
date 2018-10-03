const mongoose = require('../db/connection')
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

module.exports = mongoose.model("User", User);