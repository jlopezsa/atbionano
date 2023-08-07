const CarouselSpecificContent = ({ topMessage, bottomMessage, image }) => {
  return (
    <div class="absolute flex flex-col ml-[15%] w-[80%] top-[30%] text-2xl text-white 
    sm:top-[40%] sm:start-[100px] sm:text-5xl sm:flex sm:flex-row sm:justify-between sm:ml-[0]">
      <div>
        <div>
          <strong>{topMessage}</strong>
        </div>
        <div class="text-2xl text-white">
          <p>{bottomMessage}</p>
        </div>
      </div>
      <div class="w-[80%] h-[auto] mt-[30px] sm:w-[40%] sm:h-[auto] sm:mt-[0]">
        <img
          src={image}
          alt="atbionano patente"
          class="object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default CarouselSpecificContent;
