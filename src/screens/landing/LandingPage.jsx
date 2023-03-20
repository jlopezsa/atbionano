import KnowUs from "../../components/cards/knowUs/KnowUs";
import { InformativeMessages } from "../../configs/InformativeMessages";
import CallsProcesses from './../../components/cards/callsProcesses/CallsProcesses';
import { CallsMessages } from './../../configs/callsMessages';

const LandingPage = () => {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold underline">This is the ATBionano Landing Page</h1>
            </div>
            <div>
                <p class="text-xl font-bold text-center pt-[25px]">Conocenos!</p>
                <div class="flex flex-row justify-around flex-wrap">
                    <KnowUs props={InformativeMessages.quienesSomos}/>
                    <KnowUs props={InformativeMessages.queHacemos}/>
                    <KnowUs props={InformativeMessages.comoHacemos}/>
                </div>
            </div>
            <div class="relative">
                <div class="h-[400px] mt-[100px] mb-[100px] bg-lime-300 blur-2xl">
                </div>
                <div class="h-[500px] mt-[-500px] relative">
                    <p class="text-xl font-bold text-center pt-[25px]">Empresas con las cuales ...</p>
                </div>
            </div>
            <div>
                <p class="text-xl font-bold text-center pt-[25px]">Nuestro proceso</p>
                <div class="flex flex-row justify-around flex-wrap">
                    <CallsProcesses props={CallsMessages.call1}/>
                    <CallsProcesses props={CallsMessages.call1}/>
                    <CallsProcesses props={CallsMessages.call1}/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
