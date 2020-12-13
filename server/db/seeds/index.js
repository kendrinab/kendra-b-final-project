if (process.env.NODE_ENV !== 'production') require('dotenv').config();

require('../config/index');

const Post = require('../models/post'),
  User = require('../models/user'),
  faker = require('faker'),
  mongoose = require('mongoose');

const dbReset = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }

  await User.countDocuments({}, function (err, count) {
    console.log('Number of users:', count);
  });
  // await Post.countDocuments({}, function (err, count) {
  //   console.log('Number of posts:', count);
  // });
  const userIdArray = [];

  /* ==============
          USER
      ===============*/
  for (let i = 0; i < 100; i++) {
    const me = new User({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      password: faker.internet.password(),
      avatar: faker.image.avatar()
    });
    await me.generateAuthToken();
    userIdArray.push(me._id);
  }
  // for (let i = 0; i < 100; i++) {
  //   const me = new Post({
  //     description: faker.lorem.paragraph(),
  //     owner: userIdArray[Math.floor(Math.random() * userIdArray.length)],
  //     avatar: faker.image.avatar()
  //   });
  //   await User.countDocuments({}, function (err, count) {
  //     console.log('Number of users:', count);
  //   });
};
dbReset();
