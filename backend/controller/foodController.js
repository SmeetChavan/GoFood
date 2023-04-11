const {FoodItems} = require('../models/foodModel');
const {FoodCategory} = require('../models/foodCategoryModel');
const {Orders} = require('../models/ordersModel');

// const mongoose = require('mongoose');


// get All
const getAllFoodItems = async (req , res) => {

    try{
        const items = await FoodItems.find({}).sort({createdAt : -1});
        res.status(200).json(items);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

const getAllFoodCategory = async (req , res) => {

    try{
        const items = await FoodCategory.find({});
        res.status(200).json(items);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

const checkout = async (req , res) => {

    let {email , data , total} = req.body;

    await data.splice(0 , 0 , {date : new Date().toLocaleString()});

    try{
        const order = await Orders.findOne({'email' : email});

        if(order === null){

            try{
                const order1 = await Orders.create({email: email , order_data: [data] , total: total});
    
                res.status(200).json({created : true});
            }
            catch(error){
                res.json({error: error.message});
            }
        }
        else{

            try{
                const order2 = await Orders.findOneAndUpdate({email: email} , {$push : {order_data:data} , $inc : {total : total}});
                res.status(200).json({updated : true});
            }
            catch(error){
                res.json({error: error.message});
            }
        }

    }
    catch(error){
        res.json({error : error.message});
    }
}

const myorders = async (req , res) => {

    const {email} = req.body;

    try{

        const allorders = await Orders.findOne({email: email});
        res.status(200).json({allorders : allorders});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

// // get single
// const getAFood = async (req , res) => {

//     const {id} = req.params;

//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(400).json("Invalid ID");
//     }

//     const item = await FoodItems.findById(id);

//     if(!item){
//         return res.status(404).json({error: "Not found"});
//     }

//     res.status(200).json(item);
// }

// // Post
// const postFood = async (req , res) => {

//     const {name , price} = req.body;

//     try{
//         const foodItem = await FoodItems.create({name , price});
//         res.status(200).json(foodItem);
//     }
//     catch(error){
//         res.status(400).json({error: error.message});
//     }
// }


// // Delete
// const deleteFood = async (req , res) => {

//     const {id} = req.params;

//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(400).json({error: "Invalid ID"});
//     }

//     const item = await FoodItems.findByIdAndDelete(id);
//     if(!item){
//         res.status(404).json({error: "Not found"});
//     }

//     res.status(200).send("Deleted");
// }

// // Update Food

// const updateFood = async (req , res) => {

//     const {name , price} = req.body;

//     const {id} = req.params;
//     if(!mongoose.Types.ObjectId.isValid(id)){
//         res.status(400).json({error: "Invalid ID"});
//     }

//     const item = await FoodItems.findByIdAndUpdate(id , {...req.body});
//     if(!item){
//         res.status(400).json({error: "Error occured"});
//     }

//     res.status(200).send("Updated");
// }

// module.exports = {getAllFoodItems , postFood , getAFood , deleteFood , updateFood};
module.exports = {getAllFoodItems , getAllFoodCategory , checkout , myorders};