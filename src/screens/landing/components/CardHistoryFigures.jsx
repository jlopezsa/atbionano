import { AdvancedImage } from "@cloudinary/react"
import { useCloudinary } from "commons/hooks/useCloudinary"

const CardHistoryFigures = ({ imagePath }) => {
  const HEIGH_SPINNER = 90

  const { handleImageLoad, img, isLoading } = useCloudinary({
    imagePath: imagePath,
    heighImage: 200,
    widthImage: 300,
  })

  return (
    <div className="flex h-full w-full justify-center rounded-lg">
      {isLoading && (
        <output
          id="spinner-test"
          className={`mt-[${HEIGH_SPINNER}px] text-surface inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white`}
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </output>
      )}
      <AdvancedImage
        className="h-full w-full rounded-lg"
        cldImg={img}
        onLoad={handleImageLoad}
        style={{ display: isLoading ? "none" : "block" }}
      />
    </div>
  )
}

export default CardHistoryFigures
