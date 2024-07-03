const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require ("bcryptjs");

//Register a user

async function addUser (req,res) {
    newEmail = req.body.email;
    try{
    userExists = await User.findOne({email:newEmail});

    if(userExists){
        res.status(200).send({message:"User already exists"});
    }else{
        const user = new User(req.body);
        await user.save();
        res.status(201).send({message:"login successful",task:user});
    } 
}catch (error) {
        res.status(400).send(error);  
    }
    }

//Login an existing user

async function getUser(req, res) {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (!user) {
            res.status(400).send({message: "Invalid login credentials"});
        }
const isPasswordValid = await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(400).send({message:"Invalid Login Credentials"});
        }
        const token = jwt.sign({ _id: user._id},"sprouts",{expiresIn:"1d"});
        const result = {
            message: "Login successful",
            success: true,
            token: token,
            id: user._id,
            userName: user.username,
        };
        res.status(200).send(result); 
       } catch(error) {
        console.error("Error Occured:",error);
        res.status(500).send({
            message: "Internal Server Error",
            error:error.message || error,
        });
       }
}

module.exports = {
    addUser,
    getUser  
}