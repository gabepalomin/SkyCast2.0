import Block from "./Iblock";
import { BiSearchAlt } from "react-icons/bi";
import { useRef, useState } from "react";
import Results from "./Results";
import Loading from "./Loading";

const InputBar = () => {
  //Aarush's stuff start ------

  const [flightData, setFlightData] = useState(null);
  const inputRef = useRef(null);

  const getFlightData = async () => {
    const url = `http://localhost:4000/api/flight-data/${inputRef.current.value}`;
    const response = await fetch(url);
    if (inputRef.current.value === "") {
      alert("Enter a flight number please");
    } else {
      const json = await response.json(); //This is the line causing me error
      console.log(response);
      console.log(json);
      if (response.ok) {
        console.log("Response is ok");
        setFlightData(json);
        console.log(flightData);
      } else {
        console.log("response not ok");
        setFlightData(null);
      }
    }
  };

  // const flightnumber = "AA1004";

  //hardcoded for now, but put the flight number here

  //Aarush's stuff end ------

  return (
    <div class="max-w-xs md:max-w-md">
      <h1 class="text-center text-white font-semibold text-xl pb-2">
        We Will Find:
      </h1>
      <div class="bg-desc rounded-lg p-5">
        <div class=" grid grid-cols-3 grid-rows-2  gap-1 ">
          <Block message={"Departure"} />
          <Block message={"Arrival"} />
          <Block message={"Gate"} />
          <Block message={"Airport"} />
          <Block message={"Delay Chance"} />
          <Block message={"Flight Date"} />
        </div>
        <div class="text-center flex flex-col gap-3 pt-3 items-center">
          <div class=" bg-slate-100 p-3 py-5 w-full shadow-xl rounded-md font-semibold">
            <h2 class="">
              Enter Your <span class="text-blue-600">Flight Number:</span>
            </h2>
          </div>
          <div class="pl-7 bg-search  rounded-full flex items-center justify-between w-5/6">
            <input
              type="text"
              placeholder="Flight #"
              class=" border-none outline-none text-base w-5/6 uppercase text-white bg-transparent font-bold"
              ref={inputRef}
            />
            <button
              type="submit"
              value="submit"
              id="FlightNumberSubmitButton"
              class=" border-none aspect-square rounded-full bg-button  h-14 flex justify-center items-center duration-500 hover:bg-hover"
              onClick={getFlightData}
            >
              <i className="text-4xl">
                <BiSearchAlt />
              </i>
            </button>
          </div>
        </div>
      </div>
      <div class="pt-6 drop-shadow-md ">
        {!flightData ? <Loading /> : <Results infoData={flightData} />}
        {/* //lets the
        api fetch request finish before inputting an object into the component */}
      </div>
    </div>
  );
};
export default InputBar;
