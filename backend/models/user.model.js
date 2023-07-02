const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },

    dateOfBirth: {
        type: Date,
        required: true
    },

    dni:{
        type: Number,
        required: true
    },

    nacionality:{
        type: String,
        required: true
    },
    
    adress:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    user:{
        type: String,
        required: true
    },

    password: {
        type: String, 
        required: true
    }, 
})

module.exports = model("User", userSchema)