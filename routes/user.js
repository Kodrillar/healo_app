const {User, validator} = require("../model/user"); 
const express = require("express");
const router = express.Router();
const validatorMid = require("../middleware/validateRoute")
const asyncMid  = require("../middleware/asyncMid");



router.post("/", validatorMid(validator), asyncMid(async (req, res)=>{
 
   let user = await User.findOne({email:req.body.email});
   if(user) return res.status(400).send("user already exists");

   user = new User({
       name:req.body.name,
       email:req.body.email,
       password:req.body.password

   })

   //come back later to hash password 

   user = await user.save();
   const token = user.produceToken()
   return res.header("x-auth-token" , token).send(user.email);

}))


module.exports = router;