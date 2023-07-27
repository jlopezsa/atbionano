import backgroundImage from "../../images/main-background-2.jpg";
import CarouselMain from "../carouselMain/CarouselMain";

const Slides = () => {
    return(
        <div>
            <div class="bg-fixed h-[100vh] " style={{backgroundImage: `url(${backgroundImage})`} }>
                <div class="pl-[20px] pb-[50px] pt-[100px] text-3xl text-white md:pl-[100px] md:pt-[150px]">
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