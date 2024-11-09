import { Typography } from "@material-tailwind/react"
import { CardHistory } from "./components/CardHistory"
import imagePatente from "../../images/callsAndProccesses/logo-patente.png"

export const ContainerHistoryLine = () => {
  const exampleData = [
    {
      date: "Enero 2019",
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
      <Typography variant="h3" className="pt-[80px] text-center">
        Conoce nuestro proceso
      </Typography>
      {exampleData.map((item) => (
        <CardHistory props={item} />
      ))}
    </div>
  )
}
