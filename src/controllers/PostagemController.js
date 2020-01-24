const mongoose = require('mongoose');
const Postagem = mongoose.model('Postagem');

module.exports = {
    async ShowPostagens(req,res){
        Postagem.find().then((postagens)=>{
            return res.render('blog/index',{postagens:postagens})
        })
    },
    async DelPostagem(req,res){
        await Postagem.findByIdAndRemove(req.params.id)
        console.log('Postagem deletada')
        return res.redirect('/posts')
    },
    async HomePage(req,res){
        return res.render('blog/home')
    },  
    async NewPostPage(req,res){
        return res.render('blog/newpost')
    },
    async CreatePostagem(req,res){
        const postagem = {
            title: req.body.titulo,
            content: req.body.conteudo
        }

        new Postagem(postagem).save().then(console.log('Postagem Adicionada'))
        
        return res.redirect('/newpost')
        
    },
}