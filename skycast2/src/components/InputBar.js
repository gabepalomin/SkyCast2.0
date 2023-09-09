import Block from "./Iblock";

const InputBar = () => {
  return (
    <div class="bg-desc rounded-lg">
      <div class=" grid grid-cols-2 grid-rows-3 p-5 gap-3 ">
        <Block message={"Departure"} />
        <Block message={"Arrival"} />
        <Block message={"Gate"} />
        <Block message={"Airport"} />
        <Block message={"Delay Chance"} />
        <Block message={"Flight Date"} />
      </div>
      <div class="text-center">yo</div>
    </div>
  );
};
export default InputBar;
