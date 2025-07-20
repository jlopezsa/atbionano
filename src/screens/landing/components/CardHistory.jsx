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
                <div className="mb-3 me-3 h-20 min-h-[150px] w-52 min-w-[250px] rounded-lg bg-deep-purple-500 sm:mb-0">
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
                  <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                    <svg
                      className="me-1 h-2.5 w-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z" />
                    </svg>
                    Public
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </motion.div>
  )
}

// className = "mb-3 me-3 h-20 w-52 rounded-lg bg-deep-purple-500 sm:mb-0"
