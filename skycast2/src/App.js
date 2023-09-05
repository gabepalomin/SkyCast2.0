import "./App.css";
import Banner from "./components/Banner";
import InputBar from "./components/InputBar";
import InfoCard from "./components/InfoCard";
function App() {
  return (
    <div className="bg-page min-h-screen font-Orbitron">
      <Banner />
      <InfoCard />
      <h1 class="text-center mt-10 text-white font-semibold text-xl">
        We Will Find:
      </h1>
      <InputBar />
    </div>
  );
}

export default App;
