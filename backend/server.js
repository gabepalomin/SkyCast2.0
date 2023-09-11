require("dotenv").config();
const express = require("express");
const flightAPIroutes = require("./routes/flightAPIroutes");
const cors = require("cors");
//express app
const app = express();

//middleware
//attaches body to reqest object in the routes
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
//log requests
app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.url);
  next();
});

//routes
app.use("/api/flight-data", flightAPIroutes);

//start making app listen for requests
const start = async () => {
  try {
    app.listen(
      process.env.PORT,
      console.log(`server is listening on port ${process.env.PORT}...`)
    );
  } catch (error) {
    console.error(error); // It's a good practice to log the error for debugging.
  }
};

start();
