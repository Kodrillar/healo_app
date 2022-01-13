

module.exports = function(err, req, res, next){
    console.log(err)
    res.status(500).send("Internal server erroryyyy")
    
    
}