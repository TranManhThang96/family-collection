import React from 'react';
import './home-header.scss';
import Image from 'next/image';

const HomeHeader = () => {
  return (
    <section className="relative z-10 min-h-[440px] w-full text-white">
      <div className="background absolute left-0 top-0 h-full w-full overflow-hidden">
        <picture>
          <Image
            src={'/images/02-57-55-697_1440x550.jpg'}
            alt="home header"
            fill
            className="absolute left-[50%] top-[50%] min-h-[1000%] min-w-[1000%]"
          />
        </picture>
      </div>

      <div id="home-header-overlay" className="absolute bottom-0 left-0 right-0 top-0"></div>
    </section>
  );
};

export default HomeHeader;
