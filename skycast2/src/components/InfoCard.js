import plane from "../images/flight.png";

const InfoCard = () => {
  return (
    <div class="pt-5 py-0 text-center bg-desc text-white text-md drop-shadow-md m-5">
      <p class="px-5">
        Introducing SkyCast, a cutting-edge website that harnesses the power of
        advanced algorithms and real-time data to predict the likelihood of
        flight delays. With its intuitive interface and reliable predictions,
        SkyCast aims to assist travelers in making informed decisions and
        minimizing disruptions to their travel plans.
      </p>
      <img src={plane} alt="plane" class="max-w-full max-h-full" />
    </div>
  );
};

export default InfoCard;
