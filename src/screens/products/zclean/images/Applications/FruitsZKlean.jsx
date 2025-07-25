import { AdvancedImage } from "@cloudinary/react"
import { useCloudinary } from "commons/hooks/useCloudinary"

const FruitsZKlean = ({ imagePath }) => {
  const HEIGH_SPINNER = 90

  const { handleImageLoad, img, isLoading } = useCloudinary({
    imagePath: imagePath,
    heighImage: 224,
    widthImage: 352,
  })

  return (
    <div className="flex h-full justify-center">
      {isLoading && (
        <div
          id="spinner-test"
          className={`mt-[${HEIGH_SPINNER}px] text-surface inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white`}
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      )}
      <AdvancedImage
        cldImg={img}
        onLoad={handleImageLoad}
        style={{ display: isLoading ? "none" : "block" }}
      />
    </div>
  )
}

export default FruitsZKlean
