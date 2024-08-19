import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

const FruitsZKlean = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "parkingapp" } });

  // Use this sample image or upload your own via the Media Explorer
  const img = cld
    .image("atbionano/z-klean-application-fruits.jpg")
    .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

  return <AdvancedImage cldImg={img} />;
};

export default FruitsZKlean;
