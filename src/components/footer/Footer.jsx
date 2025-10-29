import { Typography } from "@material-tailwind/react"
import SocialMediaIcons from "components/socialMediaIcons/SocialMediaIcons"
import logoAtbionano from "images/logo_letraBlanca.png"
import { ROUTE_HOME, ROUTE_SECTION_CONTACT } from "routes/routes"

const Footer = () => {
  return (
    <div id={ROUTE_SECTION_CONTACT}>
      <div
        class={`relative flex h-[400px] flex-row flex-wrap place-content-evenly items-center bg-primary`}
      >
        <div class="flex w-[300px] flex-col items-center">
          <a href={`${ROUTE_HOME}`}>
            <img class="float-right h-[100px]" src={logoAtbionano} alt="logo" />
          </a>
          <Typography
            variant="paragraph"
            className="font-size-[14px] text-center text-white"
          >
            Innovación bionanotecnológica para un mundo más limpio y sostenible.
          </Typography>
        </div>
        <div class="flex w-[300px] flex-col items-center text-white">
          <p>Contacto</p>
          <p>+57 305 4 60 22 46</p>
          <p>Email</p>
          <p>aytbionano@gmail.com</p>
        </div>
        <div class="flex w-[300px] flex-col text-white">
          <p class="pb-[20px] text-center">Síguenos en nuestras redes</p>
          <SocialMediaIcons />
        </div>
      </div>
      <div
        class={`relative mb-[0px] flex h-[80px] flex-row flex-wrap place-content-evenly items-center bg-primary text-white`}
      >
        <p>
          &copy; {new Date().getFullYear()} A&T-BioNano S.A.S — Todos los
          derechos reservados
        </p>
      </div>
    </div>
  )
}

export default Footer
