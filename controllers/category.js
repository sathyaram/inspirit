const { Item } = require("../models/Item");
const { Category } = require("../models/Category")

module.exports = {
  create: (req, res) => {
    console.log(req.body);
    
  },
  update: (req, res) => {
      console.log(req.body);
      
  },
  delete: (req, res) => {
    Category.findOneAndDelete({ name: req.params.name }).then(item => {
      Item.updateMany({ category: req.params.name }, { $set: { category: "" } } ).then(result => {  
        res.json({}).status(200);
      })
    });
  }
};