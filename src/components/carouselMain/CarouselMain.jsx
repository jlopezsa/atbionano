import { Carousel, Typography } from "@material-tailwind/react"
import backgroundImageGreen from "images/ai-hierba-fresca.jpg"
import atbionanoPatenteHorizantal from "images/atbionano/atbionano-lab-erlen-meyer-edited.jpeg"
import atbionanoProductBionanoaxus from "images/atbionano/bionanoaxus-product-edited.jpeg"
import backgroundImageBlack from "images/hierba-verde.jpg"
import {
  ROUTE_BIONANOAXUS_PRODUCT_PAGE,
  ROUTE_PATENT_PAGE,
} from "../../routes/routes"
import CarouselSpecificContent from "./CarouselSpecificContent"

const CarouselMain = () => {
  return (
    <Carousel
      className="relative z-0 mt-[80px] w-[100%] rounded-sm"
      loop={true}
    >
      <div class="relative">
        <div class="flex h-[90vh] min-h-[600px] flex-row justify-center">
          <img
            src={backgroundImageBlack}
            alt="main background carousel"
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
              <a
                href="https://www.freepik.es/foto-gratis/fondo-hierba-verde_26979058.htm#fromView=image_search_similar&page=1&position=0&uuid=9125a8e4-fb5b-4f19-9fa5-082687b9c678&query=naturaleza+pasto+rocio+fondo+verde"
                target="_blank"
                rel="noopener noreferrer"
              >
                Diseñado por freepik
              </a>
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative">
        <div class="flex h-[90vh] min-h-[600px] flex-row justify-center">
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
            navigateRoute={ROUTE_BIONANOAXUS_PRODUCT_PAGE}
          />
          <div class="absolute bottom-0 left-0">
            <Typography variant="paragraph">
              <div>
                <a
                  href="https://www.freepik.es/imagen-ia-gratis/hierba-fresca-gotas-rocio-imagen-generada-ia_43066153.htm#fromView=image_search&page=4&position=1&uuid=bb1f7b6c-c33c-40cd-bade-72139a49fd88"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Imagen de Freepik
                </a>
              </div>
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  )
}

export default CarouselMain
