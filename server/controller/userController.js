require('dotenv').config();
const bcrypt = require('bcrypt');
const { json } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../model/User.js');

class userController {
    async login(){

    };
    async reg(req, res){
        try {
            const {username, password}  = req.body;
            const candidate = await User.findOne({username});
            if(candidate) res.status(400).json({message: 'User with this usename exists'});
            let passHash = bcrypt.hashSync(password, 10);
            const user = new User({username, password: passHash});
            await user.save();
            return res.json({message:'User succsesfulle sign in'});
        } catch (error) {
            console.log(error);
            return res.status(400).json({message: 'Registration error'});
        }
    };
}

module.exports = new userController();