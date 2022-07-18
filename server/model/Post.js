const {Schema, model} = require('mongoose');

const Post = new Schema({
    author: {type: String, required: true},
    title: {type: String, require: true},
    content: {type: String, require: true},
});

module.exports = model('Post', Post);