const { Item } = require("../models/Item");
const User = require("../models/User");

function transformItem(rawItem) {
    const parsedTags = rawItem.tags.split(",");
    const parsedItem = {
      title: rawItem.title,
      link: rawItem.link,
      tags: parsedTags,
      description: rawItem.description,
      color: rawItem.color
    };
    return parsedItem;
}

module.exports = {
  create: (req, res) => {
    console.log(req.body);
    Item.create(transformItem(req.body))
      .then(item => res.status(200).json({ item: item }))
      .catch(err => res.status(500).end());
  },
  update: (req, res) => {
      console.log(req.body);
      Item.findOneAndUpdate({ _id: req.params.id }, transformItem(req.body)).then(item => {
        res.json({});
      })
  },
  delete: (req, res) => {
    Item.findOneAndDelete({ _id: req.params.id }).then(item => {
        res.status(200).end();
    });
  }
};
