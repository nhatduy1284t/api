const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Photo = new Schema(
  {
    albumId: { type: String },
    id: { type: Number },
    title: { type: String },
    url: { type: String },
  },
  { collection: 'photo' }
);


module.exports = mongoose.model('Photo', Photo);
