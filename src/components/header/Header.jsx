import logoAtbionano from "../../images/logo_letraBlanca.png"
import Menu from './../menu/Menu';

const Header = () => {
    return(
        <div class="relative h-[80px] bg-[#151F12] flex flex-nowrap justify-between items-center z-1">
            <div class="inset-y-0 right-0  w-[400px]">
                <a href="#top">
                    <img class="float-right h-[70px]" src={logoAtbionano} alt="logo" />
                </a>
            </div>
            <div class="w-[700px]">
                <Menu />
            </div>
        </div>
    )
}

export default Header