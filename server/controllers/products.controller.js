import productModel from "../models/products.model.js";

export const getProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json({ status: "success", data: products });
    } catch (error) {
        console.log(error)
    }
} 

export const getProductById = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
} 

export const createProduct = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
} 

export const updateProduct = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
} 

export const deleteProduct = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
} 
