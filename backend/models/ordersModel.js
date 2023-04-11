const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ordersSchema = new Schema({

    email:{
        type: String,
        required : true,
    },
    order_data:{
        type: Array,
        required: true,
    },
    total:{
        type: Number,
        required: true,
    },

}, {timestamps : true});

const Orders = mongoose.model("order" , ordersSchema , collection = "orders-history");

module.exports = {Orders};