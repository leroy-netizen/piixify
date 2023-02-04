import mongoose from "mongoose";

constUserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
});
