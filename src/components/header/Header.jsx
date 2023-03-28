import logoAtbionano from "../../images/logo_letraBlanca.png"
import Menu from './../menu/Menu';

const Header = () => {
    return(
        <div class="relative h-[80px] bg-[#151F12] flex flex-nowrap justify-between items-center z-1">
            <div class="max-w md:block inset-y-0 right-0  w-[400px] h-[80px]">
                <a href="#top">
                    <img class="float-none pl-[50px] md:float-right h-[80px] w-auto h-[80px] w-auto" src={logoAtbionano} alt="logo" />
                </a>
            </div>
            <div class="hidden md:block w-[700px]">
                <Menu />
            </div>
        </div>
    )
}

export default Header