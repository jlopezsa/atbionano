import logoAtbionano from "../../images/logo_letraBlanca.png"

const Footer = () => {
    return(
        <div class="relative h-[400px] bg-[#151F12] flex flex-row flex-wrap place-content-evenly items-center">
            <div class="w-[300px]">
                <img class="float-right h-[100px]" src={logoAtbionano} alt="logo" />
            </div>
            <div class="w-[300px] flex flex-col text-white items-center">
                <p>Contacto</p>
                <p>+57 (1) 333 33 33 33</p>
                <p>Email</p>
                <p>contacto@atbionano.com.co</p>
            </div>
            <div class="w-[300px] flex flex-col text-white">
                <p>Próximante síguenos en nuestras redes</p>
            </div>
        </div>
    )
}

export default Footer;