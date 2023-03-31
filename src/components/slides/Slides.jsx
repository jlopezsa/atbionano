import backgroundImage from "../../images/main-background-2.jpg";

const Slides = () => {
    return(
        <div>
            <div class="bg-fixed h-[700px]" style={{backgroundImage: `url(${backgroundImage})`}}>
                {/* <div class="relative z-10 text-3xl text-white inset-x-20 bottom-44"> */}
                <div class="pl-[20px] pt-[200px] text-3xl text-white md:pl-[100px] md:pt-[400px]">
                    <p>Innovación y desarrollo de produtos de base Bionanotecnológica.</p>
                </div>
            </div>
        </div>
    )
}

export default Slides;