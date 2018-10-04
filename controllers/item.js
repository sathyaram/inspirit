const { Item } = require("../models/Item");
const { Category } = require("../models/Category");

module.exports = {
  create: (req, res) => {
    console.log(req.body);
    Category.findOne({ name: req.body.category }).then(cat => {
      if (cat === null) {
        Category.create({ name: req.body.category }).then(catitem => {
          Item.create(req.body)
            .then(item => res.status(200).json({ item: item }))
            .catch(err => {
              console.log(err);
              res
                .status(500)
                .json({})
                .end();
            });
        });
      } else {
        Item.create(req.body)
          .then(item => res.status(200).json({ item: item }))
          .catch(err => {
            console.log(err);
            res
              .status(500)
              .json({})
              .end();
          });
      }
    });
  },
  update: (req, res) => {
    console.log(req.body);
    Item.findOneAndUpdate({ _id: req.params.id }, req.body).then(item => {
      res.json({});
    });
  },
  delete: (req, res) => {
    Item.findOneAndDelete({ _id: req.params.id }).then(item => {
      res.status(200).end();
    });
  }
};
