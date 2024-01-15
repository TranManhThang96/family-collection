import { IImage } from '@/types/image';
import React from 'react';
import ImageItem from '../Image';

const MasonryGrid = ({ images }: { images: IImage[] }) => {
  const MASONRY_COLUMNS = 4;
  const masonryImages: { [key: string]: IImage[] } = {};
  images.forEach((image, index) => {
    if (`column-${index % MASONRY_COLUMNS}` in masonryImages) {
      masonryImages[`column-${index % MASONRY_COLUMNS}`].push(image);
    } else {
      masonryImages[`column-${index % MASONRY_COLUMNS}`] = [image];
    }
  });

  return (
    <section id="images-masonry" className="grid gap-2.5 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
      {Object.keys(masonryImages).map((key) => {
        return (
          <div key={key} className="flex flex-col gap-y-2.5">
            {masonryImages[key].map((image) => {
              return <ImageItem key={image.id} image={image} />;
            })}
          </div>
        );
      })}
    </section>
  );
};

export default MasonryGrid;
