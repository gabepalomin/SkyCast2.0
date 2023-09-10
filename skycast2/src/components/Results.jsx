import { FaMapLocationDot } from "react-icons/fa6";

const Results = () => {
  return (
    <div class="grid grid-cols-2 grid-rows-5 gap-2">
      <div class=" col-span-2 bg-slate-100 rounded-2xl text-center flex flex-col justify-center">
        <h1 class="text-2xl text-emerald-700">2023-06-25</h1>
        <p class="text-sm">Flight Date</p>
      </div>

      <div class="row-span-2 bg-slate-100 rounded-xl flex flex-col text-center justify-center items-center px-5 py-2 gap-1">
        <h1 class="text-2xl text-emerald-700">QUO</h1>
        <p class="text-xxs">Akwa Ibom International</p>
        <FaMapLocationDot />
        <h1 class="text-2xl text-emerald-700">ABV</h1>
        <p class="text-xxs">Nnamdi Azikiwe International Airport</p>
      </div>

      <div class="bg-slate-100 rounded-xl flex flex-col items-center text-center justify-center">
        <h1 class="text-2xl text-emerald-700">60%</h1>
        <p class="text-sm">Delay Chance</p>
      </div>

      <div class="bg-slate-100 rounded-xl flex flex-col items-center text-center justify-center">
        <h1 class="text-2xl text-emerald-700">B9</h1>
        <p class="text-sm">Gate</p>
      </div>

      <div class="col-span-2 bg-slate-100 rounded-xl flex flex-col items-center text-center justify-center">
        <h1 class="text-2xl text-emerald-700">08:30:00</h1>
        <p class="text-sm">Departure</p>
      </div>

      <div class="col-span-2 bg-slate-100 rounded-xl flex flex-col items-center text-center justify-center">
        <h1 class="text-2xl text-emerald-700">09:45:00</h1>
        <p class="text-sm">Arrival</p>
      </div>
    </div>
  );
};

export default Results;
