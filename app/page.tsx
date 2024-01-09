import HomeHeader from '@/components/HomeHeader';
import MasonryGrid from '@/components/MasonryGrid';
import Button from '@/components/UI/Button';
import { HomeIcon, CameraIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const tags = ['thien nhien', 'cay co', 'dong vat', 'vu tru', 'trung tam thuong mai'];

interface IDataProps {
  total: number;
  totalHits: number;
  hits: any[];
}

const getImages = async () => {
  const res = await fetch('https://pixabay.com/api/?key=12019414-dc588011857cbc90733bf7a98', {
    next: { revalidate: 3600 },
  });
  const data: IDataProps = await res.json();
  return data;
};

export default async function HomePage() {
  const data = await getImages();

  return (
    <>
      <HomeHeader />
      <main>
        <section className="container mx-auto">
          <nav className="flex items-center	justify-center gap-x-8 py-10">
            <Button href={'/'}>
              <HomeIcon className="h-4 w-4" /> Home
            </Button>
            <Button href={'/'}>
              <CameraIcon className="h-4 w-4" />
              Photos
            </Button>
            <Button href={'/'}>
              <VideoCameraIcon className="h-4 w-4" />
              Videos
            </Button>
          </nav>

          <section>
            <div className="flex justify-between">
              <div className="inline-flex gap-x-2">
                {tags.map((tag) => (
                  <Button
                    key={tag}
                    className="h-[32px] rounded-[8px] border-[1px] border-[#ceced2] bg-white px-3 font-normal text-[#191b26] hover:border-[#191b26]"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </section>

          <section id="images-masonry" className="mt-10 grid grid-cols-[repeat(4,1fr)] gap-2.5">
            <MasonryGrid images={data.hits} />
          </section>
        </section>
      </main>
    </>
  );
}
