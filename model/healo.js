const mongoose = require('mongoose');


const healoSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength:5,
        maxlength:55,
        uppercase:true,
        trim:true
    },

    category:{
        type:String,
        minlength:5,
        maxlength:255,
    }
})

const Healo  = mongoose.model("Healo", healoSchema);


module.exports.Healo = Healo;