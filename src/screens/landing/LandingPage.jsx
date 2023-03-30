import KnowUs from "../../components/cards/knowUs/KnowUs";
import Footer from "../../components/footer/Footer";
import Slides from "../../components/slides/Slides";
import Companies from "../../components/cards/companies/Companies";
import CallsProcesses from './../../components/cards/callsProcesses/CallsProcesses';
import { InformativeMessages } from "../../configs/InformativeMessages";
import { CallsMessages } from './../../configs/callsMessages';
import { CompaniesMessages } from './../../configs/companiesMessages';

import {
    ROUTE_SECTION_KNOW_US,
    ROUTE_SECTION_PARTNERS,
    ROUTE_SECTION_PROCESS,
    ROUTE_SECTION_CONTACT
} from "../../routes/routes"


const LandingPage = () => {
    return (
        <div>
            <div id="top">
                <Slides />
            </div>
            <div id={ROUTE_SECTION_KNOW_US} class="js-show-on-scroll">
                <p class="text-3xl font-bold text-center pt-[80px]">Conocenos!</p>
                <div class="flex flex-row justify-around flex-wrap">
                    <KnowUs props={InformativeMessages.quienesSomos}/>
                    <KnowUs props={InformativeMessages.queHacemos}/>
                    <KnowUs props={InformativeMessages.comoHacemos}/>
                </div>
            </div>
            <div id={ROUTE_SECTION_PARTNERS} class="relative -z-10">
                <p class="text-3xl font-bold text-center pt-[80px]">Empresas aliadas</p>
                <div class="flex flex-row justify-around flex-wrap">
                    <Companies props={CompaniesMessages.company1}/>
                    <Companies props={CompaniesMessages.company2}/>
                    <Companies props={CompaniesMessages.company3}/>
                </div>
            </div>
            <div id={ROUTE_SECTION_PROCESS}>
                <p class="text-3xl font-bold text-center pt-[80px]">Nuestro proceso</p>
                <div class="flex flex-row justify-around flex-wrap">
                    <CallsProcesses props={CallsMessages.call1}/>
                    <CallsProcesses props={CallsMessages.call2}/>
                    <CallsProcesses props={CallsMessages.call3}/>
                </div>
            </div>
            <div class="h-[100px]"></div>
            <div id={ROUTE_SECTION_CONTACT}>
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage;
