import backgroundImageGreen from "../../images/background_green_geometric.jpg";
import backgroundImageGreenBlue from "../../images/background_green_blue.jpg";
import backgroundImageBlack from "../../images/background_green_black.jpg";
import { Carousel } from '@material-tailwind/react';
import { ButtonLight } from './../buttons/ButtonLight/ButtonLight';

const CarouselMain = () => {
  return (
    <Carousel className="rounded-sm h-[90vh] w-[100%] absolute z-0 mt-[80px]" loop={true}>
      <div className="m-[0] p-[0] h-[90vh]">
        <img
          src={backgroundImageBlack}
          alt="Beautiful landscape"
          className="h-full w-full object-cover"
        />
        <div class="absolute bottom-[200px] start-[10px]  sm:start-[100px] z-10">
          <ButtonLight message={"Conoce más sobre nuestra tecnología patentada"}/>
        </div>
      </div>
      <div className="m-[0] p-[0] h-[90vh]">
        <img
          src={backgroundImageGreen}
          alt="City skyline at night"
          className="h-full w-full object-cover"
        />
        <div class="absolute bottom-[200px] ml-[20px]  sm:ml-[100px] z-10">
          <ButtonLight message={"Conoce nuestros productos"}/>
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
}

export default CarouselMain;