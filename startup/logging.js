


module.exports = function () {
    
    process.on("uncaughtException", (err)=>{

        console.error(`Hey bro, see what happened ==> ${err.message}`);
        process.exit(1)
    })


    process.on("unhandledRejection", (err)=>{
        //throw new Error(err);
        console.log(`Hey bro, see what happened ==> ${err.message}`)
        process.exit(1)
    })
}