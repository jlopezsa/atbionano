import { Typography } from "@material-tailwind/react"
import { useScroll, motion } from "framer-motion"
import { useRef } from "react"

const KnowUs = ({ props }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["0 1", "1.33 1"],
    offset: ["start end", "end end"],
  })
  return (
    <motion.div
      ref={ref}
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      className={`-z-10 mt-6 grid h-[450px] w-80 justify-items-center rounded-xl bg-tertiary drop-shadow-md hover:drop-shadow-xl`}
    >
      <div id={`${props.title}-knowus`} class="w-[300px]">
        <div className="h-[140px]">
          <img
            class="h-[120px] w-[120px] pt-[20px]"
            src={props.imagePath}
            alt="icon"
          />
        </div>
        <div class="h-[35px]">
          <Typography className="font-bold">{props.title}</Typography>
        </div>
        <div>
          <Typography className="h-[195px] text-base">
            {props.content}
          </Typography>
        </div>
      </div>
    </motion.div>
  )
}

export default KnowUs
