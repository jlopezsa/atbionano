import { Typography } from "@material-tailwind/react"
import { v4 as uuidv4 } from "uuid"
import { CardHistory } from "./components/CardHistory"

export const ContainerHistoryLine = () => {
  const exampleData = [
    {
      id: uuidv4(),
      date: "Enero 2019",
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
      date: "Enero 2020",
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
            "Implementamos la solución en entornos reales para evaluar su desempeño, adaptabilidad y resultados en condiciones operativas, fortaleciendo su validación técnica y comercial.",
          imagePath: "atbionano/field_test_s7hhza",
        },
      ],
    },
    {
      id: uuidv4(),
      date: "Enero 2021",
      referenceDate: "2021-01-10",
      actionsByYear: [
        {
          id: uuidv4(),
          title: "Patente",
          description:
            "Protegimos nuestra innovación mediante el registro de patente, asegurando la propiedad intelectual y fortaleciendo la competitividad y proyección comercial del proyecto.",
          imagePath: "atbionano/begin_microscopy_eqkhhr",
        },
      ],
    },
    {
      id: uuidv4(),
      date: "Enero 2022 - 2024",
      referenceDate: "2022-01-10",
      actionsByYear: [
        {
          id: uuidv4(),
          title: "Validación del producto",
          description:
            "Comprobamos la efectividad, estabilidad y aceptación del producto final, garantizando su calidad y cumplimiento con los estándares del mercado.",
          imagePath: "atbionano/begin_microscopy_eqkhhr",
        },
      ],
    },
    {
      id: uuidv4(),
      date: "Enero 2023 - 2024",
      referenceDate: "2023-01-10",
      actionsByYear: [
        {
          id: uuidv4(),
          title: "Venta del producto",
          description:
            "Iniciamos la comercialización, posicionando nuestra solución en el mercado y generando impacto a través de alianzas estratégicas y canales de distribución efectivos.",
          imagePath: "atbionano/begin_microscopy_eqkhhr",
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
