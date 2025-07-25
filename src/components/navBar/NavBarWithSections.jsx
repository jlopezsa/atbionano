import { Bars2Icon } from "@heroicons/react/24/outline"
import { Collapse, IconButton, Navbar } from "@material-tailwind/react"
import logoAtbionano from "images/logo_letraBlanca.png"
import React from "react"
import {
  ROUTE_BIONANOAXUS_PRODUCT_PAGE,
  ROUTE_HOME,
  ROUTE_PATENT_PAGE,
  ROUTE_SECTION_COLLABORATION,
  ROUTE_SECTION_CONTACT,
  ROUTE_SECTION_KNOW_US,
  ROUTE_SECTION_PARTNERS,
  ROUTE_SECTION_PROCESS,
  ROUTE_SECTION_TEAM,
  ROUTE_ZCLEAN_PRODUCT_PAGE,
} from "routes/routes"
import NavListMenu from "./NavListMenu"

// nav list menu KnowUs
const navListMenuItemsKnowUs = [
  {
    title: "Propósito empresarial",
    description: "Te presentamos quienes somos, qué y cómo lo hacemos.",
    linkTo: ROUTE_SECTION_KNOW_US,
  },
  {
    title: "Equipo de trabajo",
    description: "Conoce a cada uno de los integrantes del equipo.",
    linkTo: ROUTE_SECTION_TEAM,
  },
  {
    title: "Empresas aliadas",
    description: "Conoce las empresas que nos acompañan",
    linkTo: ROUTE_SECTION_PARTNERS,
  },
  {
    title: "Ecosistema colaborativo",
    description: "Conoce nuestro sistema colaborativo",
    linkTo: ROUTE_SECTION_COLLABORATION,
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
]

// nav list menu Tech patent
const navListMenuItemsTech = [
  {
    title: "Patente",
    description:
      "Solución acuosa que sirve para el control de hongos y bacterias.",
    linkTo: ROUTE_PATENT_PAGE,
  },
]

// nav list menu Products
const navListMenuItemsProducts = [
  {
    title: "Bionanoaxus",
    description:
      "Alternativa ecológica a las composiciones antimicrobianas tradicionales.",
    linkTo: ROUTE_BIONANOAXUS_PRODUCT_PAGE,
  },
  {
    title: "Z-Klean",
    description:
      "Alternativa ecológica a la limpieza de superficies y productos.",
    linkTo: ROUTE_ZCLEAN_PRODUCT_PAGE,
  },
]

function NavList({ onSelect }) {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu
        sectionName={"Conocenos"}
        itemsList={navListMenuItemsKnowUs}
        linkPage={ROUTE_HOME}
        onSelect={onSelect}
      />
      <NavListMenu
        sectionName={"Tecnología"}
        itemsList={navListMenuItemsTech}
        onSelect={onSelect}
        // linkPage={ROUTE_PATENT_PAGE}
      />
      <NavListMenu
        sectionName={"Productos"}
        itemsList={navListMenuItemsProducts}
        onSelect={onSelect}
        // linkPage={ROUTE_PRODUCTS}
      />
    </ul>
  )
}

const NavBarWithSections = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false)

  const toggleIsNavOpen = () => setIsNavOpen((current) => !current)

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    )
  }, [])

  return (
    <Navbar className="mx-auto my-0 max-w-full rounded-none border-transparent bg-primary px-4 lg:pl-20">
      <div className="relative mx-auto flex items-center text-blue-gray-100">
        <a href={`${ROUTE_HOME}`}>
          <img
            class="float-none h-[50px] w-auto pl-[20px] sm:pl-[50px] md:float-right"
            src={logoAtbionano}
            alt="logo"
          />
        </a>
        <div className="absolute left-3/4 top-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={() => {
            toggleIsNavOpen()
          }}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6 text-blue-gray-100" />
        </IconButton>
        {/* <ProfileMenu /> */}
      </div>
      <Collapse
        open={isNavOpen}
        className="h-screen w-screen text-blue-gray-100"
      >
        <NavList onSelect={toggleIsNavOpen} />
      </Collapse>
    </Navbar>
  )
}

export default NavBarWithSections
