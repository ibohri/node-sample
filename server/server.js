var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var db = require("./db");
var server = app.listen(port, function() {
  console.log("Express server listening on port " + port);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var productController = require("./controllers/productController");
app.use("/product", productController);

var categoryController = require("./controllers/cateogoryController");
app.use("/category", categoryController);

module.exports = app;
