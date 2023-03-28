import KnowUs from "../../components/cards/knowUs/KnowUs";
import Footer from "../../components/footer/Footer";
import Slides from "../../components/slides/Slides";
import { InformativeMessages } from "../../configs/InformativeMessages";
import CallsProcesses from './../../components/cards/callsProcesses/CallsProcesses';
import { CallsMessages } from './../../configs/callsMessages';

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
                <div class="h-[400px] mt-[100px] mb-[100px] bg-lime-300 blur-2xl">
                </div>
                <div class="h-[500px] mt-[-500px] relative">
                    <p class="text-3xl font-bold text-center pt-[80px]">Empresas con las cuales ...</p>
                </div>
            </div>
            <div id={ROUTE_SECTION_PROCESS}>
                <p class="text-3xl font-bold text-center pt-[80px]">Nuestro proceso</p>
                <div class="flex flex-row justify-around flex-wrap">
                    <CallsProcesses props={CallsMessages.call1}/>
                    <CallsProcesses props={CallsMessages.call1}/>
                    <CallsProcesses props={CallsMessages.call1}/>
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
