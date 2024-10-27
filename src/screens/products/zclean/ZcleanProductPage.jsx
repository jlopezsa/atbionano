// https://www.material-tailwind.com/docs/react/typography
// template: https://es.squarespace.com/plantillas/sackett-fluid-demo-es

import { Typography } from '@material-tailwind/react';
import zcleanBackground from 'images/products/brooke-lark-08bOYnH_r_E-zclean.jpg';
import circleVinheta from 'images/icons/circle-vinheta.jpeg';
import { ApplicationProducts } from 'components/cards/applicationSectors/ApplicationsProducts';
import ItemListWithBackground from 'components/cards/itemListWithBackground/ItemListWithBackground';
import FruitsZKlean from './images/Applications/FruitsZKlean';
import { ZkleanMessages } from './messages/zkleanMessages';

const ZcleanProductPage = () => {
  return (
    <div class="h-full mt-[80px]">
      <div class="w-[100vw]">
        <div
          class="w-full h-[400px] bg-fixed"
          style={{
            backgroundImage: `url(${zcleanBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          }}
        >
          <Typography variant="small">
            <div class="w-full flex justify-end">
              {ZkleanMessages.mainContent.imageCredits}
            </div>
          </Typography>
          <div class="w-full h-full flex justify-center items-center">
            <p class="text-6xl sm:text-7xl font-bold bg-gradient-text bg-clip-text text-transparent">
              Z-KLEAN
            </p>
          </div>
        </div>
        <section class="flex mx-auto max-w-screen-xl items-center justify-center mt-10">
          <div class="w-1/2 flex flex-col justify-center items-center">
            <div style={{ textAlign: 'center' }}>
              <Typography variant="h3">
                {ZkleanMessages.mainContent.subtitle}
              </Typography>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Typography variant="lead">
                {ZkleanMessages.mainContent.paragraphOne}
              </Typography>
            </div>
          </div>
        </section>
      </div>

      <div class="my-20"></div>

      <div class="my-20"></div>

      <div class="flex justify-center h-20">
        <Typography variant="h2" class="color text-base">
          Aplicaciones
        </Typography>
      </div>
      {/* <div class="bg-gradient-to-b from-green-50 to-green-900 bg-fixed"> // TODO: verificar si se deja el fondo verde */}
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
      {/* </div> */}

      <div class="my-10"></div>

      <section class="flex flex-col mx-auto max-w-screen-xl items-center justify-center">
        <Typography variant="h2" class="color text-base">
          Beneficios
        </Typography>
        <div class="grid grid-rows-4 grid-cols-1 sm:grid sm:grid-rows-2 sm:grid-cols-2 px-10">
          <ItemListWithBackground
            backgroundImageList={circleVinheta}
            description={'No oxida superficies'}
          />
          <ItemListWithBackground
            backgroundImageList={circleVinheta}
            description={'No genera gases'}
          />
          <ItemListWithBackground
            backgroundImageList={circleVinheta}
            description={'No irrita la piel'}
          />
          <ItemListWithBackground
            backgroundImageList={circleVinheta}
            description={
              'Genera un sistema de biocompatibilidad al ser de síntesis biológica.'
            }
          />
        </div>
        <div class="text-tertiary">
          <Typography variant="small">
            <a href="https://www.freepik.com/author/myriammira">
              Image by myriammira
            </a>{' '}
            on Freepik
          </Typography>
        </div>
      </section>

      <div class="my-10"></div>

      <div class="my-20"></div>
    </div>
  );
};

export default ZcleanProductPage;
