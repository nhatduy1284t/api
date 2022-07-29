const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const User = Schema({
    {
        id: { type: Number },
        username: { type: String },
        password: { type: String },
    }
}, { collection: 'user' });

module.exports = mongoose.model('User',User); 
