require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/User.js');

const generateToken = (id, username) => {
    return jwt.sign({id, username},
         process.env.secret, 
         {expiresIn: "24h"})
}

class userController {
    async login(req, res){
        try {
            const{username, password} = req.body;
            const user = await User.findOne({username});
            if(!user) res.status(400).json({message: `User with this username ${username} not found`});
            const validPass = bcrypt.compareSync(password, user.password);
            if(!validPass) res.status(400).json({message: `Inccorect Password`});
            const token = generateToken(user._id, user.username);
            return res.json({token})
        } catch (error) {
            console.log(error);
            return res.status(400).json({message: 'Login error'});
        }
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