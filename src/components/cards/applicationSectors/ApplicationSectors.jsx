import { Typography } from "@material-tailwind/react";

const ApplicationSectors = ({
  isFigureTop = true,
  description,
  imagePath = "",
  credits = "",
}) => {
  return (
    <div
      class={`flex ${isFigureTop ? "flex-col" : "flex-col-reverse"} w-1/5 h-96`}
    >
      <div class="bg-primary h-[70%] overflow-hidden">
        <img class="w-full h-full" src={imagePath} alt="logo" />
      </div>
      <div class="bg-tertiary h-[30%] p-5">
        <Typography variant="paragraph">{description}</Typography>
      </div>
    </div>
  );
};

export default ApplicationSectors;
