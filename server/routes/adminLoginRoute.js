const express = require("express");
const { send } = require("process");
const router = express.Router();
const controller = require("../methods/controller");
var app = express();

router.post("/login", (req, res) => {
  controller.showAdminDetails(req, res);
});

module.exports = router;
