import { CategoryModel } from "../models/category.js";

export const getCategories = async (req, res, next) => {
    try {
        // Get query params
        const { filter = "{}", sort ="{}", fields = "{}", limit = 10, skip  = 0} = req.query;
        // Get all categories from database
        const allCategories = await CategoryModel
            .find(JSON.parse(filter) )
            .sort(JSON.parse(sort))
            .select(JSON.parse(fields))
            .limit(limit)
            .skip(skip);
        // Return response
        res.status(200).json(allCategories);
    } catch (error) {
        next(error);
    }
}

// Using the Terninary Operator Option
// export const getCategories = async (req, res, next) => {
//     try {
//         // Get query params
//         const { limit, skip, filter, fields } = req.query;
//         // Get all categories from database
//         const allCategories = await CategoryModel
            // If true give me fields and after the ? if false give me an empty object {}
//             .find(fields ? JSON.parse(filter) : {})
//             .select(fields ?JSON.parse(fields) : '')
//             .limit(limit ? parseInt(limit): 10)
//             .skip(skip ? parseInt(skip): 0);
//         // Return response
//         res.status(200).json(allCategories);
//     } catch (error) {
//         next(error);
//     }
// }

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

