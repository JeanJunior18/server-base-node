const mongoose = require('mongoose');

const PostagemSchema = new mongoose.Schema({
    title: {type:String},
    content: {type: String},
    createdAt:{type:Date, default: Date.now()}
})

const Postagem = mongoose.model('Postagem', PostagemSchema)