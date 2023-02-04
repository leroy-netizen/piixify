import mongoose from "mongoose";

constUserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 2,
    max: 50,
    },
    lastName: {
        
    }
});
