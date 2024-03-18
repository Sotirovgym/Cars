const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: 5
    },
    brand: {
        type: String,
        required: [true, "Brand is required"],
        minLength: 3
    },
    model: {
        type: String,
        required: [true, "Model is required"],
        minLength: 2
    },
    year: {
        type: Number,
        required: [true, "Year is required"],
        min: 1900
    },
    mileage: {
        type: Number,
        required: [true, "Mileage is required"],
        min: 0
    },
    engine: {
        type: String,
        required: [true, "Engine is required"]
    },
    region: {
        type: String,
        required: [true, "Region is required"]
    },
    image: {
        type: String,
        required: [true, "Image is required"],
        match: /^https?:\/\//
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: 10
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: 0
    },
    createdOn: {
        type: Date
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model("Car", schema);
