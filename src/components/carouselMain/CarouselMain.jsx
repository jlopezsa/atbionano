import backgroundImageGreen from "../../images/background_green_geometric.jpg";
import backgroundImageGreenBlue from "../../images/background_green_blue.jpg";
import backgroundImageBlack from "../../images/background_green_black.jpg";
import { Carousel } from "@material-tailwind/react";
import { ButtonLight } from "./../buttons/ButtonLight/ButtonLight";
import CarouselSpecificContent from "./CarouselSpecificContent";

const CarouselMain = () => {
  return (
    <Carousel
      className="relative rounded-sm h-[90vh] w-[100%] absolute z-0 mt-[80px]"
      loop={true}
    >
      <div className="relative m-[0] p-[0] h-[90vh]">
        <img
          src={backgroundImageBlack}
          alt="Beautiful landscape"
          className="h-full w-full object-cover"
        />
        <CarouselSpecificContent
        topMessage={"Producto diseñado, manufacturado y de venta en Colombia."}
        bottomMessage={"Patente de invención en Colombia."} 
        />
        <div class="absolute bottom-[200px] start-[10px]  sm:start-[100px] z-10">
          <ButtonLight
            message={"Conoce más sobre nuestra tecnología patentada"}
          />
        </div>
      </div>

      <div className="relative m-[0] p-[0] h-[90vh]">
        <img
          src={backgroundImageGreen}
          alt="City skyline at night"
          className="h-full w-full object-cover"
        />
        <CarouselSpecificContent
        topMessage={"Bionanoaxus."}
        bottomMessage={"Nanotecnología antimicrobiana y fungicida."} 
        />
        <div class="absolute bottom-[200px] ml-[20px]  sm:ml-[100px] z-10">
          <ButtonLight message={"Conoce nuestros productos"} />
        </div>
      </div>

      <div className="m-[0] p-[0] h-[90vh]">
        <img
          src={backgroundImageGreenBlue}
          alt="Colorful artwork"
          className="h-full w-full object-cover"
        />
      </div>
    </Carousel>
  );
};

export default CarouselMain;
