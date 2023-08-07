// import backgroundImage from "../../images/main-background-2.jpg";
import CarouselMain from "../carouselMain/CarouselMain";

const Slides = () => {
    return(
        <div>
            <div class="relative bg-fixed h-[100vh] ">
                {/* <div class="bg-fixed h-[100vh] " style={{backgroundImage: `url(${backgroundImage})`} }> */}
                <div class="absolute top-[150px] start-[10px] text-2xl text-white absolute z-10 sm:top-[200px] sm:start-[100px] sm:text-3xl">
                    <strong>Innovación y desarrollo de productos de base Bionanotecnológica</strong>
                </div>
                <div class="flex justify-center">
                    <CarouselMain />
                </div>
                
            </div>
        </div>
    )
}

export default Slides;