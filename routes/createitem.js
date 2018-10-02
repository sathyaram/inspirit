// Path: /item - Method: POST - Action: #create - Desc: Create new item in DB
const router = require('express').Router();

router.post('/item', (req, res) => {
    res.json({
        name:"bob"
    })
    // res.render('hello world');
})

module.exports = router;
