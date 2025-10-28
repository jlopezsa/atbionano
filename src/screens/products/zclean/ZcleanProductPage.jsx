// https://www.material-tailwind.com/docs/react/typography
// template: https://es.squarespace.com/plantillas/sackett-fluid-demo-es

import { Typography } from "@material-tailwind/react"
import { ApplicationProducts } from "components/cards/applicationSectors/ApplicationsProducts"
import ItemListWithBackground from "components/cards/itemListWithBackground/ItemListWithBackground"
import { motion } from "framer-motion"
import circleVinheta from "images/icons/circle-vinheta.jpeg"
import zcleanBackground from "images/products/brooke-lark-08bOYnH_r_E-zclean.jpg"
import { useEffect } from "react"
import FruitsZKlean from "./images/Applications/FruitsZKlean"
import { ZkleanMessages } from "./messages/zkleanMessages"

const ZcleanProductPage = () => {
  // SEO básico
  useEffect(() => {
    document.title = "Z-KLEAN | AT Bionano"
    const desc =
      "Z-KLEAN es un biocida de origen biológico para uso en el hogar y ámbitos profesionales. Ayuda a controlar microorganismos comunes y aporta una alternativa más amable con las superficies y el usuario."
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute("content", desc)
    } else {
      const m = document.createElement("meta")
      m.name = "description"
      m.content = desc
      document.head.appendChild(m)
    }
  }, [])

  const productLdJson = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Z-KLEAN",
    brand: { "@type": "Brand", name: "AT Bionano" },
    image: zcleanBackground,
    description:
      "Biocida de síntesis biológica para higiene de alimentos, superficies y utensilios.",
    category: "Home & Kitchen > Cleaning Supplies",
  }

  return (
    <main class="mt-[80px] h-full" role="main">
      {/* JSON-LD para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLdJson) }}
      />
      <div class="w-full">
        <div
          class="h-[400px] bg-cover bg-fixed bg-center pt-10 sm:h-[600px]"
          style={{
            backgroundImage: `url(${zcleanBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
          aria-label="Imagen de fondo con frutas para el producto Z-KLEAN"
        >
          <Typography variant="small">
            <div class="flex w-full justify-end">
              {ZkleanMessages.mainContent.imageCredits}
            </div>
          </Typography>
          <div class="flex h-full w-full flex-col items-center justify-evenly text-center">
            <p className="z-20 inline-flex items-center gap-2 rounded-full bg-gray-300 px-3 py-1 text-xs font-medium shadow-[0_8px_28px_rgba(0,0,0,0.45)] ring-1 ring-white/20 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              <Typography variant="paragraph" class="color text-base">
                Producto bionanotecnológico — línea hogar
              </Typography>
            </p>
            <h1 class="w-full bg-gradient-text bg-clip-text text-6xl font-bold text-transparent sm:text-7xl">
              Z-KLEAN
            </h1>
            <div class="flex flex-wrap justify-center gap-3">
              <p className="z-20 inline-flex items-center gap-2 rounded-full bg-gray-300 px-3 py-1 text-xs font-medium shadow-[0_8px_28px_rgba(0,0,0,0.45)] ring-1 ring-white/20 backdrop-blur">
                <Typography variant="paragraph" class="color text-base">
                  No oxida superficies
                </Typography>
              </p>
              <p className="z-20 inline-flex items-center gap-2 rounded-full bg-gray-300 px-3 py-1 text-xs font-medium shadow-[0_8px_28px_rgba(0,0,0,0.45)] ring-1 ring-white/20 backdrop-blur">
                <Typography variant="paragraph" class="color text-base">
                  No genera gases
                </Typography>
              </p>
              <p className="z-20 inline-flex items-center gap-2 rounded-full bg-gray-300 px-3 py-1 text-xs font-medium shadow-[0_8px_28px_rgba(0,0,0,0.45)] ring-1 ring-white/20 backdrop-blur">
                <Typography variant="paragraph" class="color text-base">
                  No irrita la piel
                </Typography>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="my-20"></div>
      <section
        class="mx-auto mt-10 flex max-w-screen-2xl items-center justify-center"
        aria-labelledby="zklean-subtitle"
      >
        <div class="flex w-1/2 flex-col items-center justify-center">
          <div style={{ textAlign: "center" }}>
            <Typography variant="h3">
              <span id="zklean-subtitle">
                {ZkleanMessages.mainContent.subtitle}
              </span>
            </Typography>
          </div>
          <div style={{ textAlign: "center" }}>
            <Typography variant="lead">
              {ZkleanMessages.mainContent.paragraphOne}
            </Typography>
          </div>
        </div>
      </section>

      <div class="my-20"></div>

      <section
        class="flex h-20 justify-center"
        aria-labelledby="aplicaciones-heading"
      >
        <Typography
          variant="h2"
          class="color text-base"
          id="aplicaciones-heading"
        >
          Aplicaciones
        </Typography>
      </section>
      <section
        class="fmx-auto w-full"
        aria-label="Tarjetas de aplicaciones de Z-KLEAN"
      >
        <motion.div
          className="flex flex-row flex-wrap justify-evenly"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ApplicationProducts
            description={ZkleanMessages.applicationFruits.description}
            title={ZkleanMessages.applicationFruits.title}
            credits={ZkleanMessages.applicationFruits.imageCredits}
          >
            <FruitsZKlean
              imagePath={ZkleanMessages.applicationFruits.imagePath}
            />
          </ApplicationProducts>
          <ApplicationProducts
            description={ZkleanMessages.applicationSurface.description}
            title={ZkleanMessages.applicationSurface.title}
            credits={ZkleanMessages.applicationSurface.imageCredits}
          >
            <FruitsZKlean
              imagePath={ZkleanMessages.applicationSurface.imagePath}
            />
          </ApplicationProducts>
        </motion.div>
      </section>

      <div class="my-10"></div>
      {/* 🧴 Modo de uso */}
      <section
        className="mx-auto mt-24 max-w-screen-xl px-6"
        aria-labelledby="modo-uso-heading"
      >
        <Typography
          variant="h2"
          className="mb-8 text-center"
          id="modo-uso-heading"
        >
          Modo de uso
        </Typography>

        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          <motion.div
            className="flex flex-col items-center rounded-xl bg-greenPastelLight p-6 shadow-sm"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="mb-3 text-4xl">🧽</span>
            <Typography variant="h5" className="mb-2 text-primary">
              Limpieza directa
            </Typography>
            <Typography variant="paragraph">
              Pulveriza el producto sobre la superficie o alimento a tratar y
              deja actuar durante 30 segundos.
            </Typography>
          </motion.div>

          <motion.div
            className="flex flex-col items-center rounded-xl bg-greenPastelLight p-6 shadow-sm"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="mb-3 text-4xl">💧</span>
            <Typography variant="h5" className="mb-2 text-primary">
              Enjuague opcional
            </Typography>
            <Typography variant="paragraph">
              Si se usa sobre frutas y verduras, puede enjuagarse con agua
              potable para retirar residuos.
            </Typography>
          </motion.div>

          <motion.div
            className="flex flex-col items-center rounded-xl bg-greenPastelLight p-6 shadow-sm"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="mb-3 text-4xl">🌿</span>
            <Typography variant="h5" className="mb-2 text-primary">
              Uso frecuente
            </Typography>
            <Typography variant="paragraph">
              Apto para uso diario, no daña materiales ni piel, manteniendo su
              efectividad prolongada.
            </Typography>
          </motion.div>
        </div>
      </section>

      <div class="my-20"></div>

      <section
        class="mx-auto flex max-w-screen-xl flex-col items-center justify-center"
        aria-labelledby="beneficios-heading"
      >
        <Typography
          variant="h2"
          class="color text-base"
          id="beneficios-heading"
        >
          Beneficios
        </Typography>
        <div class="grid grid-cols-1 grid-rows-4 px-10 sm:grid sm:grid-cols-2 sm:grid-rows-2">
          <ItemListWithBackground
            backgroundImageList={circleVinheta}
            description={"No oxida superficies"}
          />
          <ItemListWithBackground
            backgroundImageList={circleVinheta}
            description={"No genera gases"}
          />
          <ItemListWithBackground
            backgroundImageList={circleVinheta}
            description={"No irrita la piel"}
          />
          <ItemListWithBackground
            backgroundImageList={circleVinheta}
            description={
              "Genera un sistema de biocompatibilidad al ser de síntesis biológica."
            }
          />
        </div>
        <div class="text-tertiary">
          <Typography variant="small">
            <a
              href="https://www.freepik.com/author/myriammira"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image by myriammira
            </a>{" "}
            on Freepik
          </Typography>
        </div>
      </section>

      {/* 📘 Ficha Técnica */}
      <section
        className="mx-auto mt-24 max-w-screen-xl rounded-2xl bg-greenPastelLight px-6 py-12 shadow-sm"
        aria-labelledby="ficha-tecnica-heading"
      >
        <Typography
          variant="h2"
          className="mb-8 text-center"
          id="ficha-tecnica-heading"
        >
          Ficha técnica
        </Typography>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <Typography variant="h5" className="mb-2 text-primary">
              Composición
            </Typography>
            <Typography variant="paragraph">
              Nanoemulsión acuosa con agentes biocidas de origen biológico.
            </Typography>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <Typography variant="h5" className="mb-2 text-primary">
              Presentación
            </Typography>
            <Typography variant="paragraph">
              Envases de 500 ml, 1 L y 5 L con pulverizador o tapa de seguridad.
            </Typography>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <Typography variant="h5" className="mb-2 text-primary">
              pH del producto
            </Typography>
            <Typography variant="paragraph">6.5 ± 0.2 (neutro)</Typography>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <Typography variant="h5" className="mb-2 text-primary">
              Vida útil
            </Typography>
            <Typography variant="paragraph">
              24 meses en condiciones normales de almacenamiento.
            </Typography>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/docs/Zklean_Ficha_Tecnica.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-primary px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            Descargar ficha técnica (PDF)
          </a>
        </div>
      </section>

      {/* 🧾 Certificaciones */}
      <section
        className="mx-auto mt-24 max-w-screen-xl rounded-2xl bg-greenPastelLight px-6 py-12 shadow-sm"
        aria-labelledby="certificaciones-heading"
      >
        <Typography
          variant="h2"
          className="mb-8 text-center"
          id="certificaciones-heading"
        >
          Certificaciones y normativas
        </Typography>

        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          <div className="flex flex-col items-center p-6">
            <img
              src="/images/certifications/iso9001.png"
              alt="Certificación ISO 9001"
              className="mb-4 h-16"
            />
            <Typography variant="h5" className="mb-2 text-primary">
              ISO 9001
            </Typography>
            <Typography variant="paragraph">
              Certifica procesos de gestión de calidad en la fabricación del
              producto.
            </Typography>
          </div>

          <div className="flex flex-col items-center p-6">
            <img
              src="/images/certifications/ecologico.png"
              alt="Certificación ecológica"
              className="mb-4 h-16"
            />
            <Typography variant="h5" className="mb-2 text-primary">
              Producto ecológico
            </Typography>
            <Typography variant="paragraph">
              Cumple con los lineamientos de sostenibilidad ambiental y no
              toxicidad.
            </Typography>
          </div>

          <div className="flex flex-col items-center p-6">
            <img
              src="/images/certifications/bpa-free.png"
              alt="Certificación BPA Free"
              className="mb-4 h-16"
            />
            <Typography variant="h5" className="mb-2 text-primary">
              BPA Free
            </Typography>
            <Typography variant="paragraph">
              Libre de bisfenoles y metales pesados, apto para contacto con
              alimentos.
            </Typography>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="mx-auto max-w-5xl px-6 py-16"
        aria-labelledby="faq-title"
      >
        <Typography variant="h2" className="mb-8 text-center" id="faq-title">
          Preguntas frecuentes
        </Typography>
        <div className="mt-8 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {[
            {
              q: "¿Es seguro para alimentos?",
              a: "Sí. Siga el modo de uso indicado. En frutas y verduras puede enjuagar con agua potable si lo desea.",
            },
            {
              q: "¿Deja residuos o manchas?",
              a: "No deja manchas ni maltrata materiales; no oxida superficies y no genera gases.",
            },
            {
              q: "¿Tiene aroma fuerte?",
              a: "No, su composición evita olores fuertes e irritantes.",
            },
          ].map((item) => (
            <details key={item.q} className="group px-6 py-5 open:bg-gray-50">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <Typography variant="h5" id="modo-uso-heading">
                  <span className="font-medium text-gray-900">{item.q}</span>
                </Typography>
                <span className="text-gray-400 transition group-open:rotate-180">
                  ⌄
                </span>
              </summary>
              <Typography variant="lead" id="modo-uso-heading">
                <p className="mt-2 text-gray-600">{item.a}</p>
              </Typography>
            </details>
          ))}
        </div>
      </section>

      <div class="my-20"></div>
    </main>
  )
}

export default ZcleanProductPage
