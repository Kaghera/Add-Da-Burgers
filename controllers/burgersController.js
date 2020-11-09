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
// Index Page 
// router.get('/index', function (req, res) 
// {
//   burger.selectAll(function(data) 
//   {
//     var hbsObject = { burgers: data };
//     //console.log(hbsObject);
//     res.render('index', hbsObject);
//   });
// });

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

// var express = require('express');
// var router = express.Router();
// var burger = require('../models/burgerModel');


// //Setup Routes

// // Index Redirect
// router.get('/', function (req, res) 
// {
//   res.redirect('/index');
// });
// // router.get("/", function(req, res) {
// //     burger.selectAll((data) => {
// //       handlebarsObject = {
// //         burger: data
// //       };
// //       res.render("index", handlebarsObject);
// //     });
// // Index Page 
// router.get('/index', function (req, res) 
// {
//   burger.selectAll(function(data) 
//   {
//     var hbsObject = { burgers: data };
//     //console.log(hbsObject);
//     res.render('index', hbsObject);
//   });
// });

// // Create a New Burger
// router.post('/api/burger', function (req, res) 
// {
//   burger.insertOne(req.body.burger_name, function() 
//   {
//     res.redirect('/index');
//   });
// });

// // // POST Route
// // router.post("/api/burger", function(req, res) {
// //   burger.insertOne(["burger_name","devoured"], [req.body["burger_name"], req.body.devoured], (result)=>{
// //     console.log(result);
// //     res.json(result);
// //   });
// // });
// // Devour a Burger
// router.post('api/burger/:id', function (req, res) 
// {
//   burger.updateOne(req.params.id, function() 
//   {
//     res.redirect('/index');
//   });
// });

// // router.put("/api/burger/:id", function(req, res) {

// // Export routes
// module.exports = router;
