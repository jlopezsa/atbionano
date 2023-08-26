import React from "react";
import { Navbar, IconButton, Collapse } from "@material-tailwind/react";
import { Bars2Icon } from "@heroicons/react/24/outline";
import logoAtbionano from "../../images/logo_letraBlanca.png";
import {
  ROUTE_HOME,
  ROUTE_PATENT_PAGE,
  ROUTE_PRODUCTS_PAGE,
  ROUTE_SECTION_CONTACT,
  ROUTE_SECTION_KNOW_US,
  ROUTE_SECTION_PARTNERS,
  ROUTE_SECTION_PROCESS,
} from "../../routes/routes";
import NavListMenu from "./NavListMenu";

// nav list menu KnowUs
const navListMenuItemsKnowUs = [
  {
    title: "Propósito empresarial",
    description: "Te presentamos quienes somos, qué y cómo lo hacemos.",
    linkTo: ROUTE_SECTION_KNOW_US,
  },
  {
    title: "Empresas aliadas",
    description: "Conoce las empresas que nos acompañan",
    linkTo: ROUTE_SECTION_PARTNERS,
  },
  {
    title: "Nuestro proceso",
    description: "Conoce nuestro proceso",
    linkTo: ROUTE_SECTION_PROCESS,
  },
  {
    title: "Contactanos",
    description: "",
    linkTo: ROUTE_SECTION_CONTACT,
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
        linkPage={ROUTE_HOME}
      />
      <NavListMenu
        sectionName={"Tecnología"}
        itemsList={navListMenuItemsTech}
        linkPage={ROUTE_PATENT_PAGE}
      />
      <NavListMenu
        sectionName={"Productos"}
        itemsList={navListMenuItemsProducts}
        linkPage={ROUTE_PRODUCTS_PAGE}
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
    <Navbar className="bg-primary border-transparent mx-auto max-w-screen-xl px-4 my-3 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center text-blue-gray-100">
        <a href={`${ROUTE_HOME}`}>
          <img
            class="float-none pl-[20px] sm:pl-[50px] md:float-right h-[40px] w-auto"
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
      <Collapse open={isNavOpen} className="overflow-scroll text-blue-gray-100">
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default NavBarWithSections;
