const express = require('express');
const router = express.Router();

const products = [
    {name: 'samsung S21',price: '9700', image: 'samsung-s21.webp', description: 'Samsung'},
    {name: 'Iphone 13', price: '15500', image: 'iphone13.jpg', description: 'Apple'},
    {name: 'Iphone 12', price: '12800', image: 'iphone12.jpeg', description: 'Apple'},
    {name: 'Xiaomi 12', price: '13300', image: 'xiaomi-12.jpg', description: 'Xiaomi'},
]

// /admin/add-product=> GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {title: 'Add Product'});
});

// /admin/add-product=> POST
router.post('/add-product', (req, res, next) => {
    // database kayıt
    console.log(req.body);
    products.push({name: req.body.name, price: req.body.price, image: req.body.image, 
        description: req.body.description})
    res.redirect('/');
});

module.exports.routes = router;
module.exports.products = products;