const { Booking } = require("../models");

exports.createBooking = async (req, res) => {
  try {
    const { name, email, service, description, appointmentDate } = req.body;

    if (!name || !email || !service || !appointmentDate) {
      return res.status(400).json({
        success: false,
        message: "Fields Required",
      });
    }

    const data = await Booking.create({
      name,
      email,
      service,
      description,
      appointmentDate,
    });

    res.status(201).redirect("/")
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookingData = await Booking.findAll();

    res.render("dashboard", { bookingData });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};
