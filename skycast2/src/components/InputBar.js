import Block from "./Iblock";

const InputBar = () => {
  return (
    <div class="bg-desc grid grid-cols-2 grid-rows-3 p-5 m-5 gap-4">
      <Block message={"Departure"} />
      <Block message={"Arrival"} />
      <Block message={"Gate"} />
      <Block message={"Airport"} />
      <Block message={"Delay Chance"} />
      <Block message={"Flight Date"} />
    </div>
  );
};
export default InputBar;
