function Iblock({ message }) {
  return (
    <div class="bg-page px-3 py-5  text-white flex justify-center items-center text-center text-xs">
      <p class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-green-500 bg-clip-text text-transparent">
        {message}
      </p>
    </div>
  );
}

export default Iblock;
