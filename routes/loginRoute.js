const express = require("express");
const {loginController, logoutController} = require("../controllers/loginController.js");

const router = express.Router();

router
  .route("/login").post(loginController)

router.get( (req, res) => {
  res.render("login")
})

router.post("/logout", logoutController)
module.exports = router;
