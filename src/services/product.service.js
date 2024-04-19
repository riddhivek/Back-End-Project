const { query } = require('express');
const Product = require('../model/product.model');
module.exports = class ProductServices {
    // Add New Product
    async addNewProduct(body) {
        try {
            return await Product.create(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };
    // Get Single Product
    async getProduct(body) {
        try {
            return await Product.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };
    // Get Single Product By Id
    async getProductById(id) {
        try {
            return await Product.findById(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };
    // Update Product
    async updateProduct(body) {
        try {
            return await Product.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };
    // Get All Products
    async getAllProducts(id, body) {
        try {
            let categoryWise = query.category && query.category !== "" ? [
                { $match: { category: query.category } }
            ] : [];
            let find = [
                { $match: { isDelete: false } },
                ...categoryWise
            ];

            let result = await Product.aggregate(find);
            return result;
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };
}