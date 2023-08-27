import { Typography } from "@material-tailwind/react";

const ItemListWithBackground = ({
  backgroundImageList,
  description,
  credits,
}) => {
  return (
    <div
      class="min-w-[280px]"
      style={{
        backgroundImage: `url(${backgroundImageList})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
      }}
    >
      <ul class="list-disc m-5">
        <li>
          <Typography variant="paragraph">{description}</Typography>
        </li>
      </ul>
    </div>
  );
};

export default ItemListWithBackground;
