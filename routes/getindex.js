// Path: / - Method: GET - Action: #index - Desc: Shows All Grid Items
const router = require('express').Router();

router.get('/', (req, res) => {
    // Items need to come from database
    let items = [
    {
        title: "Sean Halpin",
        link: "http://seanhalpin.io",
        tags: ["web", "design", "sexy"],
        description: "A nice portfolio",
        user: "sathyaram",
        color: "lightgreen"
    },
    {
        title: "Tobias Anhlin",
        link: "http://tobiasanhlin.com",
        tags: ["product", "designer", "minecraft"],
        description: "a digital builder",
        user: "sathyaram",
        color: "orchid"
    },
    {
        title: "Tobias Anhlin",
        link: "http://tobiasanhlin.com",
        tags: ["product", "designer", "minecraft"],
        description: "a digital builder",
        user: "sathyaram",
        color: "coral"
    }
    ]
    res.render('index', { items });
})

module.exports = router;