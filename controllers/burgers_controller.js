  
const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

// ROUTES:
router.get("/", (req, res) => {
    res.redirect("/burgers");
});

router.get("/burgers", (req,res) => {
    // express callback response by calling burger.selectAllBurger
    burger.select( (data) => {
        // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
        var hbsObject = { 
            burgers: data 
        };
        res.render("index", hbsObject);
    })
});

// post route -> back to index
router.post("/burgers/create", function (req, res) {
    // takes the request object using it as input for burger.addBurger
    burger.create(["burger_name"], [req.body.burger_name], function (result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
        console.log(result);
        res.redirect("/burgers");
    })
});

// put route -> back to index
router.put("/burgers/update/:id", function (req, res) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    var condition = `id = ${req.params.id}`;
    burger.update({ "devoured": req.body.devoured }, condition, function (data) {
        console.log(data);
        if(data, changedRows == 0) {
            return res.status(404).end();
        } else{
            res.status(200).end
        }
        // Send back response and let page reload from .then in Ajax
        // res.redirect("/burgers");
    })
});

router.deleteOne(condition, function(req, res){
    var condition = `id = ${req.params.id}`;
    console.log("condition", condition)
    if(data, changedRows == 0) {
        return res.status(404).end();
    } else{
        res.status(200).end
    }
    // Send back response and let page reload from .then in Ajax
    // res.redirect("/burgers");
});


module.exports = router;