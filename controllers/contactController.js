const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  try {
    const { name, number, email, services, message } = req.body;

    let transporter = nodemailer.createTransport({
      // host: "gmail",
      // auth: {
      //   user: "amazingcarcompany@gmail.com", // generated ethereal user
      //   pass: "amazingcar", // generated ethereal password
      // },
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "5bd7b9a9f44b73",
        pass: "772fdba009ed7a"
      }
    });

    let mailOptions = {
      from: "amazingcarcompany@gmail.com",
      to: "amazingcarcompany@gmail.com",
      subject: `From ${name}`,
      text: `
      Name: ${name}
      Email: ${email}
      Service: ${services}
      Number: ${number}
      Message: ${message}
  `,
    };

    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        
        res.status(200).json({
          success: true,
          message: "Email Sent"
        })
      }
    });
    
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    })
  }
};
