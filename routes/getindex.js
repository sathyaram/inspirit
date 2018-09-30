// Path: / - Method: GET - Action: #index - Desc: Shows All Grid Items
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index');
})

module.exports = router;