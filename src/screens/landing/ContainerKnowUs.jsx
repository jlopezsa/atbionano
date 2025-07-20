// import { Fade } from "react-awesome-reveal"
import { ROUTE_SECTION_KNOW_US } from "routes/routes"
import { InformativeMessages } from "configs/InformativeMessages"
import { Typography } from "@material-tailwind/react"
import KnowUs from "components/cards/knowUs/KnowUs"

const ContainerKnowUs = () => {
  const allMessages = [
    InformativeMessages.quienesSomos,
    InformativeMessages.queHacemos,
    InformativeMessages.comoHacemos,
  ]
  return (
    <div id={ROUTE_SECTION_KNOW_US}>
      <Typography variant="h3" className="pt-[80px] text-center">
        ¡Propósito empresarial!
      </Typography>
      <div class="relative -z-10 flex flex-row flex-wrap justify-around">
        {allMessages.map((message) => (
          <KnowUs props={message} />
        ))}
      </div>
    </div>
  )
}

export default ContainerKnowUs
