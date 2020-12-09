const User = require('../db/models/User'),
  cloudinary = require('cloudinary').v2,
  {
    sendWelcomeEmail,
    sendCancellationEmail,
    forgotPasswordEmail
  } = require('../');

// exports.createUser = async (req, res) => {
//   const { name, email, password } req.body;
//   try {
//     const {name}
//   }
// }
