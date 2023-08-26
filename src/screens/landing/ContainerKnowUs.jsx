import { Fade } from "react-awesome-reveal";
import { InformativeMessages } from "../../configs/InformativeMessages";
import KnowUs from "./../../components/cards/knowUs/KnowUs";
import { ROUTE_SECTION_KNOW_US } from "./../../routes/routes";

const ContainerKnowUs = () => {
  return (
    <div class="js-show-on-scroll" id={ROUTE_SECTION_KNOW_US}>
      <p class="text-3xl font-bold text-center mt-[80px]">
        Propósito empresarial!
      </p>
      <div class="flex flex-row justify-around flex-wrap relative -z-10">
        <Fade cascade triggerOnce>
          <KnowUs props={InformativeMessages.quienesSomos} />
          <KnowUs props={InformativeMessages.queHacemos} />
          <KnowUs props={InformativeMessages.comoHacemos} />
        </Fade>
      </div>
    </div>
  );
};

export default ContainerKnowUs;
