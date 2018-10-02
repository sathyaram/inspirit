const { Item } = require("../models/Item");
const User = require("../models/User");

module.exports = {
  create: (req, res) => {
    console.log(req.body);
    const parsedTags = req.body.tags.split(",");
    const parsedItem = {
      title: req.body.title,
      link: req.body.link,
      tags: parsedTags,
      description: req.body.description,
      color: req.body.color
    };
    Item.create(parsedItem)
      .then(item => res.status(200).json({ item: item }))
      .catch(err => res.status(500).end());
  },
  update: (req, res) => {},
  delete: (req, res) => {
    Item.findOneAndDelete({ _id: req.params.id }).then(item => {
        console.log(item, true);
        res.status(200).end();
    });
  }
};
