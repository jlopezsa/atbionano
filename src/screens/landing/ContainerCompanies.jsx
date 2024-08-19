import { Typography } from "@material-tailwind/react";
import Companies from "components/cards/companies/Companies";
import { CompaniesMessages } from "configs/companiesMessages";
import { ROUTE_SECTION_PARTNERS } from "routes/routes";

const ContainerCompanies = () => {
  return (
    <div id={ROUTE_SECTION_PARTNERS}>
      <Typography variant="h3" className="text-center pt-[80px]">
        Empresas aliadas
      </Typography>
      <div class="flex flex-row justify-around flex-wrap">
        <Companies props={CompaniesMessages.company1} />
        <Companies props={CompaniesMessages.company2} />
        <Companies props={CompaniesMessages.company3} />
      </div>
    </div>
  );
};

export default ContainerCompanies;
