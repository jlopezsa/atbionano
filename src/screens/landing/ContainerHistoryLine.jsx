import { Typography } from "@material-tailwind/react"
import { CardHistory } from "./components/CardHistory"
import imagePatente from "../../images/callsAndProccesses/logo-patente.png"

export const ContainerHistoryLine = () => {
  const exampleData = [
    {
      date: "Enero 2019",
      referenceDate: "2019-01-10",
      actionsByYear: [
        {
          title: "Concepción de la idea",
          description: "Alguna descripción",
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
          description: "Alguna descripción",
          imagePath: imagePatente,
        },
        {
          title: "Pruebas en campo",
          description: "Alguna descripción para las pruebas en campo",
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
          description: "Alguna descripción",
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
          description: "Alguna descripción",
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
          description: "Alguna descripción",
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
