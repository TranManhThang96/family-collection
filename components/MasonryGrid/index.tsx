import { IImage } from '@/types/image';
import React from 'react';
import ImageItem from '../Image';

const MasonryGrid = ({ images }: { images: IImage[] }) => {
  return (
    <section id="images-masonry" className="mt-10 grid grid-cols-[repeat(4,1fr)] gap-2.5">
      {images.map((image: IImage) => (
        <ImageItem key={image.id} image={image} />
      ))}
    </section>
  );
};

export default MasonryGrid;
