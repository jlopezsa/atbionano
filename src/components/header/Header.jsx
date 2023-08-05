import logoAtbionano from "../../images/logo_letraBlanca.png"
import Menu from './../menu/Menu';
import { ROUTE_HOME_TOP } from "../../routes/routes";

const Header = () => {
    return(
        <div class={`fixed top-0 z-50 w-full h-[80px] bg-primary md:flex md:flex-nowrap md:justify-between md:items-center fixed`}>
            <div class="max-w md:block inset-y-0 right-0 h-[80px] flex items-center md:flex md:items-center">
                <a href={`#${ROUTE_HOME_TOP}`}>
                    <img class="float-none pl-[50px] md:float-right h-[65px] w-auto h-[65px] w-auto" src={logoAtbionano} alt="logo" />
                </a>
            </div>
            <Menu />
        </div>
    )
}

export default Header