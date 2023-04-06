import logoAtbionano from "../../images/logo_letraBlanca.png"
import Menu from './../menu/Menu';
import { ROUTE_HOME_TOP } from "../../routes/routes";

const Header = () => {
    return(
        <div class="relative sticky top-0 h-[80px] bg-[#151F12] md:flex md:flex-nowrap md:justify-between md:items-center z-1">
            <div class="max-w md:block inset-y-0 right-0  w-[400px] h-[80px]">
                <a href={`#${ROUTE_HOME_TOP}`}>
                    <img class="float-none pl-[50px] md:float-right h-[80px] w-auto h-[80px] w-auto" src={logoAtbionano} alt="logo" />
                </a>
            </div>
            <Menu />
        </div>
    )
}

export default Header