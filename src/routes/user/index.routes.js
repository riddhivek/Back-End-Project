const productRoutes = require('./product.routes');
const userRoutes = require('./user.routes');


userRoutes.use('/product', productRoutes)
module.exports = userRoutes;