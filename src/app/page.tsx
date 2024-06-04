import Image from 'next/image';
import backgroundImage from '@/assets/image_CS.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-azure bg-black items-center justify-between">
      <div className="relative w-full h-screen">
        <Image
          src={backgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className='opacity-40 '
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          LUXED
        </div>
      </div>
    </main>
  );
}
