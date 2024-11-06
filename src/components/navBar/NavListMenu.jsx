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
import { useNavigate } from "react-router-dom";

const NavListMenu = ({
  sectionName,
  itemsList = [{ title: "", description: "", linkTo: "" }],
  linkPage,
  onSelect = ()=>{},
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigate = useNavigate();

  const renderItems = itemsList.map(({ title, description, linkTo }) => {
    if (linkPage === "/") {
      return (
        <a href={`${linkPage}#${linkTo}`} key={title} onClick={onSelect}>
          <MenuItem className="w-4/5 sm:w-full">
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
      );
    } else {
      return (
        <button 
          onClick={() => {
            navigate(linkTo); 
            onSelect();
            }} 
          key={title}>
          <MenuItem className="w-4/5 sm:w-full">
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
        </button>
      );
    }
  });

  return (
    <Fragment>
      <Menu allowHover={true} open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <button
            onClick={() => linkPage !== undefined && navigate(linkPage)}
            key={`${sectionName}-page`}
          >
            <Typography
              as="a"
              onClick={() => linkPage !== undefined && navigate(linkPage)}
              variant="paragraph"
              className="font-normal"
            >
              <MenuItem className="hidden items-center gap-2 text-blue-gray-100 lg:flex lg:rounded-full">
                <Square3Stack3DIcon className="h-[18px] w-[18px]" />{" "}
                {sectionName}{" "}
                <ChevronDownIcon
                  strokeWidth={2}
                  className={`h-3 w-3 transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </MenuItem>
            </Typography>
          </button>
        </MenuHandler>
        <MenuList className="hidden w-[20rem] overflow-visible lg:grid">
          <ul className="col-span-4 flex w-full flex-col gap-1 focus:outline-none">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <button
        onClick={() => linkPage !== undefined && navigate(linkPage)}
        key={`${sectionName}-page`}
      >
        <MenuItem className="flex items-center gap-2 text-blue-gray-100 lg:hidden">
          <Square3Stack3DIcon className="h-[18px] w-[18px]" /> {sectionName}{" "}
        </MenuItem>
      </button>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </Fragment>
  );
};

export default NavListMenu;
