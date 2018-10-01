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
        color: "#4ab19a"
    },
    {
        title: "Jenny Johannesson",
        link: "http://www.jennyjohannesson.com/",
        tags: ["product", "designer", "minecraft"],
        description: "a digital builder",
        user: "sathyaram",
        color: "#ff086c"
    },
    {
        title: "Tobias Anhlin",
        link: "http://tobiasanhlin.com",
        tags: ["product", "designer", "minecraft"],
        description: "a digital builder",
        user: "sathyaram",
        color: "#1f4954"
    }
    ]
    res.render('index', { items });
})

module.exports = router;