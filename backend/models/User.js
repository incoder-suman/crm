const mongoose = require ('mongoose');
const { type } = require('os');


const UserSchema = new mongoose.Schema({
    name : String,
    email: {type: String, unique: true },
    password: String,
    role: { type: String, enum: ['admin','sales', 'team'], default: 'team'},
});

module.exports = mongoose.model('user',UserSchema);