import KnowUs from "../../components/cards/knowUs/KnowUs";
import { InformativeMessages } from "../../configs/InformativeMessages";

const LandingPage = () => {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold underline">This is the ATBionano Landing Page</h1>
            </div>
            <div class="flex flex-row justify-around flex-wrap">
                <KnowUs props={InformativeMessages.quienesSomos}/>
                <KnowUs props={InformativeMessages.queHacemos}/>
                <KnowUs props={InformativeMessages.comoHacemos}/>
            </div>
        </div>
    )
}

export default LandingPage;
