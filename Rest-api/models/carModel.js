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
    likedList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model("Car", schema);
