const jwt = require("jsonwebtoken")
const config = require("config");

module.exports = function(req, res, next){

    const token = req.header("x-auth-token");
    if(!token) return res.status(401).send("youre not authorized to use this service bro");

try{
    const verifyToken = jwt.verify(token, config.get("jwtkey"));
    req.user = verifyToken;
    
    next();

}catch(err){
  res.status(400).send("invalid token")
}

}