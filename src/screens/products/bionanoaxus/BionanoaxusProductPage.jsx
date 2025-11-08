// https://www.material-tailwind.com/docs/react/typography
// template: https://es.squarespace.com/plantillas/sackett-fluid-demo-es

import { Typography } from "@material-tailwind/react"
import { ApplicationProducts } from "components/cards/applicationSectors/ApplicationsProducts"
import ItemListWithBackground from "components/cards/itemListWithBackground/ItemListWithBackground"
import { ApplicationsMessages } from "configs/applicationsMessages"
import circleVinheta from "images/icons/circle-vinheta.jpeg"
// import bionanoaxusPetri from "images/products/petri.jpeg"
import { Tag } from "components/tags/Tag"
import { TagWithCircle } from "components/tags/TagWithCircle"
import bionanoaxsBottles from "images/products/ohtilly-B8_YF4fjPwo-unsplash.jpg"
// import bionanoaxsBottles from "images/products/chuttersnap-UmncJq4KPcA-unsplash.jpg"
import { BionanoaxusProductMessages } from "./messages/bionanoaxusProductMessages"

const BionanoaxusProductPage = () => {
  return (
    <main class="mt-[80px] h-full" role="main">
      <div
        class="h-[100vh] w-full"
        style={{
          backgroundImage: `url(${bionanoaxsBottles})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
        aria-label="Imagen de fondo con elementos quimicos para el producto Bionanoaxus"
      >
        <div class="h-[100vh] bg-cover bg-fixed bg-center pt-10 sm:h-[600px]">
          <Typography variant="small">
            Foto de{" "}
            <a href="https://unsplash.com/es/@cdc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              CDC
            </a>{" "}
            en{" "}
            <a href="https://unsplash.com/es/fotos/y--8fqaK1kY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </Typography>
          <div class="flex h-full w-full flex-col items-center justify-evenly text-center">
            <TagWithCircle
              message={"Producto bionanotecnológico — línea industrial"}
            />
            <h1 class="w-full bg-gradient-text bg-clip-text text-6xl font-bold text-transparent sm:text-7xl">
              {BionanoaxusProductMessages.title}
            </h1>
            <div class="flex flex-wrap justify-center gap-3">
              <Tag message={"Tecnología verde"} />
              <Tag message={"Protección natural"} />
              <Tag message={"Uso multisectorial"} />
            </div>
          </div>
        </div>
      </div>

      <div class="my-20"></div>

      <section class="mx-auto mt-10 flex max-w-screen-xl items-center justify-center">
        <div class="flex w-1/2 flex-col items-center justify-center">
          <div style={{ textAlign: "center" }}>
            <Typography variant="h3">Producto bionanotecnológico</Typography>
          </div>
          <div style={{ textAlign: "center" }}>
            <Typography variant="lead">
              {BionanoaxusProductMessages.description}
            </Typography>
          </div>
        </div>
      </section>

      <div class="my-20"></div>

      <div class="flex h-20 justify-center">
        <Typography variant="h2" class="color text-base">
          Sectores de aplicación
        </Typography>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        <ApplicationProducts
          title={ApplicationsMessages.cosecha.title}
          description={ApplicationsMessages.cosecha.description}
          imagePath={ApplicationsMessages.cosecha.imagePath}
          credits={ApplicationsMessages.cosecha.credits}
        />
        <ApplicationProducts
          title={ApplicationsMessages.poscosecha.title}
          description={ApplicationsMessages.poscosecha.description}
          imagePath={ApplicationsMessages.poscosecha.imagePath}
          isReadMoreOption={true}
          urlLink="https://elpalmicultor.com/biomasa-palma-reducir-crecimiento-microorganismos/"
          credits={ApplicationsMessages.poscosecha.credits}
        />
        <ApplicationProducts
          title={ApplicationsMessages.pecuario.title}
          description={ApplicationsMessages.pecuario.description}
          imagePath={ApplicationsMessages.pecuario.imagePath}
          credits={ApplicationsMessages.pecuario.credits}
        />
        <ApplicationProducts
          title={ApplicationsMessages.colchones.title}
          description={ApplicationsMessages.colchones.description}
          imagePath={ApplicationsMessages.colchones.imagePath}
          credits={ApplicationsMessages.colchones.credits}
        />
        <ApplicationProducts
          title={ApplicationsMessages.construccion.title}
          description={ApplicationsMessages.construccion.description}
          imagePath={ApplicationsMessages.construccion.imagePath}
          credits={ApplicationsMessages.construccion.credits}
        />
      </div>

      <div class="my-10"></div>

      <section class="mx-auto flex max-w-screen-xl flex-col items-center justify-center">
        <Typography variant="h2" class="color text-base">
          Beneficios
        </Typography>
        <div class="grid grid-cols-1 grid-rows-4 px-10 sm:grid sm:grid-cols-2 sm:grid-rows-2">
          <ItemListWithBackground
            backgroundImageList={circleVinheta}
            description={
              "Potencializa la eficacia en la cinética de acción y efecto fungicida usando menores concentraciones de la tecnología debido a la nanotecnología empleada en la producción de la composición antimicrobiana."
            }
          />
          <ItemListWithBackground
            backgroundImageList={circleVinheta}
            description={
              "Se realiza con modelos de producción más limpia generando agricultura sostenible al ser un producto de base biológica y tecnológica."
            }
          />
          <ItemListWithBackground
            backgroundImageList={circleVinheta}
            description={
              "Genera menores tiempos de entrega y costos en los cultivos debido a la mitigación del daño directo e indirecto que pueden ocasionar las enfermedades a estos."
            }
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

      <section>
        <div class="text-center">
          <Typography variant="h2">Oportunidades</Typography>
        </div>

        <div class="mx-auto flex max-w-screen-xl flex-col items-center justify-center sm:flex-row">
          <div class="sm:w-1/4">
            <Typography variant="h4">De mercado</Typography>
          </div>
          <div class="w-3/4">
            <dl class="mt-5 list-disc text-base">
              <dt>
                <Typography variant="h5">BIOINSUMOS</Typography>
              </dt>
              <dd>
                - Ventas 2021: 5.607.593,4 Kg y 730.644 L. Tasa de crecimiento
                interanual promedio: 29,56% para los bioinsumos sólidos y 15,91%
                para los líquidos
              </dd>
              <dt>
                <Typography variant="h5">PECUARIO</Typography>
              </dt>
              <dd>
                - Con un mercado potencial de $ 215.217.692 millones de pesos,
                un 95,7% alcanzable puesto que corresponde con aves de predios
                tecnificados. *Numero de aves en Colombia: 45’782,312
              </dd>
              <dt>
                <Typography variant="h5">MANUFACTURA (COLCHONES)</Typography>
              </dt>
              <dd>
                - Una cuota de mercado aproximada del 12%; en ese sentido,
                considerando que de las validaciones efectuadas se estima un
                consumo del productos asociado a la Tecnología (Bionanoaxus) de
                10 a 16 litros por mes eso supondría que a nivel de industria la
                demanda potencial podría estar en un rango, de por lo menos,
                unos 84 a 133 litros por mes.
              </dd>
            </dl>
          </div>
        </div>

        <div class="my-10"></div>

        <div class="mx-auto flex max-w-screen-xl flex-col items-center align-middle sm:flex-row">
          <div class="sm:w-1/4">
            <Typography variant="h4">Para el negocio</Typography>
          </div>
          <div class="w-3/4">
            <ul class="text-base">
              <li>
                Eficiencia del 99.99% en{" "}
                <span class="italic">
                  Pseudomonas sp, Salmonella sp, E. coli, Bacillus sp, Fusarium
                  oxysporum, Botrytis sp
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div class="my-20"></div>
    </main>
  )
}

export default BionanoaxusProductPage
