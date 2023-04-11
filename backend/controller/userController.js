const { User } = require('../models/userModel');

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// get all users
const getAllUsers = async(req , res) => {

    try{
        const users = await User.find({}).sort({createdAt: -1});
        res.status(200).json(users);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

// register
const createUser = async (req , res) => {

    // const {name , mobile , password , email} = req.body;

    const salt = await bcrypt.genSalt(10);

    let encrypted_password = await bcrypt.hash(req.body.password , salt);

    try{
        // const user = await User.create({name , mobile , password , email});
        const user = await User.create({
            name : req.body.name,
            mobile : req.body.mobile,
            email : req.body.email,
            password : encrypted_password
        });

        res.status(200).json(user);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

//Login
const authenticateLogin = async (req , res) => {

    const {email , password} = req.body;

    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({error : "Email not found"});
    }

    const check = await bcrypt.compare(password , user.password);
    if(!check){
        return res.status(400).json({error: "Incorrect password"});
    }

    const jwtSecret = "smeetisthebestthenwhylookfortherest";
    const data = {user:{id: user.id}};

    const authToken = jwt.sign(data , jwtSecret);

    // if(password !== user.password){
    //     return res.status(400).json({"error" : "Incorrect password"});
    // }

    res.status(200).json({name : user.name , email : email , authToken : authToken});
}

module.exports = {getAllUsers , createUser , authenticateLogin};