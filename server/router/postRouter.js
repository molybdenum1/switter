const {Router} = require('express');
const postController = require('../controller/postController');

const postRouter = new Router();

postRouter.get('/', postController.getAll);
postRouter.put('/', postController.update);
postRouter.post('/', postController.create);
postRouter.delete('/:id', postController.delete);

module.exports = postRouter;
