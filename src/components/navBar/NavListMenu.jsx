import React from "react";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { Fragment } from "react";
import {
  Square3Stack3DIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const NavListMenu = ({
  sectionName,
  itemsList = [{ title: "", description: "", linkTo: "" }],
  linkPage,
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = itemsList.map(({ title, description, linkTo }) => (
    <a href={`${linkPage}#${linkTo}`} key={title}>
      <MenuItem className="">
        <Typography
          variant="paragraph"
          color="text-blue-gray-200 lg:gray"
          className="mb-1"
        >
          {title}
        </Typography>
        <Typography variant="small" color="gray">
          {}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <Fragment>
      <Menu allowHover={true} open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography
            as="a"
            href={`${linkPage}`}
            variant="paragraph"
            className="font-normal"
          >
            <MenuItem className="hidden items-center gap-2 text-blue-gray-100 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> {sectionName}{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[20rem] overflow-visible lg:grid">
          <ul className="col-span-4 flex w-full flex-col gap-1 focus:outline-none">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <a href={`${linkPage}`} key={`${sectionName}-page`}>
        <MenuItem className="flex items-center gap-2 text-blue-gray-100 lg:hidden">
          <Square3Stack3DIcon className="h-[18px] w-[18px]" /> {sectionName}{" "}
        </MenuItem>
      </a>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </Fragment>
  );
};

export default NavListMenu;
