import backgroundImageGreen from "../../images/background_green_geometric.jpg";
import backgroundImageGreenBlue from "../../images/background_green_blue.jpg";
import backgroundImageBlack from "../../images/background_green_black.jpg";
import atbionanoPatenteHorizantal from "../../images/atbionano/atbionano-lab-erlen-meyer-edited.jpeg";
import atbionanoProductBionanoaxus from "../../images/atbionano/bionanoaxus-product-edited.jpeg";
import { Carousel } from "@material-tailwind/react";
import { ButtonLight } from "./../buttons/ButtonLight/ButtonLight";
import CarouselSpecificContent from "./CarouselSpecificContent";

const CarouselMain = () => {
  return (
    <Carousel
      className="relative rounded-sm w-[100%] z-0 mt-[80px]"
      loop={true}
    >
      <div className="relative m-[0] p-[0] h-[700px] sm:h-[90vh]">
        <div class="h-[90vh] flex flex-row justify-center">
          <img
            src={backgroundImageBlack}
            alt="Beautiful landscape"
            className="w-full object-cover"
          />
          <CarouselSpecificContent
            title={
              "Innovación y desarrollo de productos de base Bionanotecnológica"
            }
            topMessage={"Nuestra patente"}
            bottomMessage={
              "Producto diseñado, manufacturado y de venta en Colombia."
            }
            image={atbionanoPatenteHorizantal}
            messageButton={"Conoce más sobre nuestra tecnología patentada"}
          />
        </div>
      </div>

      <div className="relative m-[0] p-[0] h-[700px] sm:h-[90vh]">
        <div class="h-[90vh] flex flex-row justify-center">
          <img
            src={backgroundImageGreen}
            alt="Beautiful landscape"
            className="w-full object-cover"
          />
          <CarouselSpecificContent
            title={
              "Innovación y desarrollo de productos de base Bionanotecnológica"
            }
            topMessage={"Bionanoaxus"}
            bottomMessage={"Producto con nanotecnología antimicrobiana y fungicida."}
            image={atbionanoProductBionanoaxus}
            messageButton={"Conoce nuestros productos"}
          />
        </div>
      </div>

      {/* <div className="relative m-[0] p-[0] h-[700px] sm:h-[90vh]">
        <div class="h-[90vh]">
          <img
            src={backgroundImageGreen}
            alt="City skyline at night"
            className="h-full w-full object-cover"
          />
          <CarouselSpecificContent
            topMessage={"Bionanoaxus"}
            bottomMessage={"Nanotecnología antimicrobiana y fungicida."}
            image={atbionanoProductBionanoaxus}
          />
        </div>
        <div class="absolute bottom-[15%] start-[20px] sm:start-[100px] z-10 sm:bottom-[20%]">
          <ButtonLight message={"Conoce nuestros productos"} />
        </div>
      </div> */}

      {/* <div className="relative m-[0] p-[0] h-[700px] sm:h-[90vh]">
        <img
          src={backgroundImageGreenBlue}
          alt="Colorful artwork"
          className="h-full w-full object-cover"
        />
      </div> */}
    </Carousel>
  );
};

export default CarouselMain;
