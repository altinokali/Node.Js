const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/', (req, res, next) => {

    const products = [
        {name: 'samsung S21',price: '9700', image: 'samsung-s21.webp', description: 'Samsung'},
        {name: 'Iphone 13', price: '15500', image: 'iphone13.jpg', description: 'Apple'},
        {name: 'Iphone 12', price: '12800', image: 'iphone12.jpeg', description: 'Apple'},
        {name: 'Xiaomi 12', price: '13300', image: 'xiaomi-12.jpg', description: 'Xiaomi'},
    ]

    res.render('index', { title: 'Homepage', products: products });
});

module.exports = router;

