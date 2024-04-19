const express = require('express');
const productRoutes = express.Router();

const {
    addNewProduct,
    deleteProduct,
    getAllProducts,
    getProduct,
    updateProduct
} = require('../../controller/admin/product.controller');

productRoutes.post('/add-product', addNewProduct);
productRoutes.get('/get-products', getAllProducts);
productRoutes.get('/get-product', getProduct);
productRoutes.put('/update-product', updateProduct);
productRoutes.delete('/delete-product', deleteProduct);

module.exports = productRoutes;