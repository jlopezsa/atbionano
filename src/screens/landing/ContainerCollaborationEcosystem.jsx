import { Typography } from "@material-tailwind/react"
import Companies from "components/cards/companies/Companies"
import { CollaborationEcosystemMessages } from "configs/collaborationEcosystem"
import { ROUTE_SECTION_COLLABORATION } from "routes/routes"

// Help to inifinite scroll
// https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/

const ContainerCollaborationEcosystem = () => {
  const allCompanies = [
    CollaborationEcosystemMessages.company1,
    CollaborationEcosystemMessages.company2,
    CollaborationEcosystemMessages.company3,
    CollaborationEcosystemMessages.company4,
  ]
  return (
    <div id={ROUTE_SECTION_COLLABORATION}>
      <Typography variant="h3" className="pt-[80px] text-center">
        Ecosistema de Colaborativo
      </Typography>
      <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul class="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
          {allCompanies.map((company) => (
            <Companies props={company} />
          ))}
        </ul>
        <ul
          class="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
          aria-hidden="true"
        >
          {allCompanies.map((company) => (
            <Companies props={company} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ContainerCollaborationEcosystem
