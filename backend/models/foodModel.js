const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({

    name : {
        type: String,
        required : true,
    },

    catname : {
        type: String,
        required : true,
    },

    price : {
        type: Number,
        required : true,
    },

    img : {
        type: String,
        required : true,
    }

} , {timestamps: true});

const FoodItems = mongoose.model("FoodItems" , foodSchema);

module.exports = {FoodItems}