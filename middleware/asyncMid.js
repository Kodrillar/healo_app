

module.exports = function(route){
    return async ( req, res, next)=>{
        try{

          await route(req, res)

        } catch(e){ 

            next(e)

        }
    }
}