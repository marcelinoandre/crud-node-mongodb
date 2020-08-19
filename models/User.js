const { Schema, model} = require('mongoose')

const UserSchema = new Schema({
    email : {
        type: String,
        unique: true,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    password: String,
    created_at:{
        type: Date,
        default: Date.now
    }
})

module.exports = model('User', UserSchema)