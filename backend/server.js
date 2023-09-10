require("dotenv").config();
const express = require("express");
const flightAPIroutes = require('./routes/flightAPIroutes');

//express app
const app = express();

//middleware
//attaches body to reqest object in the routes
app.use(express.json());

//log requests
app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.url);
    next();
});


//routes
app.use("/api/flight-data", flightAPIroutes);

//start making app listen for requests
app.listen(process.env.PORT);