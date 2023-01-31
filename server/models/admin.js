// load mongoose since we need it to define a model
var mongoose = require("mongoose");
const { type } = require("os");

var Schema = mongoose.Schema;
mongoose.set("strictQuery", false);

adminSchema = new Schema({
  username: String,
  email: String,
  password: String,
});
module.exports = mongoose.model("admin_credential", adminSchema);
