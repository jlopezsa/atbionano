import { Typography } from "@material-tailwind/react";

export const ButtonLink = ({
  message,
  urlLink,
  id = "default-link",
}) => {
  return (
    <a
      id={id}
      type="button"
      data-te-ripple-init
      data-te-ripple-color="light"
      href={urlLink}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block rounded-xl bg-secondary px-2 pb-1 pt-1 text-xs sm:text-sm font-medium leading-normal text-primary shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out 
                    hover:bg-primary-600 
                    hover:shadow-[0_8px_9px_-4px] bg-primary
                    active:bg-primary active:text-secondary
                    active:shadow-[0_8px_9px_-4px] bg-primary
                    "
    >
      <Typography variant="caption">
        <strong>{message}</strong>
      </Typography>
    </a>
  );
};