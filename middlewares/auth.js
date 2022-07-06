const { User } = require("../models");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).redirect('/login');
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findByPk(decoded.id);

    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// TODO: change name
exports.dblksbl = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).redirect('/login');
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findByPk(decoded.id);

    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
