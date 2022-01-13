const config = require("config");

module.exports = function(){

    if(!config.get("jwtkey")){
        throw new Error("There's no key for json web token")
    }
}