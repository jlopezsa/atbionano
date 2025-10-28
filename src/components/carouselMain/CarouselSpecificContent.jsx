import { Typography } from "@material-tailwind/react"
import { ButtonLight } from "components/buttons/ButtonLight/ButtonLight"

export const CarouselSpecificContent = ({
  title,
  topMessage,
  bottomMessage,
  image,
  messageButton,
  navigateRoute,
}) => {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="pointer-events-auto absolute left-1/2 top-[10%] w-[92%] max-w-screen-2xl -translate-x-1/2 md:top-[15%]">
        {/* Panel translúcido para mejorar legibilidad */}
        <div className="mx-auto max-w-5xl rounded-2xl bg-black/40 px-6 py-6 text-white backdrop-blur-md">
          <div className="mb-4">
            <Typography variant="h3" className="leading-tight">
              <strong>{title}</strong>
            </Typography>
          </div>

          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            {/* Texto */}
            <div className="max-w-xl">
              <Typography variant="h4" className="text-white">
                <strong>{topMessage}</strong>
              </Typography>
              <Typography variant="lead" className="text-white/90">
                {bottomMessage}
              </Typography>
            </div>

            {/* Imagen */}
            <div className="min-h-[200px] w-full min-w-[250px] max-w-md sm:w-[40%]">
              <img
                src={image}
                alt={topMessage}
                className="rounded-xl shadow-md"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex justify-center sm:justify-start">
            <ButtonLight
              id={`${messageButton.replace(/\s+/g, "-")}-button`}
              message={messageButton}
              navigateRoute={navigateRoute}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselSpecificContent
