import React, { useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';


const FruitsZKlean = ({ imagePath }) => {
  const WIDTH_IMAGE = 352;
const HEIGTH_IMAGE = 224
const HEIGH_SPINNER = 90;

  const [isLoading, setIsLoading] = useState(true); // Estado para controlar la carga de la imagen

  const cld = new Cloudinary({ cloud: { cloudName: 'parkingapp' } });

  // Use this sample image or upload your own via the Media Explorer
  const img = cld
    .image(imagePath)
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(WIDTH_IMAGE).height(HEIGTH_IMAGE)); // Transform the image: auto-crop to square aspect_ratio

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="flex justify-center h-full">
      {isLoading && (
        <div
        id='spinner-test'
          className={`mt-[${HEIGH_SPINNER}px] inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white text-primary`}
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
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </div>
  );
};

export default FruitsZKlean;
