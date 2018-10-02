// Path: /item - Method: POST - Action: #create - Desc: Create new item in DB
const router = require('express').Router();
const { Item } = require('../models/Item');

router.post('/item', (req, res) => {
    console.log(req.body)
    const parsedTags = req.body.tags.split(",");
    const parsedItem = {
        title: req.body.title,
        link: req.body.link,
        tags: parsedTags,
        description: req.body.description,
        color: req.body.color
    }
    Item.create(parsedItem).then(item => res.json({ ok: true }))
    .catch(err => res.json({ ok: false }))
})

module.exports = router;
