import "./App.css";
import "./index.css";
import Banner from "./components/Banner";
import InputBar from "./components/InputBar";
import InfoCard from "./components/InfoCard";
import Loading from "./components/Loading";
import Results from "./components/Results";

function App() {
  return (
    <div className="bg-page min-h-screen font-Orbitron">
      <div>
        <Banner />
      </div>

      <div class="p-6 drop-shadow-md">
        <InfoCard />
      </div>

      <div class="p-6 drop-shadow-md">
        <h1 class="text-center text-white font-semibold text-xl pb-2">
          We Will Find:
        </h1>
        <InputBar />
      </div>

      <div class=" p-6 drop-shadow-md hidden">
        <Loading />
      </div>

      <p class="text-center text-xxs pb-2">
        ©️ 2023 Skycast2.0. All rights reserved
      </p>
    </div>
  );
}

export default App;
