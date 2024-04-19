const adminsRoutes = require('express').Router();
const productRoutes = require('./product.routes');


adminsRoutes.use('/product', productRoutes)
module.exports = adminsRoutes;