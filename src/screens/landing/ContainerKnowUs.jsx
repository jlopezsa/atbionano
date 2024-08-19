import { Fade } from "react-awesome-reveal";
import KnowUs from "components/cards/knowUs/KnowUs";
import { ROUTE_SECTION_KNOW_US } from "routes/routes";
import { InformativeMessages } from "configs/InformativeMessages";
import { Typography } from "@material-tailwind/react";

const ContainerKnowUs = () => {
  return (
    <div id={ROUTE_SECTION_KNOW_US}>
      <Typography variant="h3" className="text-center pt-[80px]">
        Propósito empresarial!
      </Typography>
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
