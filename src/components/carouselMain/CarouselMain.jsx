import backgroundImageGreen from "../../images/background_green_geometric.jpg";
import backgroundImageBlack from "../../images/background_green_black.jpg";
import atbionanoPatenteHorizantal from "../../images/atbionano/atbionano-lab-erlen-meyer-edited.jpeg";
import atbionanoProductBionanoaxus from "../../images/atbionano/bionanoaxus-product-edited.jpeg";
import { Carousel, Typography } from "@material-tailwind/react";
import CarouselSpecificContent from "./CarouselSpecificContent";
import { ROUTE_PATENT_PAGE, ROUTE_PRODUCTS_PAGE } from "../../routes/routes";

const CarouselMain = () => {
  return (
    <Carousel
      className="relative rounded-sm w-[100%] z-0 mt-[80px]"
      loop={true}
    >
      <div class="relative">
        <div class="h-[90vh] min-h-[600px] flex flex-row justify-center">
          <img
            src={backgroundImageBlack}
            alt="main background image carousel"
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
            navigateRoute={ROUTE_PATENT_PAGE}
          />
          <div class="absolute bottom-0 left-0">
            <Typography variant="paragraph">
              Imagen de{" "}
              <a href="https://www.freepik.es/vector-gratis/fondo-tecnologia-verde-degradado_21534796.htm#query=background%20green&position=10&from_view=search&track=ais">
                Freepik
              </a>
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative">
        <div class="h-[90vh] min-h-[600px] flex flex-row justify-center">
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
            bottomMessage={
              "Producto con nanotecnología antimicrobiana y fungicida."
            }
            image={atbionanoProductBionanoaxus}
            messageButton={"Conoce nuestros productos"}
            navigateRoute={ROUTE_PRODUCTS_PAGE}
          />
          <div class="absolute bottom-0 left-0">
            <Typography variant="paragraph">
              <a href="https://www.freepik.es/vector-gratis/fondo-geometrico-verde-abstracto_6072246.htm#query=background%20green&position=38&from_view=search&track=ais">
                Imagen de pikisuperstar
              </a>{" "}
              en Freepik
            </Typography>
          </div>
        </div>
      </div>

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
