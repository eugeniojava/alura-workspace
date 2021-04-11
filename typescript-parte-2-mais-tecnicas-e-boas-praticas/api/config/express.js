var express = require("express"),
  app = express(),
  routes = require("../app/routes"),
  path = require("path"),
  bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

routes(app);

module.exports = app;
