var express = require("express");
var mongoose = require("mongoose");
mongoose.set("strictQuery", false);
var app = express();
const path = require("path");
var bodyParser = require("body-parser");
var db = require("./methods/dbConnection");
var router = require("./routes/adminLoginRoute");
const cors = require("cors");

app.use(cors());

var port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: "true" })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: "application/vnd.api+json" })); // parse application/vnd.api+json as json
app.use(express.json());

async function main() {
  await db.initialize();
  app.use("/admin", router);
}
main();

app.listen(port, () => {
  console.log("App Listening On Port : " + port);
});
