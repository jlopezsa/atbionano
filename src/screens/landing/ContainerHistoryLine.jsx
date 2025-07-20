import { Typography } from "@material-tailwind/react"
import { v4 as uuidv4 } from "uuid"
import { CardHistory } from "./components/CardHistory"

export const ContainerHistoryLine = () => {
  const exampleData = [
    {
      id: uuidv4(),
      date: "2019",
      referenceDate: "2019-01-10",
      actionsByYear: [
        {
          id: uuidv4(),
          title: "Concepción de la idea",
          description:
            "Vimos una oportunidad y decidimos transformar el desafío en innovación. Así nació nuestra propuesta basada en bionanotecnología, con el propósito de ofrecer soluciones sostenibles y de alto impacto, alineadas con las necesidades reales del sector y una visión de futuro.",
          imagePath: "atbionano/begin_microscopy_eqkhhr",
        },
      ],
    },
    {
      id: uuidv4(),
      date: "2020",
      referenceDate: "2020-01-10",
      actionsByYear: [
        {
          id: uuidv4(),
          title: "Validación en laboratorio",
          description:
            "Dimos el primer paso hacia la transformación: evaluamos nuestra solución en condiciones controladas, demostrando su eficacia y seguridad con resultados que consolidaron su potencial para entornos reales.",
          imagePath: "atbionano/invitro_test_atygsa",
        },
        {
          id: uuidv4(),
          title: "Pruebas en campo",
          description:
            "Llevamos nuestra solución del laboratorio al entorno operativo, implementándola en empresas como Capiro (industria agrícola), Coatings (industria de recubrimientos). Evaluamos su desempeño, adaptabilidad y resultados en condiciones reales, consolidando su validación técnica y abriendo camino para su adopción comercial.",
          imagePath: "atbionano/field_test_s7hhza",
        },
      ],
    },
    {
      id: uuidv4(),
      date: "2021",
      referenceDate: "2021-01-10",
      actionsByYear: [
        {
          id: uuidv4(),
          title: "Patente",
          description:
            "Dimos un paso clave en nuestra estrategia de sostenibilidad y liderazgo tecnológico: registramos la patente de nuestra solución, con el apoyo de Tecnova, Ministerio de Ciencia y Tecnología (programa Crearlo no es suficiente), asegurando su propiedad intelectual y fortaleciendo su posicionamiento en el mercado nacional.",
          imagePath: "atbionano/mintic-crearlo-no-es-suficiente_ozg7nn",
        },
      ],
    },
    {
      id: uuidv4(),
      date: "2022 - 2023",
      referenceDate: "2022-01-10",
      actionsByYear: [
        {
          id: uuidv4(),
          title: "Validación del producto",
          description:
            "Consolidamos nuestro desarrollo al comprobar la efectividad, estabilidad y aceptación del producto en su versión final. A través de pruebas técnicas, sensoriales y de desempeño, garantizamos su calidad, seguridad y cumplimiento con los estándares exigidos por el mercado, fortaleciendo así su potencial de escalabilidad y comercialización.",
          imagePath: "atbionano/validation-ai-product_01",
        },
      ],
    },
    {
      id: uuidv4(),
      date: "2024 - 2025",
      referenceDate: "2023-01-10",
      actionsByYear: [
        {
          id: uuidv4(),
          title: "Venta del producto",
          description:
            "Lanzamos al mercado nuestras soluciones Bionanoaxus (BNX) y Z-Klean, iniciando su distribución a través de alianzas estratégicas y canales efectivos. Este paso marca el comienzo de su introducción al mercado y del proceso de posicionamiento en los sectores objetivo, avanzando con una visión clara de innovación con propósito.",
          imagePath: "atbionano/bionanoaxus-product-01",
        },
      ],
    },
  ]
  return (
    <div>
      <Typography variant="h3" className="mb-5 pt-[80px] text-center">
        Conoce nuestro proceso
      </Typography>
      {exampleData.map((item) => (
        <CardHistory props={item} key={item.id} />
      ))}
    </div>
  )
}
