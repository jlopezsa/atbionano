import { ButtonLight } from "./../buttons/ButtonLight/ButtonLight";
const CarouselSpecificContent = ({ title, topMessage, bottomMessage, image, messageButton }) => {
  return (
    // <div class="absolute flex flex-col ml-[15%] w-[80%] top-[30%] text-2xl text-white
    // sm:top-[40%] sm:start-[100px] sm:text-5xl sm:flex sm:flex-row sm:justify-between sm:ml-[0]">
    <div
      class="absolute max-w-screen-2xl flex flex-col flex-wrap items-center  ml-[15%] w-[80%] top-[20%] text-2xl text-white 
      sm:top-[25%] sm:text-5xl sm:flex sm:flex-row sm:justify-between sm:ml-[0]"
    >
      <div class="start-[10px] h-[100px] text-2xl text-white z-10 sm:start-[100px] sm:text-3xl">
        <strong>
          {title}
        </strong>
      </div>

      <div class="flex flex-col flex-nowrap">
        <div>
          <strong>{topMessage}</strong>
        </div>
        <div class="text-2xl text-white">
          <p>{bottomMessage}</p>
        </div>
      </div>

      <div class="w-[280px] h-[auto] md:w-[600px] mt-[20px] md:h-[auto]">
        <img src={image} alt="atbionano patente" class="rounded-xl" />
      </div>

      <div class="bottom-[10%] start-[20px]  sm:start-[100px] z-10">
        <ButtonLight
          message={messageButton}
        />
      </div>
    </div>
  );
};

export default CarouselSpecificContent;
