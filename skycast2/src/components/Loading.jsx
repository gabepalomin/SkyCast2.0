import { BsCalculator } from "react-icons/bs";

const Loading = () => {
  return (
    <div class=" bg-loading flex flex-col gap-6 items-center justify-center text-center px-4 py-40 rounded-lg">
      <p class="text-white">
        Enter a <span class="text-emerald-700">valid</span> flight number so
        that we can conduct our calculations 🤓
      </p>
      <i>
        <BsCalculator class="animate-spin duration-1000 text-gray-400 text-2xl" />
      </i>
    </div>
  );
};

export default Loading;
