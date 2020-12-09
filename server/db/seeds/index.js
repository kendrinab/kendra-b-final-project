if (process.env.NODE_ENV !== 'production') require('dotenv').config();

require('../config/index');

const Post = require('../models/post'),
  User = require('../models/user'),
  faker = require('faker'),
  mongoose = require('mongoose');
