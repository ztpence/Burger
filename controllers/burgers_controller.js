// require modules
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, false],
    function() {
      res.redirect("/");
    }
  );
});

router.put("/burgers/update", function(req, res) {
  var condition = "id = " + req.body.id;
  burger.updateOne(condition, function(result) {
    res.json(result);
  });
});

module.exports = router;