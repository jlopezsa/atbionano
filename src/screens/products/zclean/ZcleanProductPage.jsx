// https://www.material-tailwind.com/docs/react/typography
// template: https://es.squarespace.com/plantillas/sackett-fluid-demo-es

import { Typography } from "@material-tailwind/react";
import zcleanBackground from "images/products/brooke-lark-08bOYnH_r_E-zclean.jpg";
import circleVinheta from "images/icons/circle-vinheta.jpeg";
import { ApplicationProducts } from "components/cards/applicationSectors/ApplicationsProducts";
import ItemListWithBackground from "components/cards/itemListWithBackground/ItemListWithBackground";

const ZcleanProductPage = () => {
  return (
    <div class="h-full mt-[80px]">
      <div class="w-[100vw]">
        <div
          class="w-full h-[400px] bg-fixed"
          style={{
            backgroundImage: `url(${zcleanBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
        >
          <Typography variant="small">
            <div class="w-full flex justify-end">
              Foto de{" "}
              <a href="https://unsplash.com/es/@brookelark?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Brooke Lark
              </a>{" "}
              en{" "}
              <a href="https://unsplash.com/es/fotos/variedad-de-frutas-en-rodajas-08bOYnH_r_E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Unsplash
              </a>
            </div>
          </Typography>
          <div class="w-full h-full flex justify-center items-center">
            <p class="text-6xl sm:text-7xl font-bold bg-gradient-text bg-clip-text text-transparent">
              Z-Clean
            </p>
          </div>
        </div>
        <section class="flex mx-auto max-w-screen-xl items-center justify-center mt-10">
          <div class="w-1/2 flex flex-col justify-center items-center">
            <div style={{ textAlign: "center" }}>
              <Typography variant="h3">Producto bionanotecnologico</Typography>
            </div>
            <div style={{ textAlign: "center" }}>
              <Typography variant="lead">
                Alternativa ecológica a las composiciones antimicrobianas
                tradicionales de especial interés para el tratamiento de agentes
                patógenos de la industria agrícola, así como para desinfección
                de múltiples materiales en la industria de alimentos y textil.
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
            description={
              "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona."
            }
            title={"Frutas y Verduras"}
          />
          <ApplicationProducts
            description={
              "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona."
            }
            title={"Superficies"}
          />
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
          <Typography variant="h2">Adquisición de productos</Typography>
        </div>

        <div class="flex flex-col sm:flex-row mx-auto max-w-screen-xl items-center justify-center">
          <div class="sm:w-1/4">
            <Typography variant="h4">De mercado</Typography>
          </div>
          <div class="w-3/4">
            <dl class="text-base mt-5 list-disc">
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

        <div class="flex flex-col sm:flex-row mx-auto max-w-screen-xl items-center align-middle">
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
    </div>
  );
};

export default ZcleanProductPage;
