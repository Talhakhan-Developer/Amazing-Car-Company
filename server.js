const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const path = require("path");
const hbs = require("hbs")

const booking = require("./routes/bookingRoutes.js");
const contact = require("./routes/contactRoutes.js");
const login = require("./routes/loginRoute.js");
const db = require("./models");

dotenv.config()
const app = express();
const staticPath = path.join(__dirname, "public")
hbs.registerPartials(__dirname + '/views/partials');

app.set("view engine", "hbs")

app.use(express.static(staticPath))
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
  res.render("index")
})
app.get("/services", (req, res) => {
  res.render("services")
})
app.get("/about", (req, res) => {
  res.render("about")
})
app.get("/about", (req, res) => {
  res.render("about")
})

app.use("/", booking);
app.use("/", contact);
app.use("/", login);

db.sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT || 4000);
  })
  .catch((err) => {
    console.log(err);
  });
