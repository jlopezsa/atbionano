import logoAtbionano from "../../images/logo_letraBlanca.png";
import { ROUTE_HOME, ROUTE_SECTION_CONTACT } from "../../routes/routes";
import SocialMediaIcons from "../socialMediaIcons/SocialMediaIcons";

const Footer = () => {
  return (
    <div id={ROUTE_SECTION_CONTACT}>
      <div
        class={`relative h-[400px] bg-primary flex flex-row flex-wrap place-content-evenly items-center`}
      >
        <div class="w-[300px]">
          <a href={`${ROUTE_HOME}`}>
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
          <p class="text-center pb-[20px]">
            ...próximanten síguenos en nuestras redes
          </p>
          <SocialMediaIcons />
        </div>
      </div>
      <div
        class={`relative h-[80px] mb-[0px] bg-primary text-white flex flex-row flex-wrap place-content-evenly items-center`}
      >
        <p>&copy; 2023 A&T-BioNano</p>
      </div>
    </div>
  );
};

export default Footer;
