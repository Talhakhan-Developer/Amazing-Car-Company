# Car Service Booking Website

## Overview

This project is a full-stack web application that allows users to book car services online. Built with Node.js as the backend framework, Handlebars (HBS) as the view engine, and Bootstrap for dynamic and responsive design, this application provides a seamless experience for users to book specific services on desired dates and times. The project also includes user authentication, an admin dashboard to manage bookings and user information, and a contact form for users to get in touch with the service owner.

## Features

- **Service Booking:** Users can book specific car services on a selected date and time.
- **User Authentication:** Users can register, log in, and log out securely.
- **Admin Dashboard:** Admins can view booking details and user information.
- **Contact Form:** Users can send messages or inquiries directly to the service owner.
- **Responsive Design:** The application is fully responsive, thanks to Bootstrap, ensuring it works well on all devices.

## Technologies Used

- **Backend:** Node.js, Express.js
- **View Engine:** Handlebars (HBS)
- **Frontend:** HTML, CSS, Bootstrap
- **Database:** MySQL with Sequelize ORM
- **Authentication:** JSON Web Tokens (JWT)
- **Emailing:** Nodemailer for sending emails
- **Environment Management:** dotenv for managing environment variables
- **Cookie Parsing:** cookie-parser for handling cookies

## Libraries

The following libraries and packages are used in this project:

- `"cookie-parser": "^1.4.6"` - For parsing cookies in the application.
- `"dotenv": "^16.0.1"` - For loading environment variables from a `.env` file.
- `"express": "^4.18.1"` - The web framework used for routing and middleware.
- `"hbs": "^4.2.0"` - Handlebars view engine for rendering HTML templates.
- `"jsonwebtoken": "^8.5.1"` - For creating and verifying JSON Web Tokens used in user authentication.
- `"mysql2": "^2.3.3"` - MySQL client for connecting and querying the MySQL database.
- `"nodemailer": "^6.7.5"` - For sending emails, such as contact form submissions.
- `"sequelize": "^6.20.1"` - Promise-based ORM for MySQL, handling data models and queries.
- `"sequelize-cli": "^6.4.1"` - CLI tool for Sequelize to manage migrations and models.

## 💻 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v14 or higher)
- MySQL Database

### Installation

#### 01. Clone the repo:

```bash
git clone https://github.com/yourusername/car-service-booking.git
```

#### 02 Navigate to the project directory:

```
cd Amazing-Car-Company
```
#### 03. Install dependencies:

```npm
npm install
```
#### 04. Create a `.env` file:

```
PORT=3000
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret
EMAIL_HOST=your_email_smtp_host
EMAIL_PORT=your_email_smtp_port
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
```

#### 05. Set up the database:

```
npx sequelize-cli db:migrate
```

### 06. Run the application:

```
Node server
```

#### 05. Open your web browser and navigate to:

```
http://localhost:4000
```

## Usage:
- **User Registration:** Sign up to create an account.
- **Login:** Log in using your credentials.
- **Book a Service:** Select a service, date, and time to book.
- **Admin Dashboard:** Admin users can view all bookings and user details.
- **Contact Form:** Submit inquiries or messages via the contact form.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to contribute to the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- Facebook-[Talha khan](https://www.facebook.com/iamTalhaKhn/)
- Instagram-[Talha khan](https://www.instagram.com/i_am_talhakhan/)
- Linkedin-[Talha khan](https://linkedin.com/in/imtalhakhan)
- Github - [Talha Khan](https://github.com/Talhakhan-Developer)
- Frontend Mentor - [@Talhakhan-Developer](https://www.frontendmentor.io/profile/Talhakhan-Developer)
- Twitter - [@i_am_Talhakhan](https://twitter.com/i_am_Talhakhan)

