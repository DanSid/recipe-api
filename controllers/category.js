import { CategoryModel } from "../models/category.js";

export const getCategories = async (req, res, next) =>{
    try {
        // Get all categories from database
        const allCategories = await CategoryModel.find();
        // Return response
        res.json(allCategories)
    } catch (error) {
        next(error)
    }
}

export const postCategory = async (req, res, next) =>{
    try {
        // Get all categories from database
        const newCategory = await CategoryModel.create(req.body);
        // Return response
        res.status(201).json(newCategory)
    } catch (error) {
        next(error)
    }
}

