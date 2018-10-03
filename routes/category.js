const router = require('express').Router();
const categoryController = require('../controllers/category')
const { Item } = require('../models/Item')
const { Category } = require("../models/Category")

router.post('/category', categoryController.create);
router.delete('/category/:id', categoryController.delete);
router.put('/category/:id', groupController.update);

module.exports = router;