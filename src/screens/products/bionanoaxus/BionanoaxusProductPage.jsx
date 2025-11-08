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
import bionanoaxusProductImage from "images/atbionano/bionanoaxus-product-edited.jpeg"
import bionanoaxsBottles from "images/products/luca-romano-sSfSsI1szmM-unsplash.jpg"
// import bionanoaxsBottles from "images/products/ohtilly-B8_YF4fjPwo-unsplash.jpg"
// import bionanoaxsBottles from "images/products/chuttersnap-UmncJq4KPcA-unsplash.jpg"
import FeatureScroll from "./components/FeatureScroll"
import { BionanoaxusProductMessages } from "./messages/bionanoaxusProductMessages"

const BionanoaxusProductPage = () => {
  const featureHighlights = [
    {
      title: "Nanoemulsión activa",
      badge: "Liberación prolongada",
      description:
        "Microgotas inferiores a 200 nm que facilitan la penetración y permanencia del agente antimicrobiano en superficies porosas y biológicas.",
      metric: "< 200 nm",
    },
    {
      title: "Base biotecnológica",
      badge: "Origen natural",
      description:
        "Activos obtenidos por síntesis biológica que reducen el impacto ambiental frente a biocidas sintéticos y aumentan la biocompatibilidad.",
      metric: "99% libre de solventes",
    },
    {
      title: "Compatibilidad multisectorial",
      badge: "Industrial",
      description:
        "Formulación estable frente a variaciones de pH y temperatura, pensada para procesos en agro, pecuario y manufactura sin alterar equipos ni materiales.",
      metric: "pH neutro 6.5 ± 0.2",
    },
    {
      title: "Soporte técnico",
      badge: "Escalabilidad",
      description:
        "Protocolos de dosificación, monitoreo microbiológico y acompañamiento para escalar desde pilotos hasta líneas productivas continuas.",
      metric: "+25 plantas intervenidas",
    },
  ]
  return (
    <main className="mt-[80px] h-full" role="main">
      <div
        className="h-[100vh] w-full"
        style={{
          backgroundImage: `url(${bionanoaxsBottles})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
        aria-label="Imagen de fondo con elementos quimicos para el producto Bionanoaxus"
      >
        <div className="h-[100vh] bg-cover bg-fixed bg-center pt-10 sm:h-[600px]">
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
          <div className="flex h-full w-full flex-col items-center justify-evenly text-center">
            <TagWithCircle
              message={"Producto bionanotecnológico — línea industrial"}
            />
            <h1 className="w-full bg-gradient-text bg-clip-text text-6xl font-bold text-transparent sm:text-7xl">
              {BionanoaxusProductMessages.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-3">
              <Tag message={"Tecnología verde"} />
              <Tag message={"Protección natural"} />
              <Tag message={"Uso multisectorial"} />
            </div>
          </div>
        </div>
      </div>

      <div className="my-20"></div>

      <section className="mx-auto mt-10 flex max-w-screen-xl items-center justify-center">
        <div className="flex w-1/2 flex-col items-center justify-center">
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

      <div className="my-20"></div>

      <div className="flex h-20 justify-center">
        <Typography variant="h2">Sectores de aplicación</Typography>
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

      {/* <div className="my-10"></div> */}

      <section
        className="mx-auto mt-24 max-w-screen-xl px-6"
        aria-labelledby="caracteristicas-heading"
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(320px,0.9fr),1.1fr]">
          <div className="space-y-6 pt-10 lg:sticky lg:top-20 lg:self-start">
            <div className="space-y-3">
              <Typography
                variant="h2"
                id="caracteristicas-heading"
                className="mb-4"
              >
                Características del producto
              </Typography>
              <Typography variant="lead">
                Una plataforma bionanotecnológica diseñada para maximizar la
                acción antimicrobiana con una formulación estable y segura para
                múltiples industrias.
              </Typography>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary/80 to-tertiary/80 shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
              <img
                src={bionanoaxusProductImage}
                alt="Envase de Bionanoaxus"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.4em] text-greenPastelLight">
                  Fórmula concentrada
                </p>
                <Typography variant="h4" className="text-white">
                  Tecnología Bionanoaxus
                </Typography>
              </div>
            </div>
            <Typography variant="small" className="text-gray-600">
              Imagen de referencia del prototipo industrial y envase piloto del
              producto.
            </Typography>
          </div>

          <FeatureScroll features={featureHighlights} />
        </div>
      </section>

      <div className="my-10"></div>

      <section className="mx-auto flex max-w-screen-xl flex-col items-center justify-center">
        <Typography variant="h2">Beneficios</Typography>
        <div className="grid grid-cols-1 grid-rows-4 px-10 sm:grid sm:grid-cols-2 sm:grid-rows-2">
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
        <div className="text-tertiary">
          <Typography variant="small">
            <a href="https://www.freepik.com/author/myriammira">
              Image by myriammira
            </a>{" "}
            on Freepik
          </Typography>
        </div>
      </section>

      <div className="my-10"></div>

      <section
        className="mx-auto mt-24 max-w-screen-xl px-6"
        aria-labelledby="oportunidades-heading"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-secondary to-tertiary p-[1px] shadow-[0_8px_28px_rgba(0,0,0,0.12)]">
          <div className="relative rounded-3xl bg-white/90 px-8 py-12 text-left shadow-sm backdrop-blur-md">
            <Typography
              variant="h2"
              className="mb-8 text-center"
              id="oportunidades-heading"
            >
              Oportunidades
            </Typography>

            <div className="grid auto-rows-auto grid-cols-1 gap-6">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="md:grid md:grid-cols-[minmax(0,12rem),1fr] md:items-start md:gap-6">
                  <div className="mb-4 md:mb-0">
                    <Typography variant="h4" className="text-primary">
                      De mercado
                    </Typography>
                  </div>
                  <dl className="space-y-4 text-base">
                    <div>
                      <dt>
                        <Typography variant="h5">BIOINSUMOS</Typography>
                      </dt>
                      <Typography variant="lead" className="text-gray-700">
                        Ventas 2021: 5.607.593,4 Kg y 730.644 L. Tasa de
                        crecimiento interanual promedio: 29,56% para los
                        bioinsumos sólidos y 15,91% para los líquidos
                      </Typography>
                    </div>
                    <div>
                      <dt>
                        <Typography variant="h5">PECUARIO</Typography>
                      </dt>
                      <Typography variant="lead" className="text-gray-700">
                        Con un mercado potencial de $ 215.217.692 millones de
                        pesos, un 95,7% alcanzable puesto que corresponde con
                        aves de predios tecnificados. *Numero de aves en
                        Colombia: 45’782,312
                      </Typography>
                    </div>
                    <div>
                      <dt>
                        <Typography variant="h5">
                          MANUFACTURA (COLCHONES)
                        </Typography>
                      </dt>
                      <Typography variant="lead" className="text-gray-700">
                        Una cuota de mercado aproximada del 12%; en ese sentido,
                        considerando que de las validaciones efectuadas se
                        estima un consumo del productos asociado a la Tecnología
                        (Bionanoaxus) de 10 a 16 litros por mes eso supondría
                        que a nivel de industria la demanda potencial podría
                        estar en un rango, de por lo menos, unos 84 a 133 litros
                        por mes.
                      </Typography>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="md:grid md:grid-cols-[minmax(0,12rem),1fr] md:items-start md:gap-6">
                  <div className="mb-4 md:mb-0">
                    <Typography variant="h4" className="text-primary">
                      Para el negocio
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="lead" className="text-gray-700">
                      Eficiencia del 99.99% en{" "}
                      <span className="italic">
                        Pseudomonas sp, Salmonella sp, E. coli, Bacillus sp,
                        Fusarium oxysporum, Botrytis sp
                      </span>
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 -z-10 opacity-10">
              <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-secondary blur-2xl"></div>
              <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-tertiary blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="my-20"></div>
    </main>
  )
}

export default BionanoaxusProductPage
