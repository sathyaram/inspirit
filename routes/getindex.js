// Path: / - Method: GET - Action: #index - Desc: Shows All Grid Items
const router = require('express').Router();
const { Item } = require('../models/Item')

router.get('/', (req, res) => {
    Item.find().then(items => res.render('index', { items }));
})

module.exports = router;