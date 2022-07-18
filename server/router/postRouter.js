const {Router} = require('express');
const postController = require('../controller/postController');

const postRouter = new Router();

postRouter.get('/', postController.getAll);
postRouter.post('/', postController.create);

module.exports = postRouter;
