const express = require("express")
const user = require("../routes/user")
const error = require("../middleware/error")
const auth = require("../routes/auth")
const healo = require("../routes/healo")

module.exports = function(app){
    app.use(express.json())
    app.use("/user", user);
    app.use("/auth", auth)
    app.use("/healo", healo)

    app.use(error)
}