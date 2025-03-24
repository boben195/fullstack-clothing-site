import userModel from "../models/userModels.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"



const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "4h" });
};

const loginUser = async (req, res) => {
    
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({error: "User not found"})
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id)
            res.json({success: true, token})
        } else {
            res.json({success: false, message: "Incorect password"})
        }
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}


const registerUser = async (req, res) => {
    
    try {
        const { name, email, password } = req.body;
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(400).json({ message: "User already exist" });
        };
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Invalid email address" });
        };
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Please, enter strong password (min 8 symbols)" });
        };
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name, email, password: hashedPassword
        });

        const user = await newUser.save();
        const token = createToken(user._id)
        res.json({success: true, token})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
        
    }
}


// const adminLogin = async (req, res) => {
    
//     try {
//         const { email, password } = req.body;
//         if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
//             const token = jwt.sign({email} , process.env.JWT_SECRET, {expiresIn: "2h"})
//             res.json({success: true, token})
//         } else {
//             res.status(401).json({ success: false, message: "Invalid credentials" });
//         }
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// }


const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(
                { email },  
                process.env.JWT_SECRET,
                { expiresIn: "2h" } 
            );

            return res.json({ success: true, token });
        } 

        
        res.status(401).json({ success: false, message: "Invalid credentials" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};


export {loginUser, registerUser, adminLogin}