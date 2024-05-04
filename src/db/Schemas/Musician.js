const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    id: Number,
    name: String,
    manager: String,
    description: String,
    available: Boolean,
    imageUrl: String
}, {
    timestamps: true
})

module.exports = model('musician', UserSchema)