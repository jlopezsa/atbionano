 
import { Carousel } from '@material-tailwind/react';
import { ButtonLight } from './../buttons/ButtonLight/ButtonLight';

const CarouselMain = () => {
  return (
    <Carousel className="rounded-sm h-[90vh] w-[100%] absolute z-0 mt-[80px]" loop={true}>
      <div className="m-[0] p-[0] h-[90vh]">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="Beautiful landscape"
          className="h-full w-full object-cover"
        />
        <div class="absolute bottom-[200px] ml-[20px]  sm:ml-[100px] z-10">
          <ButtonLight message={"Conoce más sobre nuestra metodología"}/>
        </div>
      </div>
      <div className="m-[0] p-[0] h-[90vh]">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="City skyline at night"
          className="h-full w-full object-cover"
        />
        <div class="absolute bottom-[200px] ml-[20px]  sm:ml-[100px] z-10">
          <ButtonLight message={"Conoce nuestros productos"}/>
        </div>
      </div>
      <div className="m-[0] p-[0] h-[90vh]">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="Colorful artwork"
          className="h-full w-full object-cover"
        />
      </div>
    </Carousel>
  );
}

export default CarouselMain;