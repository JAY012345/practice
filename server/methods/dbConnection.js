var express = require("express");
var app = express();
require("dotenv").config();
var mongoose = require("mongoose");
const { Result } = require("express-validator");
const bcrypt = require("bcrypt");

function initialize() {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose
    .connect(process.env.URL, connectionParams)
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((e) => {
      console.log("Error: ", e);
    });
}

module.exports = { initialize };
