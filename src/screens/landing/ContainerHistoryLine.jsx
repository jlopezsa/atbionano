import { Typography } from "@material-tailwind/react"
import imagePatente from "../../images/callsAndProccesses/logo-patente.png"
import { CardHistory } from "./components/CardHistory"

export const ContainerHistoryLine = () => {
  const exampleData = [
    {
      date: "Enero 2019",
      referenceDate: "2019-01-10",
      actionsByYear: [
        {
          title: "Concepción de la idea",
          description: "Identificamos una oportunidad en el mercado y desarrollamos una propuesta de valor innovadora, alineada con las necesidades del sector y nuestra visión estratégica.",
          imagePath: imagePatente,
        },
      ],
    },
    {
      date: "Enero 2020",
      referenceDate: "2020-01-10",
      actionsByYear: [
        {
          title: "Pruebas invitro",
          description: "Validamos la eficacia y seguridad de nuestra solución en condiciones controladas, obteniendo resultados clave que respaldan su potencial antes de su aplicación en campo.",
          imagePath: imagePatente,
        },
        {
          title: "Pruebas en campo",
          description: "Implementamos la solución en entornos reales para evaluar su desempeño, adaptabilidad y resultados en condiciones operativas, fortaleciendo su validación técnica y comercial.",
          imagePath: imagePatente,
        },
      ],
    },
    {
      date: "Enero 2021",
      referenceDate: "2021-01-10",
      actionsByYear: [
        {
          title: "Patente",
          description: "Protegimos nuestra innovación mediante el registro de patente, asegurando la propiedad intelectual y fortaleciendo la competitividad y proyección comercial del proyecto.",
          imagePath: imagePatente,
        },
      ],
    },
    {
      date: "Enero 2022 - 2024",
      referenceDate: "2022-01-10",
      actionsByYear: [
        {
          title: "Validación del producto",
          description: "Comprobamos la efectividad, estabilidad y aceptación del producto final, garantizando su calidad y cumplimiento con los estándares del mercado.",
          imagePath: imagePatente,
        },
      ],
    },
    {
      date: "Enero 2023 - 2024",
      referenceDate: "2023-01-10",
      actionsByYear: [
        {
          title: "Venta del producto",
          description: "Iniciamos la comercialización, posicionando nuestra solución en el mercado y generando impacto a través de alianzas estratégicas y canales de distribución efectivos.",
          imagePath: imagePatente,
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
        <CardHistory props={item} />
      ))}
    </div>
  )
}
