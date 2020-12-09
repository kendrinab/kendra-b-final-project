const sgMail = require('@sendgrid/mail');
const SENGRID_API_KEY = process.env.SENGRID_API_KEY;

sgMail / setApiKey(SENGRID_API_KEY);

(exports.sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject:
      'Thank you for signing up! Please check email for your confirmation.',
    text: `Hi ${name} ! Welcome to your Blog account.`
  });
}),
  (exports.sendCancellationEmail = (email, name) => {
    sgMail.send({
      to: email,
      from: `${process.env.FROM_EMAIL}`,
      subject: 'Oh no! We are sad to to see you go...',
      text: `Bye ${name}.. We hope to see you again!`
    });
  });

exports.forgotPasswordEmail = (email, token) => {
  const exampleHTMLEmail = `<a target="_blank" rel="noopener no referrer" href="${process.env.SERVER_URL}/api/password/${token}">Password Reset</a>`;
  sgMail.send({
    to: email,
    from: process.env.FROM_EMAIL,
    subject: 'Password Reset',
    html: exampleHTMLEmail
  });
};
