import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import React from "react"
import { useSwipeable } from "react-swipeable"

// Assets
import backgroundImageGreen from "images/ai-hierba-fresca.jpg"
import atbionanoPatenteHorizantal from "images/atbionano/atbionano-lab-erlen-meyer-edited.jpeg"
import atbionanoProductBionanoaxus from "images/atbionano/bionanoaxus-product-edited.jpeg"
import backgroundImageBlack from "images/hierba-verde.jpg"

// Rutas
import {
  ROUTE_BIONANOAXUS_PRODUCT_PAGE,
  ROUTE_PATENT_PAGE,
} from "../../routes/routes"
import CarouselSpecificContent from "./CarouselSpecificContent"

const AUTOPLAY_MS = 6000 // 6s

export const CarouselMain = () => {
  const slides = React.useMemo(
    () => [
      {
        id: 0,
        bg: backgroundImageBlack,
        creditHref:
          "https://www.freepik.es/foto-gratis/fondo-hierba-verde_26979058.htm#fromView=image_search_similar&page=1&position=0&uuid=9125a8e4-fb5b-4f19-9fa5-082687b9c678&query=naturaleza+pasto+rocio+fondo+verde",
        creditText: "Diseñado por freepik",
        content: (
          <CarouselSpecificContent
            title="Innovación y desarrollo de productos de base Bionanotecnológica"
            topMessage="Nuestra patente"
            bottomMessage="Producto diseñado, manufacturado y de venta en Colombia."
            image={atbionanoPatenteHorizantal}
            messageButton="Conoce más sobre nuestra tecnología patentada"
            navigateRoute={ROUTE_PATENT_PAGE}
          />
        ),
      },
      {
        id: 1,
        bg: backgroundImageGreen,
        creditHref:
          "https://www.freepik.es/imagen-ia-gratis/hierba-fresca-gotas-rocio-imagen-generada-ia_43066153.htm#fromView=image_search&page=4&position=1&uuid=bb1f7b6c-c33c-40cd-bade-72139a49fd88",
        creditText: "Imagen de Freepik",
        content: (
          <CarouselSpecificContent
            title="Innovación y desarrollo de productos de base Bionanotecnológica"
            topMessage="Bionanoaxus"
            bottomMessage="Producto con nanotecnología antimicrobiana y fungicida."
            image={atbionanoProductBionanoaxus}
            messageButton="Conoce nuestros productos"
            navigateRoute={ROUTE_BIONANOAXUS_PRODUCT_PAGE}
          />
        ),
      },
    ],
    []
  )

  const [index, setIndex] = React.useState(0)
  const [paused, setPaused] = React.useState(false)

  React.useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, slides.length])

  const goTo = (i) =>
    setIndex(((i % slides.length) + slides.length) % slides.length)

  // Soporte táctil (swipe)
  const handlers = useSwipeable({
    onSwipedLeft: () => goTo(index + 1),
    onSwipedRight: () => goTo(index - 1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  return (
    <section
      {...handlers}
      className="relative z-0 h-screen w-full overflow-hidden rounded-sm"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Carrusel principal AT Bionano"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 mt-[40px] sm:mt-[80px]"
        >
          <img
            src={slides[index].bg}
            alt="Fondo del slide"
            className="h-full w-full object-cover"
          />
          <div className="from-emerald-800/70 absolute inset-0 bg-gradient-to-r to-[#0D9488]/60" />
          {slides[index].content}
        </motion.div>
      </AnimatePresence>

      {/* Flechas de navegación */}
      <button
        onClick={() => goTo(index - 1)}
        aria-label="Anterior"
        className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white transition hover:bg-black/50"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => goTo(index + 1)}
        aria-label="Siguiente"
        className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white transition hover:bg-black/50"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
