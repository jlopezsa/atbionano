import { Cloudinary } from "@cloudinary/url-gen"
import { auto } from "@cloudinary/url-gen/actions/resize"
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity"
import { useState } from "react"

export const useCloudinary = ({ imagePath, widthImage, heighImage }) => {
  const [isLoading, setIsLoading] = useState(true)

  const cld = new Cloudinary({ cloud: { cloudName: "parkingapp" } })

  const img = cld
    .image(imagePath)
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(widthImage).height(heighImage))

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return {
    isLoading,
    handleImageLoad,
    img,
  }
}
