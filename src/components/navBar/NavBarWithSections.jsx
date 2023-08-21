import React from "react";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import logoAtbionano from "../../images/logo_letraBlanca.png";
import { ROUTE_HOME } from "../../routes/routes";
import NavListMenu from "./NavListMenu";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// nav list menu KnowUs
const navListMenuItemsKnowUs = [
  {
    title: "Conocenos",
    description: "Te presentamos quienes somos, qué y cómo lo hacemos.",
  },
  {
    title: "Empresas aliadas",
    description: "Conoce las empresas que nos acompañan",
  },
  {
    title: "Nuestro proceso",
    description: "Conoce nuestro proceso",
  },
  {
    title: "Contactanos",
    description: "",
  },
];

// nav list menu Tech patent
const navListMenuItemsTech = [
  {
    title: "Patente",
    description:
      "Solución acuosa que sirve para el control de hongos y bacterias.",
  },
];

// nav list menu Products
const navListMenuItemsProducts = [
  {
    title: "Bionanoaxus",
    description:
      "Alternativa ecológica a las composiciones antimicrobianas tradicionales.",
  },
];

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu
        sectionName={"Conocenos"}
        itemsList={navListMenuItemsKnowUs}
      />
      <NavListMenu
        sectionName={"Tecnología"}
        itemsList={navListMenuItemsTech}
      />
      <NavListMenu
        sectionName={"Productos"}
        itemsList={navListMenuItemsProducts}
      />
    </ul>
  );
}

const NavBarWithSections = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="bg-primary mx-auto max-w-screen-xl p-1 lg:rounded-xl lg:pl-6">
      <div className="relative mx-auto flex items-center text-blue-gray-100">
        <a href={`${ROUTE_HOME}`}>
          <img
            class="float-none pl-[50px] md:float-right h-[40px] w-auto"
            src={logoAtbionano}
            alt="logo"
          />
        </a>
        <div className="absolute top-2/4 left-3/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        {/* <ProfileMenu /> */}
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default NavBarWithSections;
