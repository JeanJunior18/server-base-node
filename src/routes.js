const express = require('express');


const router = express.Router();
/*
const Product = require('./controllers/ProductController');
router.get('/products', Product.index);
router.get('/products/:id', Product.show);
router.post('/products', Product.store);
router.put('/products/:id', Product.update);
router.delete('/products/:id', Product.destroy);

// Blog
const Postagem = require('./controllers/PostagemController')
router.get('/posts', Postagem.ShowPostagens)
router.get('/deletepost/:id', Postagem.DelPostagem)
router.get('/newpost', Postagem.NewPostPage)
router.post('/newpost', Postagem.CreatePostagem)
router.get('/blog', Postagem.HomePage)
*/

// Site pizzaria
router.get('/',(req,res)=>{
    res.render('pizzaria/home')
})

router.get('/cardapio',(req,res)=>{
    res.render('pizzaria/cardapio')
})

router.get('/sobre',(req,res)=>{
    res.render('pizzaria/sobre')
})

router.get('/contato',(req,res)=>{
    res.render('pizzaria/contato')
})



module.exports = router