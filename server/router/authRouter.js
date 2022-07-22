const {Router} = require('express');
const check = require('express-validator');
const userController = require('../controller/userController.js');

const authRouter = new Router();

authRouter.post('/reg',[
        check('username','Username cannot be empty').notEmpty(),
        check('password', 'Password must be longer than 4 symbols and shorter than 10').isLength({min: 4, max: 10})
    ], userController.reg);
authRouter.post('/login', userController.login);

module.exports = authRouter;