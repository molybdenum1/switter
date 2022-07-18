 const Post = require('../model/Post.js');

 class PostController {
     async getAll(req, res) {
         try {
            const posts = await Post.find();
            return res.json(posts);
         } catch (error) {
            res.status(500).json(error); 
         }
  
      };
     async create(req, res) {
         try {
             const {author, title, content} = req.body;
             const post = await Post.create({author, title, content})
             return res.json(post);
         } catch (error) {
            res.status(500).json(error); 
         }
     };
 };

 module.exports = new PostController();