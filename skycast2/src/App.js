import "./App.css";
import "./index.css";
import Banner from "./components/Banner";
import InputBar from "./components/InputBar";
import InfoCard from "./components/InfoCard";

function App() {
  return (
    <div className="bg-page min-h-screen font-Orbitron">
      <div>
        <Banner />
      </div>

      <div class="flex flex-col items-center justify-center sm:flex-row sm:justify-center md:gap-20">
        <div class="p-6 drop-shadow-md">
          <InfoCard />
        </div>

        <div class="p-6 drop-shadow-md">
          <InputBar />
        </div>
      </div>

      <p class=" text-center text-xxs pb-2  xs:pt-52 md:pt-52">
        ©️ 2023 Skycast2.0. All rights reserved
      </p>
    </div>
  );
}

export default App;
