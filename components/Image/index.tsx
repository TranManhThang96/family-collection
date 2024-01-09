import { IImage } from '@/types/image';
import React from 'react';

const ImageItem = ({ image }: { image: IImage }) => {
  return (
    <div>
      <img src={image.webformatURL} className="h-auto w-full" />
    </div>
  );
};

export default ImageItem;
