import Hamburger from "hamburger-react";
import { useState } from "react";
import {
  ROUTE_SECTION_KNOW_US,
  ROUTE_SECTION_PARTNERS,
  ROUTE_SECTION_PROCESS,
  ROUTE_SECTION_CONTACT,
} from "../../routes/routes";

import {Color} from "../../configs/colors"

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    setIsOpen(true);
  };
  const hiddenMenu = () => {
    setIsOpen(false);
  };

  const deployMenu = () => {
    return (
      <nav>
        <div class="md:hidden">
          <ul class={`absolute inline mt-[0px] pt-[40px] bg-[${Color.greenDark}] opacity-95 w-full h-[350px] flex flex-col content-center items-center`}>
            <a
              href={`#${ROUTE_SECTION_KNOW_US}`}
              class={`h-[80px] text-base block text-white hover:text-[${Color.greenLime}] align-middle`}
            >
              Conocenos
            </a>

            <a
              href={`#${ROUTE_SECTION_PARTNERS}`}
              class={`h-[80px] text-base block text-white hover:text-[${Color.greenLime}] align-middle`}
            >
              Aliados
            </a>

            <a
              href={`#${ROUTE_SECTION_PROCESS}`}
              class={`h-[80px] text-base block text-white hover:text-[${Color.greenLime}] align-middle`}
            >
              Nuestro proceso
            </a>

            <a
              href={`#${ROUTE_SECTION_CONTACT}`}
              class={`h-[80px] text-base block text-white hover:text-[${Color.greenLime}] align-middle`}
            >
              Contactanos
            </a>
          </ul>
        </div>
      </nav>
    );
  };

  return (
    <div>
      <nav class="pr-[30px] container flex-col flex-wrap items-center justify-between mx-auto md:mr-[100px]">
        <div class="hidden w-full md:block lg:w-auto">
          <ul class="flex flex-row p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <a
              href={`#${ROUTE_SECTION_KNOW_US}`}
              class={`text-base block py-2 pl text-white hover:text-[${Color.greenLime}]`}
            >
              Conocenos
            </a>

            <a
              href={`#${ROUTE_SECTION_PARTNERS}`}
              class={`text-base block py-2 pl text-white hover:text-[${Color.greenLime}]`}
            >
              Aliados
            </a>

            <a
              href={`#${ROUTE_SECTION_PROCESS}`}
              class={`text-base block py-2 pl text-white hover:text-[${Color.greenLime}]`}
            >
              Nuestro proceso
            </a>

            <a
              href={`#${ROUTE_SECTION_CONTACT}`}
              class={`text-base block py-2 pl text-white hover:text-[${Color.greenLime}]`}
            >
              Contactanos
            </a>
          </ul>
        </div>
      </nav>
      <div class="mt-[-80px] h-[80px] pr-[20px] md:hidden flex items-center justify-end">
        <Hamburger
          color="#FFFFFF"
          onToggle={(toggled) => {
            if (toggled) {
              showMenu();
            } else {
              hiddenMenu();
            }
          }}
          onScroll={(toggled) => {
            if (toggled) {
              hiddenMenu();
            }
          }}
        />
      </div>
      {isOpen ? deployMenu() : null}
    </div>
  );
};

export default Menu;
