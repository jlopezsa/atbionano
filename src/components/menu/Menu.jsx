import {
    ROUTE_SECTION_KNOW_US,
    ROUTE_SECTION_PARTNERS,
    ROUTE_SECTION_PROCESS,
    ROUTE_SECTION_CONTACT
} from "../../routes/routes"

const Menu = () => {
    return(
        <nav>
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <div class="hidden w-full md:block lg:w-auto" id="navbar-default ">
                    <ul class="flex flex-row p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li>
                            <a href={`#${ROUTE_SECTION_KNOW_US}`} class="text-base block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-lime-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Conocenos</a>
                        </li>
                        <li>
                            <a href={`#${ROUTE_SECTION_PARTNERS}`} class="text-base block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-lime-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Aliados</a>
                        </li>
                        <li>
                            <a href={`#${ROUTE_SECTION_PROCESS}`} class="text-base block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-lime-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Nuestro proceso</a>
                        </li>
                        <li>
                            <a href={`#${ROUTE_SECTION_CONTACT}`} class="text-base block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-lime-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contactacnos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu;