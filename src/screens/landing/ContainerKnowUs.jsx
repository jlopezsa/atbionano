import { Fade } from "react-awesome-reveal"
import { ROUTE_SECTION_KNOW_US } from "routes/routes"
import { InformativeMessages } from "configs/InformativeMessages"
import { Typography } from "@material-tailwind/react"

const ContainerKnowUs = () => {
  return (
    <div id={ROUTE_SECTION_KNOW_US}>
      <Typography variant="h3" className="pt-[80px] text-center">
        Propósito empresarial!
      </Typography>
      <div class="relative -z-10 flex flex-row flex-wrap justify-around">
        <Fade cascade triggerOnce>
          <KnowUs props={InformativeMessages.quienesSomos} />
          <KnowUs props={InformativeMessages.queHacemos} />
          <KnowUs props={InformativeMessages.comoHacemos} />
        </Fade>
      </div>
    </div>
  )
}

export default ContainerKnowUs
