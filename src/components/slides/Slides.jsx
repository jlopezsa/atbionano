import backgroundImage from "C:/DevJulian/atbionano/src/images/main-background-2.jpg";

const Slides = () => {
    return(
        <div>
            <div class="bg-fixed h-[700px]" style={{backgroundImage: `url(${backgroundImage})`}}></div>
            <div class="relative z-10 text-3xl text-white inset-x-20 bottom-44">
                <p>Lorem ipsum dolor sit amet consectetur. </p>
                <p>Elit et sed duis laoreet eleifend eros euismod.</p> 
                <p>Facilisis sed enim morbi arcu duis tristique pharetra amet.z</p>
            </div>
        </div>
    )
}

export default Slides;