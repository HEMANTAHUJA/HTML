const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name is requires"],
        midlength : [3,"name must be 3 chracter long"],
        maxlength : [50,"Name cannot exceed 50 character"],
        validate :  {
            validator : function(value){
                return validator.isAlpha(value , "en-US");
            },
            message : "Name should be in String"
        }
    },
    email : {
        type : String,
        required : [true, "Email is Required"],
        unique : true,
        validate : {
            validator : function(value){
                return validator.isEmail(value);
            },
            message : "Please enter a valid email address"
        }
    },
    password : {
        type : String,
        required : [true,"password is required"],
        minlength : [8,"password  must be 8 character long"],
        maxlength : [128,"password cannot exceed 128 character"],
        validate : {
            validator : function(value){
                return validator.isStrongPassword(value,{
                    minlength: 8,
                    minLowercase:1,
                    minUppercase:1,
                    minNumbers:1,
                    minSymbols:1
                })
            },
            message : "Password must be stronger"
        }
    },
    phoneNumber:{
        type :String,
        required: [true,"Phoe number is required"],
        validate : {
            validator : function(value){
                return validator.isMobilePhone(value,"en-IN")
            },
            message: "Please enter a valid Phone number"
        }
    }
});

module.exports = mongoose.model("userr",userSchema);
