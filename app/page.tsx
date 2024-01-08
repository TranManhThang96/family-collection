import HomeHeader from '@/components/HomeHeader';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}
