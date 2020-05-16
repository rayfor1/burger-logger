  
const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

// ROUTES:
router.get("/", (req, res) => {
    res.redirect("/burgers");
});

router.get("/burgers", (req,res) => {
    burger.select( (data) => {
        const hbsObject = { 
            burgers: data 
        };
        res.render("index", hbsObject);
    })
})

router.post("/burgers/create", function (req, res) {
    burger.create(["burger_name"], [req.body.burger_name], function (result) {
        console.log(result);
        res.redirect("/burgers");
    })
});

router.put("/burgers/update/:id", function (req, res) {
    const condition = `id = ${req.params.id}`;
    burger.update({ "devoured": req.body.devoured }, condition, function (data) {
        console.log(data);
        res.redirect("/burgers");
    })
});

module.exports = router;