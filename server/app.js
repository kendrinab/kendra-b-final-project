const fileUpload = require('express-fileupload');
const passport = require('passport');

require('./db/config/index');
const express = require('express'),
  app = express(),
  openRoutes = require('./routes/open/index'),
  userRouter = require('./routes/secure/users'),
  postRouter = require('./routes/secure/posts'),
  passport = require('./middleware/authentication/index'),
  fileUpload = require('express-fileupload'),
  cookieParser = require('cookie-parser');
path = require('path');

//Middleware
app.use(express.json());

// Unauthenticated routes
app.use('/api', openRoutes);

//Middleware to parse through incoming cookies in the requests.
app.use(cookieParser());

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/images'
  })
);

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

//ALL AUTHENTICATED ROUTES

app.use('/api/posts', postRouter);
app.use('/api/users', userRouter);

app.use('/api/*', passport.authenticate('jwt', { session: false }));
app.use;

module.exports = app;
