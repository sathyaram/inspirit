const router = require('express').Router();
const groupController = require('../controllers/group')
const { Item } = require('../models/Item')
const { Group } = require("../models/Group")

router.post('/group', groupController.create);
router.delete('/group/:id', groupController.delete);
router.put('/group/:id', groupController.update);

module.exports = router;