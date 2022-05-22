const express = require('express');
const router = express.Router();

router.get('/add-product', (req,res,next)=> {
    res.send(

        `
        <html>
         <head> <title> this is product page </title> </head>
         <body>
            <form action ="admin/add-product" method="POST">

            <input type= "text" name="productName">
            <input type="submit" value="Save Product" >

            </form>
         </body>
        </html>
        
        `
    )
})

router.post('/admin/add-product', (req,res,next) => {
    console.log(req.body);
    res.redirect("/");
})

module.exports = router;