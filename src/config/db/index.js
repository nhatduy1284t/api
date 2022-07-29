const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log('Connect database successfully');
  } catch (error) {
    console.log(error);
    console.log('Connection failed!');
  }
}

module.exports = { connect };
