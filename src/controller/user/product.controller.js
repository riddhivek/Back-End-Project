const ProductServices = require('../../services/product.service');
const productService = new ProductServices();

exports.addNewProduct = async (req, res) => {
    try {
        let product = await productService.getProduct({ title: req.body.title, isDelete: false });
        if (product) {
            return res.status(400).json({ message: 'Product is alredy exist' });
        }
        product = await productService.addNewProduct({ ...req.body });
        res.status(201).json({ message: 'Product is Added' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getAllProducts = async (req, res) =>{
    try {
        let products = await productService.getAllProducts(req.query);
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error'});
    }
};

exports.getProduct = async (req, res) => {
    try {
        let product = await productService.getProductById(req.query.productId);
        if(!product) {
            return res.status(404).json({message: 'Product is not Found'});
        }
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error'});
    }
};

exports.updateProduct = async (req, res) => {
    try {
        let product = await productService.getProductById(req.query.productId);
        if(!product) {
            return res.status(404).json({ message: 'Product is not found'});
        }
        product = await productService.updateProduct(product._id, { ...req.body});
        res.status(202).json({product, message: 'Product is Updated'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error'});
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        let product = await productService.getProductById(req.query.productId);
        if(!product){
            return res.status(404).json({message: 'Product is not found'});
        }
        product = await productService.updateProduct(product._id, {isDelete: true});
        res.status(200).json({product, message: 'Product is Deleted'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};