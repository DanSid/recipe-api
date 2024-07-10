import { UserModel } from "../models/user.js";
import bcrypt from "bcrypt";

export const register = async(req,res, next)=>{
try {
    // Hash user password
// The 10 stands for the level of difficulty of the password to be, which the number is between 10 and 12  of which the time it would take for it to process would determine your secured hash, which 10 is the preferred average always
const hashedPassword = bcrypt.hashSync(req.body.password, 10)

// Create a new user
const registeredUser = await UserModel.create({
    ...req.body,
    password: hashedPassword
});
// Return a response
 res.status(201).json('User register successfully');

} catch (error) {
    next(error)
}

}

const login = async()=>{}

const logout = async()=>{}


const profile = async()=>{}


