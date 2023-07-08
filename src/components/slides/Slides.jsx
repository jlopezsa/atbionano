import backgroundImage from "../../images/main-background-2.jpg";

const Slides = () => {
    return(
        <div>
            <div class="bg-fixed h-[700px]" style={{backgroundImage: `url(${backgroundImage})`}}>
                <div class="pl-[20px] pt-[200px] text-3xl text-white md:pl-[100px] md:pt-[400px]">
                    <p>Innovación y desarrollo de productos de base Bionanotecnológica.</p>
                </div>
            </div>
        </div>
    )
}

export default Slides;