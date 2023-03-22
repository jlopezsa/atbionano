const Menu = () => {
    return(
        <nav class="px-2 sm:px-4 py-2.5">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <div class="hidden w-full md:block md:w-auto" id="navbar-default ">
                    <ul class="flex flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        {/* <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                        </li> */}
                        <li>
                            <a href="#" class="text-base block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-lime-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Conocenos</a>
                        </li>
                        <li>
                            <a href="#" class="text-base block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-lime-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Aliados</a>
                        </li>
                        <li>
                            <a href="#" class="text-base block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-lime-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Nuestro proceso</a>
                        </li>
                        <li>
                            <a href="#" class="text-base block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-lime-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contactacnos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu;