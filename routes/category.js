const router = require('express').Router();
const categoryController = require('../controllers/category')

router.delete('/category/:name', categoryController.delete);

module.exports = router;