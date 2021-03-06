const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.set('views', './views')

const admin = require('./routes/admin');
const userRoutes = require('./routes/user');


app.use(bodyParser.urlencoded({ extended:false }));
app.use(express.static(path.join(__dirname, 'public')));
 // image,css gibi dosyaları node.js de dışarıya açmak için kullandım.
 //https://expressjs.com/tr/starter/static-files.html
 

//routes
app.use('/admin',admin.routes);
// baştaki admin ile routes kısmında her endpointin başına /admin eklemek zorunda kalmıyorum. ör: /admin/add-product
app.use(userRoutes);

app.use((req,res) => { // Yukarıdaki routeler'da (endpointler'de) tanımlı olmayan bir endpointe

    //  istek atılırsa cannotGet yerine aşağıdaki middleware girsin ve hata mesajı yazsın.
    res.status(404).render('404', {title: 'Error Page'});
})


app.listen(3000, () => {
    console.log('Sunucu 3000 portunu dinlemekte.');
})