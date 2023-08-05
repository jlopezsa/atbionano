import backgroundImage from "../../images/main-background-2.jpg";
import { ButtonLight } from "../buttons/ButtonLight/ButtonLight";
import CarouselMain from "../carouselMain/CarouselMain";

const Slides = () => {
    return(
        <div>
            <div class="relative bg-fixed h-[100vh] ">
                {/* <div class="bg-fixed h-[100vh] " style={{backgroundImage: `url(${backgroundImage})`} }> */}
                <div class="pl-[20px] pb-[10px] pt-[200px] text-3xl text-white absolute z-10 md:pl-[100px] md:pt-[200px]">
                    <p>Innovación y desarrollo de productos de base Bionanotecnológica.</p>
                </div>
                <div class="flex justify-center">
                    <CarouselMain />
                </div>
                
            </div>
        </div>
    )
}

export default Slides;