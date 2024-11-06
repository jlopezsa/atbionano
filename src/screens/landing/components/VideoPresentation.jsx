import { Typography } from "@material-tailwind/react"
import React from "react"

const VideoPresentation = () => {
  const videoId = "UuRzqelgtbo" // Reemplaza con tu ID de video
  const url = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className="flex flex-col">
      <Typography variant="h3" className="mb-5 pt-[80px] text-center xl:mb-0">
        ¡Sorpréndete con lo que hacemos!
      </Typography>
      <div className="flex flex-col-reverse items-center justify-center xl:mt-10 xl:flex-row xl:items-start xl:justify-start">
        <div className="aspect-video w-full px-0 pt-5 xl:w-1/2 xl:px-5">
          <iframe
            src={url}
            title="ATBionano description"
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
            className="h-full w-full shadow-[5px_4px_6px_0px_#3CFF00] xl:rounded-xl"
          ></iframe>
        </div>
        <div className="xl:mt-0 xl:w-1/2">
          <Typography
            variant="lead"
            className="px-8 text-justify md:px-10 xl:text-left"
          >
            <b>A&T-BioNano</b> es una empresa innovadora de base
            <b> bionanotecnológica</b>, fundada por dos mujeres visionarias.
            Hace cuatro años, emprendimos un viaje para desarrollar productos
            tecnológicos que revolucionaran la forma en que cuidamos nuestro
            planeta y nuestra salud. Nuestra solución ofrece una alternativa
            sostenible a los productos químicos tradicionales, minimizando el
            impacto negativo en los animales, el medio ambiente y las personas.
            A través de nuestra participación en convocatorias de incubadoras y
            del Ministerio de Ciencia y Tecnología, hemos logrado escalar
            nuestro producto desde la formulación hasta la producción de lotes a
            gran escala.
          </Typography>
          <div className="mx-8 mt-3 rounded-md border-2 border-solid border-green-100 shadow-[7px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
            <Typography variant="lead" className="text-center md:px-2">
              ¡Acompáñanos en este video para conocer el proceso que nos ha
              llevado a desarrollar una solución innovadora que contribuye a un
              futuro más sostenible, en línea con los objetivos de la{" "}
              <a
                href="https://www.un.org/sustainabledevelopment/es/2015/09/la-asamblea-general-adopta-la-agenda-2030-para-el-desarrollo-sostenible/"
                className="text-secondary underline hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agenda 2030
              </a>
              !
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPresentation
