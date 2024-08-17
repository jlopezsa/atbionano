import { Typography } from "@material-tailwind/react";
import { ButtonLight } from "components/buttons/ButtonLight/ButtonLight";

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
      <div class="z-10 w-full h-28">
        <Typography variant="h3">
          <strong>{title}</strong>
        </Typography>
      </div>

      <div class="flex flex-row flex-wrap items-center justify-center sm:justify-between">
        <div className="m-5">
          <div>
            {/* <strong>{topMessage}</strong> */}
            <Typography variant="h4">
              <strong>{topMessage}</strong>
            </Typography>
          </div>
          <div class="text-lg  text-white">
            {/* <p>{bottomMessage}</p> */}
            <Typography variant="h5">{bottomMessage}</Typography>
          </div>
        </div>
        <div class="w-[40%] min-w-[250px] min-h-[200px] flex items-center">
          <img src={image} alt="atbionano patente" class="rounded-xl" />
        </div>
      </div>

      <div class="z-10 w-full h-16 flex items-center justify-center sm:justify-start">
        <ButtonLight
          id={`${messageButton.replace(/\s+/g, "-")}-button`}
          message={messageButton}
          navigateRoute={navigateRoute}
        />
      </div>
    </div>
  );
};

export default CarouselSpecificContent;
