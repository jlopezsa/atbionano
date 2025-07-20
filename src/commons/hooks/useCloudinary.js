import { Cloudinary } from "@cloudinary/url-gen"
import { auto } from "@cloudinary/url-gen/actions/resize"
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity"
import { useState } from "react"

export const useCloudinary = ({ imagePath, widthImage, heighImage }) => {
  const WIDTH_IMAGE = 352
  const HEIGTH_IMAGE = 224
  const HEIGH_SPINNER = 90

  const [isLoading, setIsLoading] = useState(true) // Estado para controlar la carga de la imagen

  const cld = new Cloudinary({ cloud: { cloudName: "parkingapp" } })

  // Use this sample image or upload your own via the Media Explorer
  const img = cld
    .image(imagePath)
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(widthImage).height(heighImage)) // Transform the image: auto-crop to square aspect_ratio

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return {
    isLoading,
    handleImageLoad,
    img,
  }
}
