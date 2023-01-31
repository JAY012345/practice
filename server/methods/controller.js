const adminDb = require("../models/admin");

function showAdminDetails(req, res) {
  adminDb.find(
    { username: req.body.username.user },
    async function (err, result) {
      if (result.length == 0) {
        console.log("No user");
      } else {
        if ((await req.body.password.pass) == result[0].password) {
          console.log("logged In!");
        } else {
          console.log("Wrong password");
        }
      }
    }
  );
}
module.exports = { showAdminDetails };
