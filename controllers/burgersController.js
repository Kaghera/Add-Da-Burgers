const express = require("express");
const router = express.Router(); 

// Import burger.js
const burger = require("../models/burgerModel.js");

router.get('/', function (req, res) 
{
  res.redirect('/index');
});
router.get("/index", function(req, res) {
    burger.selectAll((data) => {
      handlebarsObject = {
        burger: data
      };
      res.render('index', handlebarsObject);
    });


});

// POST Route
router.post("/api/burger", function(req, res) {
  burger.insertOne(["burger_name","devoured"], [req.body["burger_name"], req.body.devoured], (result)=>{
    console.log(result);
    res.json(result);
    //res.redirect('/index');
  });
});

router.put("/api/burger/:id", function(req, res) {

  let burgerID = req.params.id
  let condition = "id = " + burgerID ;

  burger.updateOne(["devoured"], [req.body.devoured], condition, (result)=>{
    res.json(result);
    //res.redirect('/index');
  });
});

module.exports = router;

