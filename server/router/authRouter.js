const {Router} = require('express');
const userController = require('../controller/userController.js');

const authRouter = new Router();

authRouter.post('/reg', userController.reg);
authRouter.post('/login', userController.login);

module.exports = authRouter;