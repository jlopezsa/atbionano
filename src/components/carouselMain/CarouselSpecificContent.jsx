import { ButtonLight } from "./../buttons/ButtonLight/ButtonLight";
const CarouselSpecificContent = ({
  title,
  topMessage,
  bottomMessage,
  image,
  messageButton,
  navigateRoute,
}) => {
  return (
    <div class="absolute max-w-screen-2xl flex flex-wrap items-center w-[80%] top-[15%] text-white">
      <div class="text-2xl z-10 w-full h-28">
        <strong>{title}</strong>
      </div>

      <div class="text-3xl flex flex-row flex-wrap items-center justify-center sm:justify-between">
        <div>
          <div>
            <strong>{topMessage}</strong>
          </div>
          <div class="text-2xl text-white">
            <p>{bottomMessage}</p>
          </div>
        </div>
        <div class="w-[40%] min-w-[250px] min-h-[200px] flex items-center">
          <img src={image} alt="atbionano patente" class="rounded-xl" />
        </div>
      </div>

      <div class="z-10 w-full h-16 flex items-center justify-center sm:justify-start">
        <ButtonLight message={messageButton} navigateRoute={navigateRoute} />
      </div>
    </div>
  );
};

export default CarouselSpecificContent;
