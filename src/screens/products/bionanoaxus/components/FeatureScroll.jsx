import { Typography } from "@material-tailwind/react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const FeaturePanel = ({ feature, index, total, scrollYProgress }) => {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0]
  )
  const y = useTransform(scrollYProgress, [start, end], [100, -100])

  return (
    <motion.article
      style={{ opacity, y }}
      className="sticky top-0 flex h-screen flex-col justify-center rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-sm backdrop-blur-md"
    >
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-greenPastelLight font-semibold text-primary">
          {String(index + 1).padStart(2, "0")}
        </span>
        <Typography variant="h4" className="text-primary">
          {feature.title}
        </Typography>
      </div>
      <p className="text-xs uppercase tracking-[0.4em] text-secondary">
        {feature.badge}
      </p>
      <Typography variant="lead" className="mt-2 text-gray-700">
        {feature.description}
      </Typography>
      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
        {feature.metric}
      </div>
    </motion.article>
  )
}

const FeatureScroll = ({ features }) => {
  const containerRef = useRef(null)
  const total = features.length
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      {features.map((feature, index) => (
        <FeaturePanel
          key={feature.title}
          feature={feature}
          index={index}
          total={total}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  )
}

export default FeatureScroll
