const jwt = require("jsonwebtoken");

const { User } = require("../models");

exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).render("login", { error: "Both Email and Password are required" });
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).render("login", { error: "Incorrect Email or Password" });
    }

    if (password !== user.password) {
      return res.status(400).render("login", { error: "Incorrect Email or Password" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET
    );
    const options = {
      expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res
      .status(201)
      .cookie("token", token, options)
      .redirect('http://localhost:4000/dashboard')
      
  } catch (error) {
    res.status(400).render("login", { error: error.message });
  }
};

exports.logoutController = (req, res) => {
  try {

    const options = {
      expires: new Date(Date.now()),
      httpOnly: true,
    };

    res
      .status(201)
      .cookie("token", null, options)
      .redirect('http://localhost:4000/login')
  } catch (error) {
    res.status(400).render("login", { error: error.message });
  }
}