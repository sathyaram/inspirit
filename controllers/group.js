const { Item } = require("../models/Item");
const { Group } = require("../models/Group")

module.exports = {
  create: (req, res) => {
    console.log(req.body);
    
  },
  update: (req, res) => {
      console.log(req.body);
      
  },
  delete: (req, res) => {
    Item.findOneAndDelete({ _id: req.params.id }).then(item => {
        res.status(200).end();
    });
  }
};