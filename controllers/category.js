import { CategoryModel } from "../models/category.js";

export const getCategories = async (req, res, next) => {
    try {
        // Get query params
        const { limit, skip, filter, fields } = req.query;
        // Get all categories from database
        const allCategories = await CategoryModel
            .find(fields ? JSON.parse(filter) : {})
            .select(fields ?JSON.parse(fields) : '')
            .limit(limit ? parseInt(limit): undefined)
            .skip(skip ? parseInt(skip): undefined);
        // Return response
        res.status(200).json(allCategories);
    } catch (error) {
        next(error);
    }
}

export const postCategory = async (req, res, next) =>{
    try {
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

