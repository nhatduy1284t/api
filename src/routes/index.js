const express = require('express');
const photoRouter = require('./photo');
const userRouter = require('./user');

function route(app) {
  app.use('/photos', photoRouter);
  app.use('/users', userRouter);

  app.use('/', (req, res) => {
    if (req.url !== '/') {
      return res.status(404).send('<h1>Page not found</h1>');
    } else {
      return res.status(200).send('Welcome to my APP');
    }
  });
}

module.exports = route;
