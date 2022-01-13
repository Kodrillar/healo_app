const express = require("express");
const morgan = require("morgan");
const app = express();


morgan("tiny");


require("./startup/logging")()
require("./startup/configError")();
require("./startup/db")();
require("./startup/routes")(app);

const port = process.env.PORT || 3000

app.listen(port, ()=>{console.log(`listening on port: ${port}`);})