const Banner = () => {
  return (
    <div class="bg-[url('images/pexels-pixabay-531756.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center gap-x-4 px-5 py-10">
      <div class="w-20 h-20 bg-[url('images/EARTH.png')] bg-cover rounded-full">
        <div class="w-full h-full relative animate-rotation before:content-['✈'] before:rotate-29 before:w-5 before:h-5 before:text-3xl before:text-white before:absolute left--5 top--5"></div>
      </div>

      <div className="bg-blur backdrop-blur-xs rounded-3xl  text-white">
        <h1 className="px-8 py-2 text-2xl">SkyCast</h1>
      </div>
    </div>
  );
};

export default Banner;
