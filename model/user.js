const mongoose = require("mongoose");
const Joi = require("joi");
const jwt =  require("jsonwebtoken")
const config = require("config")


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength:5,
        maxlength:55,
        
    },
    password:{
        type:String,
        minlength:5,
        maxlength:255
    },
    email:{
        type:String,
        minlength:5,
        maxlength:255
    }
});

userSchema.methods.produceToken = function(){

    const token = jwt.sign({_id:this._id, email:this.email}, config.get("jwtkey"));
    return token;

}

const User =  mongoose.model("User", userSchema);


function validator(request){
const schema = Joi.object({
    name: Joi.string().min(5).max(55).required(),
    password: Joi.string().min(5).max(255).required(),
    email: Joi.string().min(5).max(255).required(),
})

return schema.validate(request)
}
module.exports.User = User;
module.exports.validator = validator;
