const User = require("../model/user");
const bcrypt = require()

exports.signup =async (req,res, next)=>{
    try{
        const {name,email,password,phoneNumber} = req.body;
        const isExisting = await User.findOne({email:email});

        if(isExisting){
            // return res.status(400).send({message : "User already exist"});
            const error = new Error("User already exists");
            error.name = "UserExist";
            throw next(error);
        }
        const newUser = new User({
            name: name,
            email: email,
            password: password,
            phoneNumber: phoneNumber
        });
        await newUser.save();
        res.status(201).send({message: "user created"});
    } catch(error){
         
        if(error.name === "ValidationError"){
            const errors = Object.values(error.errors).map(error => error.message);
            return res.status(400).json({message : "Validation Error",  error : errors});
        }
        res.status(500).send(error);
    }
};
exports.login = async (req,res)=>{
    try {
        const { email , password } = req.body;
        const isExitingUser = await User.findOne({email : email});
        if(!isExitingUser){
            return res.status(404).send({message : "User not found"});
        };

        const isMatched = password === isExitingUser.password;
        if(!isMatched) { 
            return res.status(401).send({message : "Invalid Password"});
        }

        res.status(200).send({message : "User Logged-In" , data : isExitingUser});
    } catch (error) {
        res.status(500).send(error);
    }
}