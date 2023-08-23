// https://www.material-tailwind.com/docs/react/typography
// template: https://es.squarespace.com/plantillas/sackett-fluid-demo-es

import { Typography } from "@material-tailwind/react";
import bionanoaxusPetri from "../../images/products/petri.jpeg";

const ProductsPage = () => {
  return (
    <div class="h-full mt-[90px]">
      <div class="w-[100vw]">
        <div
          class="w-full h-[400px] bg-fixed"
          style={{
            backgroundImage: `url(${bionanoaxusPetri})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
        >
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
          <div class="w-full h-full flex justify-center items-center">
            <p class="text-7xl font-bold text-white">Bionanoaxus</p>
          </div>
        </div>
        <section class="flex mx-auto max-w-screen-xl items-center justify-center mt-10">
          <div class="w-1/2 flex flex-col justify-center items-center">
            <Typography variant="h3">Producto bionanotecnologico</Typography>
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

      {/* <div class="w-[100vw]">
        <section class="flex flex-row mx-auto max-w-screen-xl items-center justify-center">
          <div class="w-1/2 pr-20">
            <Typography variant="h1" class="color text-base">
              Bionanoaxus
            </Typography>
            <Typography variant="h3">Producto bionanotecnologico</Typography>
            <Typography variant="paragraph">
              Alternativa ecológica a las composiciones antimicrobianas
              tradicionales de especial interés para el tratamiento de agentes
              patógenos de la industria agrícola, así como para desinfección de
              múltiples materiales en la industria de alimentos y textil.
            </Typography>
          </div>
          <div class="w-1/2 h-[200px]">
            <img
              src={bionanoaxusPetri}
              alt="Beautiful landscape"
              className="object-cover w-full h-full"
            />
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
          </div>
        </section>
      </div> */}

      <div class="my-20"></div>

      <section class="flex flex-row mx-auto max-w-screen-xl items-center justify-center">
        <div class="w-1/2"></div>
        <div class="w-1/2">
          <Typography variant="h2" class="color text-base">
            Sectores de aplicación
          </Typography>
          <ul class="text-base mt-5">
            <li>Cosecha, como biopesticida.</li>
            <li>Post cosecha, como biopesticida.</li>
            <li>
              Pecuario, como detergente para reducir la prevalencia de
              infecciones fúngicas y bactericidas en las aves.
            </li>
            <li>
              Industria de fabricación de Colchones, como agente antifúngico y
              bactericida.
            </li>
            <li>
              Construcción, como aditivo para reducir el desarrollo de hongos en
              las estructuras.
            </li>
          </ul>
        </div>
      </section>

      <div class="my-10"></div>

      <section class="flex flex-row mx-auto max-w-screen-xl items-center justify-center">
        <div class="w-1/2">
          <Typography variant="h2" class="color text-base">
            Beneficios
          </Typography>
          <ul class="text-base mt-5">
            <li>
              Potencializa la eficacia en la cinética de acción y efecto
              fungicida usando menores concentraciones de la tecnología debido a
              la nanotecnología empleada en la producción de la composición
              antimicrobiana.
            </li>
            <li>
              Se realiza con modelos de producción más limpia generando
              agricultura sostenible al ser un producto de base biológica y
              tecnológica.
            </li>
            <li>
              Genera menores tiempos de entrega y costos en los cultivos debido
              a la mitigación del daño directo e indirecto que pueden ocasionar
              las enfermedades a estos
            </li>
            <li>
              Genera un sistema de biocompatibilidad al ser de síntesis
              biológica
            </li>
          </ul>
        </div>
        <div class="w-1/2"></div>
      </section>

      <div class="my-10"></div>

      <section>
        <div class="text-center">
          <Typography variant="h2">Oportunidades</Typography>
        </div>

        <div class="flex flex-row mx-auto max-w-screen-xl items-center justify-center">
          <div class="w-1/2">
            <Typography variant="h4">Oportunidades de mercado</Typography>
          </div>
          <div class="w-1/2">
            <dl class="text-base mt-5">
              <dt>BIOINSUMOS</dt>
              <dd>
                - Ventas 2021: 5.607.593,4 Kg y 730.644 L. Tasa de crecimiento
                interanual promedio: 29,56% para los bioinsumos sólidos y 15,91%
                para los líquidos
              </dd>
              <dt>PECUARIO</dt>
              <dd>
                - Con un mercado potencial de $ 215.217.692 millones de pesos,
                un 95,7% alcanzable puesto que corresponde con aves de predios
                tecnificados. *Numero de aves en Colombia: 45’782,312
              </dd>
              <dt>MANUFACTURA (COLCHONES)</dt>
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

        <div class="flex flex-row mx-auto max-w-screen-xl items-center justify-center">
          <div class="w-1/2">
            <Typography variant="h4">Estado para el negocio</Typography>
          </div>
          <div class="w-1/2">
            <ul class="text-base mt-5">
              <li>
                Eficiencia del 99% en pseudomonas sp, Bacillus sp, Fasarium
                oxysporum.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div class="my-20"></div>
    </div>
  );
};

export default ProductsPage;
