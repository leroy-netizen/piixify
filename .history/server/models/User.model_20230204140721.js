import mongoose from 'mongoose'

constUserSchema = mongoose.Schema( {
    firstName: String,
    required: true,
    min: 2,
    max:5
})