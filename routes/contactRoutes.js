const express = require("express");

const contactController = require("../controllers/contactController.js");

const router = express.Router();

router
  .route("/contact")
  .post(contactController)
  .get((req, res) => {
    res.render("contact");
  });

module.exports = router;
