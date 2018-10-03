const router = require("express").Router();
const itemController = require("../controllers/item");
const { Item } = require("../models/Item");
const { Category } = require("../models/Category");

router.post("/item", itemController.create);
router.delete("/item/:id", itemController.delete);
router.put("/item/:id", itemController.update);

router.get("/", (req, res) => {
  Category.find({}).then(catitems => {
    Item.find().then(items => res.render("index", { items: items.reverse(), categories: catitems }));
  });
});

module.exports = router;
