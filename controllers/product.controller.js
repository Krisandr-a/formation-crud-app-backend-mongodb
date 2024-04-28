const Product = require("../models/product.model.js")

const getAll = async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({message: error.message})
    }
}

const getProduct = async (req, res) => {
    try {
      // destructure the http request (req.params) to get the value of id
      const { id } = req.params;
      // use id to find the product in the MongoDB database
      const product = await Product.findById(id);
      // display the product in json
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({message: error.message})
    }
}

const createProduct = async (req, res) => {
    try {
      const product = await Product.create(req.body);
      // 200 for success + request body
      res.status(200).json(product);
    } catch (error) {
      // 500 for server status
      res.status(500).json({message: error.message});
    }
}

const updateProduct = async (req, res) => {
    try {
      // destructure 
      const { id } = req.params;
  
      // use id to update and upadte with req.body
      const product = await Product.findByIdAndUpdate(id, req.body)
  
      // if no product has this id
      if (!product) {
        return res.status(404).json("Product not found.");
      }
  
      // product successfully updated, check for product again
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
  
    } catch (error) {
      res.status(500).json({message: error.message});
    }
}

const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedProduct = await Product.findByIdAndDelete(id);
      
      if (!deletedProduct) {
        return res.status(404).json("Product not found.");
      }
  
      res.status(200).json("Product successfully deleted!");
  
    } catch (error) {
      res.status(500).json({message: error.message});
    }
}

module.exports = {
    getAll,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}