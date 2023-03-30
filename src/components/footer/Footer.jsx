import logoAtbionano from "../../images/logo_letraBlanca.png"

const Footer = () => {
    return(
        <div>
            <div class="relative h-[400px] bg-[#151F12] flex flex-row flex-wrap place-content-evenly items-center">
                <div class="w-[300px]">
                <a href="#top">
                    <img class="float-right h-[100px]" src={logoAtbionano} alt="logo" />
                </a>
                </div>
                <div class="w-[300px] flex flex-col text-white items-center">
                    <p>Contacto</p>
                    <p>+57 305 4 60 22 46</p>
                    <p>Email</p>
                    <p>aytbionano@gmail.com</p>
                </div>
                <div class="w-[300px] flex flex-col text-white">
                    <p>Próximante síguenos en nuestras redes</p>
                </div>
            </div>
            <div class="relative h-[30px] bg-[#151F12] text-white flex flex-row flex-wrap place-content-evenly items-center">
                <p class="mb-[50px]">&copy; 2023 A&T-BioNano</p>
            </div>
        </div>
    )
}

export default Footer;