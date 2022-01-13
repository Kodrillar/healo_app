const Joi  = require("joi")
const validatorMid = require("../middleware/validateRoute");
const express = require("express");
const router = express.Router();
const {User} = require("../model/user")
const asyncMid = require("../middleware/asyncMid")



router.post("/", validatorMid(validator), asyncMid(async(req, res)=>{


let user = await User.findOne({email:req.body.email});
if(!user) return res.status(400).send("invalid email");

if(user.password !== req.body.password) return res.status(400).send("invalid password");

const token = user.produceToken();

res.header("x-auth-token", token).send("Login successful");
    

}))


function validator(request){
const schema = Joi.object({
    email:Joi.string().required().email(),
    password:Joi.string().required()
})

return schema.validate(request)
    
}

module.exports = router;






