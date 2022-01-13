const mongoose = require("mongoose");
const config = require("config");


module.exports = function(){
    
    mongoose.connect(config.get("db"))
    .then(e => console.log("connected successfully"))
   
}
