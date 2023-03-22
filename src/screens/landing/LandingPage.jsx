import KnowUs from "../../components/cards/knowUs/KnowUs";
import { InformativeMessages } from "../../configs/InformativeMessages";
import CallsProcesses from './../../components/cards/callsProcesses/CallsProcesses';
import { CallsMessages } from './../../configs/callsMessages';
import backgroundImage from "C:/DevJulian/atbionano/src/images/main-background.jpg";

const LandingPage = () => {
    return (
        <div>
            {/* <div class="justify-center bg-no-repeat bg-cover bg-center rounded-lg">
                <img src={backgroundImage} alt="background" />
            </div> */}
            <div class="relative bg-fixed h-[700px]" style={{backgroundImage: `url(${backgroundImage})`}}>
                <div class="text-3xl text-white absolute inset-x-20 bottom-44">
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                    <p>Elit et sed duis laoreet eleifend eros euismod.</p> 
                    <p>Facilisis sed enim morbi arcu duis tristique pharetra amet.z</p>
                </div>
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
