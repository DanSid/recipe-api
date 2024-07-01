import { Schema,model} from "mongoose";
// import normalize from "normalize-mongoose"
import {toJSON} from '@reis/mongoose-to-json'

const categorySchema = new Schema({
    name:{type: String, required:true , unique:true},
    // Images or videos are always type:String
    image:{type:String, required:true}
},
   {
    // This gives you automatically the created and updated at
     timestamps:true
   }
);

categorySchema.plugin(toJSON);

export const CategoryModel = model('Category',categorySchema)