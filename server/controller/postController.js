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

     async update(req, res) {
        try {
           const post = req.body;
           const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true});
           return res.json(updatedPost);
        } catch (error) {
         res.status(500).json(error);
        }
     }

     async delete(req, res) {
        try {
            const {id} = req.params;
            const post = await Post.findByIdAndDelete(id);
            return res.json(post);
        } catch (error) {
           res.status(500).json(error); 
        }
    };
 };

 module.exports = new PostController();