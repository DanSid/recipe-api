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
        console.log(req.body);
        console.log(req.file);
        // Add category from database
        const newCategory = await CategoryModel.create({
            // spreadit
            ...req.body,
            image: req.file.filename
        });
        // Return response
        res.status(201).json(newCategory)
    } catch (error) {
        next(error)
    }
}

