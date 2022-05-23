const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/add-product', (req,res,next)=> {
    app.use('/static', express.static('public'))
})

router.post('/admin/add-product', (req,res,next) => {
    console.log(req.body);
    res.redirect("/");
})

module.exports = router;