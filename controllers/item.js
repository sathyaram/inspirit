const { Item } = require("../models/Item");

module.exports = {
  create: (req, res) => {
    console.log(req.body);
    Item.create(req.body)
      .then(item => res.status(200).json({ item: item }))
      .catch(err => res.status(500).end());
  },
  update: (req, res) => {
      console.log(req.body);
      Item.findOneAndUpdate({ _id: req.params.id }, req.body).then(item => {
        res.json({});
      })
  },
  delete: (req, res) => {
    Item.findOneAndDelete({ _id: req.params.id }).then(item => {
        res.status(200).end();
    });
  }
};
