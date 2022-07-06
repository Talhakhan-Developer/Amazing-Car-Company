const express = require( "express")
const {createBooking,getBookings } = require( "../controllers/bookingController.js")
const isAuthenticated = require("../middlewares/auth.js")

const router = express.Router()

router.route("/booking/create").post(createBooking)
router.get("/dashboard", isAuthenticated, getBookings)

module.exports = router