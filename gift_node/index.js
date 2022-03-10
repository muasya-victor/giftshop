const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const app = express();
// const route = require('express-routes');

app.set('view engine', 'ejs');

app.use('/static', express.static('public'));

// use routing



app.get('/', (req, res)=>{
    res.render('home');
})

app.get('/login', (req, res)=>{
    res.render('login');
})

app.get('/search', (req, res)=>{
    res.render('search');
})

app.get('/products', (req, res)=>{
    res.render('products');
})

app.listen(4000,()=>{console.log('app running on port 4000');} )