const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodCategorySchema = new Schema({
    name:{
        type: String,
        required: true,
    }
} , {timestamps: true});

const FoodCategory = mongoose.model("Food_Category" , foodCategorySchema);

module.exports = {FoodCategory};