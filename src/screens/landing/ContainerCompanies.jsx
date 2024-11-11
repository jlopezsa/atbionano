import { Typography } from "@material-tailwind/react"
import Companies from "components/cards/companies/Companies"
import { CompaniesMessages } from "configs/companiesMessages"
import { ROUTE_SECTION_PARTNERS } from "routes/routes"

// Help to inifinite scroll
// https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/

const ContainerCompanies = () => {
  const allCompanies = [
    CompaniesMessages.company1,
    CompaniesMessages.company2,
    CompaniesMessages.company3,
  ]
  return (
    <div id={ROUTE_SECTION_PARTNERS}>
      <Typography variant="h3" className="pt-[80px] text-center">
        Empresas aliadas
      </Typography>
      <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul class="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
          {allCompanies.map((company) => (
            <Companies props={company} />
          ))}
        </ul>
        <ul
          class="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
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

export default ContainerCompanies
