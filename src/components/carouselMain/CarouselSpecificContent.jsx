const CarouselSpecificContent = ({topMessage, bottomMessage}) => {
  return (
    <div>
      <div class="absolute top-[25%] start-[10px] text-2xl text-white sm:top-[40%] sm:start-[100px] sm:text-3xl">
        <p>{topMessage}</p>
      </div>
      <div class="absolute top-[35%] start-[10px] text-2xl text-white sm:top-[50%] sm:start-[100px]">
        <p>{bottomMessage}</p>
      </div>
    </div>
  );
};

export default CarouselSpecificContent;
