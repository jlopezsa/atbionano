// https://www.material-tailwind.com/docs/react/typography
// template: https://es.squarespace.com/plantillas/sackett-fluid-demo-es

import { Typography } from "@material-tailwind/react"
import { ApplicationProducts } from "components/cards/applicationSectors/ApplicationsProducts"
import ItemListWithBackground from "components/cards/itemListWithBackground/ItemListWithBackground"
import circleVinheta from "images/icons/circle-vinheta.jpeg"
import zcleanBackground from "images/products/brooke-lark-08bOYnH_r_E-zclean.jpg"
import FruitsZKlean from "./images/Applications/FruitsZKlean"
import { ZkleanMessages } from "./messages/zkleanMessages"

const ZcleanProductPage = () => {
  return (
    <div class="mt-[80px] h-full">
      <div class="w-[100vw]">
        <div
          class="h-[400px] w-full bg-fixed"
          style={{
            backgroundImage: `url(${zcleanBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
        >
          <Typography variant="small">
            <div class="flex w-full justify-end">
              {ZkleanMessages.mainContent.imageCredits}
            </div>
          </Typography>
          <div class="flex h-full w-full items-center justify-center">
            <p class="bg-gradient-text bg-clip-text text-6xl font-bold text-transparent sm:text-7xl">
              Z-KLEAN
            </p>
          </div>
        </div>
        <section class="mx-auto mt-10 flex max-w-screen-xl items-center justify-center">
          <div class="flex w-1/2 flex-col items-center justify-center">
            <div style={{ textAlign: "center" }}>
              <Typography variant="h3">
                {ZkleanMessages.mainContent.subtitle}
              </Typography>
            </div>
            <div style={{ textAlign: "center" }}>
              <Typography variant="lead">
                {ZkleanMessages.mainContent.paragraphOne}
              </Typography>
            </div>
          </div>
        </section>
      </div>

      <div class="my-20"></div>

      <div class="my-20"></div>

      <div class="flex h-20 justify-center">
        <Typography variant="h2" class="color text-base">
          Aplicaciones
        </Typography>
      </div>
      <div class="fmx-auto w-[100vw]">
        <div class="flex flex-row flex-wrap justify-evenly">
          <ApplicationProducts
            description={ZkleanMessages.applicationFruits.description}
            title={ZkleanMessages.applicationFruits.title}
            credits={ZkleanMessages.applicationFruits.imageCredits}
          >
            <FruitsZKlean
              imagePath={ZkleanMessages.applicationFruits.imagePath}
            />
          </ApplicationProducts>
          <ApplicationProducts
            description={ZkleanMessages.applicationSurface.description}
            title={ZkleanMessages.applicationSurface.title}
            credits={ZkleanMessages.applicationSurface.imageCredits}
          >
            <FruitsZKlean
              imagePath={ZkleanMessages.applicationSurface.imagePath}
            />
          </ApplicationProducts>
        </div>
      </div>

      <div class="my-10"></div>

      <section class="mx-auto flex max-w-screen-xl flex-col items-center justify-center">
        <Typography variant="h2" class="color text-base">
          Beneficios
        </Typography>
        <div class="grid grid-cols-1 grid-rows-4 px-10 sm:grid sm:grid-cols-2 sm:grid-rows-2">
          <ItemListWithBackground
            backgroundImageList={circleVinheta}
            description={"No oxida superficies"}
          />
          <ItemListWithBackground
            backgroundImageList={circleVinheta}
            description={"No genera gases"}
          />
          <ItemListWithBackground
            backgroundImageList={circleVinheta}
            description={"No irrita la piel"}
          />
          <ItemListWithBackground
            backgroundImageList={circleVinheta}
            description={
              "Genera un sistema de biocompatibilidad al ser de síntesis biológica."
            }
          />
        </div>
        <div class="text-tertiary">
          <Typography variant="small">
            <a href="https://www.freepik.com/author/myriammira">
              Image by myriammira
            </a>{" "}
            on Freepik
          </Typography>
        </div>
      </section>

      <div class="my-10"></div>

      <div class="my-20"></div>
    </div>
  )
}

export default ZcleanProductPage
