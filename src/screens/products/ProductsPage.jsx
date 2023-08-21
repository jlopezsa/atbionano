// https://www.material-tailwind.com/docs/react/typography

import { Typography } from "@material-tailwind/react";

const ProductsPage = () => {
  return (
    <div class="h-full mt-[80px]">
      <Typography variant="h1">Bionanoaxus</Typography>
      <Typography variant="h2">Producto bionanotecnologico</Typography>
      <Typography variant="h6">
        Alternativa ecológica a las composiciones antimicrobianas tradicionales.
        de especial interés para el tratamiento de agentes patógenos de la
        industria agrícola, así como para desinfección de múltiples materiales
        en la industria de alimentos y textil.
      </Typography>

      <section>
        <Typography variant="h2">Sectores de aplicación</Typography>
        <ul>
          <li>Cosecha, como biopesticida.</li>
          <li>Post cosecha, como biopesticida.</li>
          <li>
            Pecuario, como detergente para reducir la prevalencia de infecciones
            fúngicas y bactericidas en las aves.
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
      </section>

      <section>
        <Typography variant="h2">Beneficios</Typography>
        <Typography variant="h6">
          Potencializa la eficacia en la cinética de acción y efecto fungicida
          usando menores concentraciones de la tecnología debido a la
          nanotecnología empleada en la producción de la composición
          antimicrobiana.
        </Typography>

        <Typography variant="h6">
          Se realiza con modelos de producción más limpia generando agricultura
          sostenible al ser un producto de base biológica y tecnológica.
        </Typography>

        <Typography variant="h6">
          Genera menores tiempos de entrega y costos en los cultivos debido a la
          mitigación del daño directo e indirecto que pueden ocasionar las
          enfermedades a estos
        </Typography>

        <Typography variant="h6">
          Genera un sistema de biocompatibilidad al ser de síntesis biológica
        </Typography>
      </section>

      <section>
        <Typography variant="h2">Oportunidades</Typography>
        <div>
          <Typography variant="h4">OPORTUNIDADES DE MERCADO</Typography>
          <dl>
            <dt>BIOINSUMOS</dt>
            <dd>
              - Ventas 2021: 5.607.593,4 Kg y 730.644 L. Tasa de crecimiento
              interanual promedio: 29,56% para los bioinsumos sólidos y 15,91%
              para los líquidos
            </dd>
            <dt>PECUARIO</dt>
            <dd>
              - Con un mercado potencial de $ 215.217.692 millones de pesos, un
              95,7% alcanzable puesto que corresponde con aves de predios
              tecnificados. *Numero de aves en Colombia: 45’782,312
            </dd>
            <dt>MANUFACTURA (COLCHONES)</dt>
            <dd>
              - Una cuota de mercado aproximada del 12%; en ese sentido,
              considerando que de las validaciones efectuadas se estima un
              consumo del productos asociado a la Tecnología (Bionanoaxus) de 10
              a 16 litros por mes eso supondría que a nivel de industria la
              demanda potencial podría estar en un rango, de por lo menos, unos
              84 a 133 litros por mes.
            </dd>
          </dl>
        </div>

        <div>
          <Typography variant="h4">ESTADO PARA EL NEGOCIO</Typography>
          <Typography variant="h6">
            La tecnología ha sido validada en ambiente real obteniendo datos
            relevantes:
          </Typography>
          <ul>
            <li>
              Eficiencia del 99% en pseudomonas sp, Bacillus sp, Fasarium
              oxysporum.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
