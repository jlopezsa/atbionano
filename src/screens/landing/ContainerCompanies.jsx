import Companies from "../../components/cards/companies/Companies";
import { CompaniesMessages } from "../../configs/companiesMessages";
import { ROUTE_SECTION_PARTNERS } from "../../routes/routes";

const ContainerCompanies = () => {
    return(
        <div id={ROUTE_SECTION_PARTNERS}>
            <p class="text-3xl font-bold text-center pt-[80px]">Empresas aliadas</p>
            <div class="flex flex-row justify-around flex-wrap">
                <Companies props={CompaniesMessages.company1}/>
                <Companies props={CompaniesMessages.company2}/>
                <Companies props={CompaniesMessages.company3}/>
            </div>
        </div>
    );
}

export default ContainerCompanies;