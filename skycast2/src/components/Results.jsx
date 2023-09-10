import { FaMapLocationDot } from "react-icons/fa6";

const Results = (infoData) => {
  console.log(infoData);
  const {
    depIata,
    arrIata,
    depDate,
    depTime,
    arrTime,
    arrDate,
    aircraftCode,
    carrierCode,
    flightNumber,
    gate,
  } = infoData.infoData;
  console.log(depDate);
  return (
    <div class="grid grid-cols-2 grid-rows-5 gap-2">
      <div class=" col-span-2 bg-slate-100 rounded-2xl text-center flex flex-col justify-center">
        <h1 class="text-2xl text-emerald-700">{depDate}</h1>
        <p class="text-sm">Flight Date</p>
      </div>

      <div class="row-span-2 bg-slate-100 rounded-xl flex flex-col text-center justify-center items-center px-5 py-2 gap-1">
        <h1 class="text-2xl text-emerald-700"></h1>
        <p class="text-xxs"></p>
        <FaMapLocationDot />
        <h1 class="text-2xl text-emerald-700"></h1>
        <p class="text-xxs"></p>
      </div>

      <div class="bg-slate-100 rounded-xl flex flex-col items-center text-center justify-center">
        <h1 class="text-2xl text-emerald-700">60%</h1>
        <p class="text-sm">Delay Chance</p>
      </div>

      <div class="bg-slate-100 rounded-xl flex flex-col items-center text-center justify-center">
        <h1 class="text-2xl text-emerald-700"></h1>
        <p class="text-sm">Gate</p>
      </div>

      <div class="col-span-2 bg-slate-100 rounded-xl flex flex-col items-center text-center justify-center">
        <h1 class="text-2xl text-emerald-700"></h1>
        <p class="text-sm">Departure</p>
      </div>

      <div class="col-span-2 bg-slate-100 rounded-xl flex flex-col items-center text-center justify-center">
        <h1 class="text-2xl text-emerald-700"></h1>
        <p class="text-sm">Arrival</p>
      </div>
    </div>
  );
};

export default Results;