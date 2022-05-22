const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');


app.use(bodyParser.urlencoded({ extended:false }));

//routes
app.use('/admin',adminRoutes);
// baştaki admin ile routes kısmında her endpointin başına /admin eklemek zorunda kalmıyorum. ör: /admin/add-product
app.use(userRoutes);


// app.get('/', (req,res) => {
//     res.send('Home page goruntulendi');
// })

// app.get('/api/product', (req,res) => {
//     res.send('Product page goruntulendi');
// })
//////////////////////////////////
// app.use((req,res,next) => {
//     console.log('middleware 1 calistirildi.')
//     next();
// })

// app.use((req,res,next) => {
//     console.log('middleware 2 calistirildi.');
//     res.send(`<h1> Hello From Express </h1>`) 
//     // send metodu sayesinde expresste geriye dönüş aldığımızdan middleware sonuç dönüyor.
// })
////////////////////////////////////


// app.use('/add-product',(req,res,next) => {
//     res.send(`<h1> Urun ekleme calistirildi </h1>`) 
// })

// app.use('/',(req,res,next) => {
//     res.send(`<h1> Anasayfa calistirildi </h1>`) 
//     // send metodu sayesinde expresste geriye dönüş aldığımızdan middleware sonuç dönüyor.
// })

////////////////////////////////////

app.listen(3000, () => {
    console.log('Sunucu 3000 portunu dinlemekte.');
})