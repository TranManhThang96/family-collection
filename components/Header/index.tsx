import Link from 'next/link';
import React from 'react';
import { ArrowUpTrayIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Button from '../UI/Button';

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-10 flex h-[64px] w-full justify-center border-b-[1px] border-solid border-bColor bg-white">
      <div className="container mx-auto flex items-center	justify-between">
        <Link href={'/'}>
          <h1 className="text-4xl font-bold capitalize">pixaby</h1>
        </Link>
        <div className="mx-[24px] my-0 flex h-[40px] min-w-[240px] flex-auto items-center rounded-[40px] border-[1px] border-solid pr-3 shadow-[0_4px_12px_rgba(25,27,38,.08)]">
          <div className="pointer-events-none inset-y-0 left-0 flex items-center px-3">
            <MagnifyingGlassIcon className="h-6 w-6" />
          </div>
          <input
            type="text"
            className="m-0 min-w-[30px] grow text-ellipsis border-none bg-none p-2 text-sm text-[#191b26] focus:outline-none"
            placeholder={'Search images'}
          />
        </div>

        <nav className="flex items-center gap-3">
          <Link href={'/login'}>
            <Button className="border-[1px] border-solid border-[#ceced2] bg-white text-[#191b26] hover:border-[#191b26]">
              Login
            </Button>
          </Link>
          <Button className="border-0 bg-primary text-white hover:bg-primary-hover">
            <ArrowUpTrayIcon className="h-5 w-5" />
            Upload
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
