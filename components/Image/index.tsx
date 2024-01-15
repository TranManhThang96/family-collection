import { IImage } from '@/types/image';
import Image from 'next/image';
import React from 'react';

const ImageItem = ({ image }: { image: IImage }) => {
  return (
    <Image
      src={image.webformatURL}
      className="h-auto max-w-full rounded-lg"
      alt={image.user}
      layout="responsive"
      width={250}
      height={300}
    />
  );
};

export default ImageItem;
