const express = require("express");
const axios = require("axios");

//store routes to export later
const router = express.Router();

//Get flight data
router.get("/:id", async (req, res) => {
  const input = req.params;
  //console.log(input.id);
  try {
    const response = await axios.get(
      "http://api.aviationstack.com/v1/flights?access_key=b39d1984c7900258091947bda6cbbdb9&flight_iata=" +
        input.id
    );

    const data = response.data;
    // console.log("Here");

    //IATA numbers
    let depIata = data["data"]["0"]["departure"]["iata"];
    let arrIata = data["data"]["0"]["arrival"]["iata"];
    //departure times
    let departure = data["data"]["0"]["departure"]["scheduled"];
    let depDate = departure.slice(0, 10);
    let depTime = departure.slice(11, 19);
    //arrival times
    let arrival = data["data"]["0"]["arrival"]["scheduled"];
    let arrDate = arrival.slice(0, 10);
    let arrTime = arrival.slice(11, 19);
    //more data
    let aircraftCode = data["data"]["0"]["flight"]["number"];
    let carrierCode = data["data"]["0"]["airline"]["iata"];
    let flightNumber = data["data"]["0"]["flight"]["number"];
    let gate = data["data"]["0"]["departure"]["gate"];
    let depAirport = data["data"]["0"]["departure"]["airport"];
    let arrAirport = data["data"]["0"]["arrival"]["airport"];
    if (gate === null) {
      gate = "No Info";
    }

    const resObject = {
      depIata,
      arrIata,
      depAirport,
      arrAirport,
      depDate,
      depTime,
      arrTime,
      arrDate,
      aircraftCode,
      carrierCode,
      flightNumber,
      gate,
    };
    console.log("**************" + resObject);

    res.status(200).json(resObject);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
});

//exporting routes to be used in other files
module.exports = router;
