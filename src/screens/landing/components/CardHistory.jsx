import { Typography } from "@material-tailwind/react"
import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import CardHistoryFigures from "./CardHistoryFigures"

export const CardHistory = ({ props }) => {
  const { date, referenceDate, actionsByYear, id } = props
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
      className="flex justify-center"
    >
      <div className="mb-4 w-11/12 rounded-lg border border-gray-100 bg-green-50 p-5 dark:border-gray-700 dark:bg-gray-800 md:w-4/5">
        <time
          dateTime={new Date(referenceDate)}
          className="text-lg font-semibold text-gray-900 dark:text-white"
        >
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {date}
          </Typography>
        </time>
        <ol className="divider-gray-200 mt-3 divide-y dark:divide-gray-700">
          {actionsByYear.map(({ title, description, imagePath, id }) => (
            <li key={id}>
              <a className="mb-5 block items-center rounded-lg bg-gray-50 p-3 dark:hover:bg-gray-700 sm:flex">
                <div className="mb-3 me-3 h-20 min-h-[150px] w-52 min-w-[250px] rounded-lg sm:mb-0">
                  <CardHistoryFigures imagePath={imagePath} />
                </div>
                {/* <img
                  className="mb-3 me-3 h-20 w-52 rounded-lg bg-deep-purple-500 sm:mb-0"
                  src={imagePath}
                  alt="Patente"
                /> */}
                <div className="text-gray-600 dark:text-gray-400">
                  <Typography variant="h5" color="blue-gray" className="">
                    {title}
                  </Typography>
                  <div className="text-sm font-normal">
                    <Typography variant="lead" color="blue-gray" className="">
                      {description}
                    </Typography>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </motion.div>
  )
}
