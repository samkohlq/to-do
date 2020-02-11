var express = require("express");
// instance of an express router
var router = express.Router();

/* GET home page. */
// if a path is matched through a GET method, execute the function
router.get("/", function(req, res, next) {
  // render index page
  res.render("index", { title: "Express" });
});

module.exports = router;
