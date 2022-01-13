const express = require("express");
const router = express.Router();
//const auth = require("../middleware/auth");
const asyncMid = require("../middleware/asyncMid")

const {Healo} = require("../model/healo")

router.post('/create', asyncMid(async(req, res)=>{

    let healo = new Healo({
                name:req.body.name,
                category:req.body.location
            })
            healo = await healo.save();
        
           res.send(healo);
})
)


router.get("/",  asyncMid(async (req, res)=>{
   let healo = await Healo.find().select({_id:-1});

   res.send(healo);

}))

module.exports = router;