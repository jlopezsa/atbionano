import { Typography } from "@material-tailwind/react";

const ApplicationSectors = ({
  isFigureTop = true,
  description,
  imagePath = "",
  credits = "",
}) => {
  return (
    <div
      class={`flex flex-col ${
        isFigureTop ? "lg:flex-col" : "lg:flex-col-reverse"
      } w-[228px] min-w-[228px] h-96 bg-tertiary my-2 md:my-0 rounded-xl sm:rounded-none`}
    >
      <div class=" bg-primary h-[70%] overflow-hidden">
        <img class="h-full w-full object-none" src={imagePath} alt="logo" />
      </div>
      <div class="h-[30%] p-3">
        <Typography variant="paragraph">{description}</Typography>
      </div>
    </div>
  );
};

export default ApplicationSectors;
