const router = require('express').Router();
const categoryController = require('../controllers/category')
const { Item } = require('../models/Item')
const { Category } = require("../models/Category")

router.delete('/category/:name', categoryController.delete);

module.exports = router;