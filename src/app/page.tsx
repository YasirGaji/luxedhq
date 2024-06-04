import Image from 'next/image';
import backgroundImage from '@/assets/image_CS.png';
import Logo from '@/assets/LUXEDHQ.png';
import Follow from '@/assets/export.svg';
import Link from 'next/link';
import Mail from '@/assets/sms.svg';
import Email from '@/assets/Mail.svg';
import Instagram from '@/assets/Instagram.svg';
import Facebook from '@/assets/Facebook.svg';

export default function Home() {
  return (
    <main className="flex min-h-screen font-[ uber]  flex-col text-azure bg-black items-center justify-between">
      <div className="relative w-full h-screen">
        <Image
          src={backgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-40"
        />

        <div className="absolute inset-0 py-4 flex  flex-col items-center justify-between text-white text-center px-4 sm:text-4xl sm:font-bold">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full p-4 sm:p-10">
            <Image
              src={Logo}
              alt="Logo"
              className="object-contain h-8 sm:h-12 mb-7 sm:mb-0"
            />
            <Link
              target="_blank"
              href={'https://www.instagram.com/luxedhq?igsh=bnFmeDN2ZHFhZGFn'}
            >
              <button className="flex border items-center justify-center font-light rounded-xl  py-2  sm:py-3 hover:bg-white hover:text-black w-[203px] sm:w-[213px] sm:h-[44px]">
                <p className="text-sm ">Follow us on instagram</p>
                <Image
                  src={Follow}
                  alt="follow-icom"
                  className="hover:brightness-0 transition-all duration-300 h-4 sm:h-auto ml-2"
                />
              </button>
            </Link>
          </div>

          <div className="flex flex-col items-center justify-between sm:w-[970px] sm:h-[340px]">
            <h1 className="font-medium text-2xl sm:text-[66px] mb-4">
              A touch of luxury is on its way.
            </h1>
            <p className="text-base sm:text-[24px] font-thin mb-4">
              Prepare yourself for an extraordinary experience as we unveil
              something truly special and opulent. Stay tuned for an exclusive
              introduction to an exceptional addition that promises to elevate
              your senses and redefine sophistication
            </p>

            <form className="flex flex-col items-center mt-5 sm:flex-row justify-between w-full">
              <div className="relative flex items-center md:mr-9  mb-4 sm:mb-0 w-full">
                <Image
                  className="absolute ml-3 pt-[4px] h-5 sm:h-auto"
                  src={Mail}
                  alt="mail-icon"
                />
                <input
                  type="email"
                  placeholder="enter email address"
                  className="border pl-10 p-3 bg-transparent placeholder-[#525865] items-center w-full h-[56px] font-light rounded-xl text-sm"
                />
              </div>
              <button className="border items-center w-full sm:w-[213px] h-[56px] font-light rounded-xl text-sm p-3 hover:bg-white hover:text-black">
                Notify me
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-between ">
            <h2 className="text-[17px] text-[#868c98] ">REACH OUT TO US:</h2>

            <div className="flex items-center align-middle w-[154px] pb-8 justify-between">
              <Link
                target="_blank"
                href={'https://www.instagram.com/luxedhq?igsh=bnFmeDN2ZHFhZGFn'}
              >
                <Image className="" src={Instagram} alt="Email-icon" />
              </Link>

              <Link
                target="_blank"
                href={
                  'https://www.facebook.com/share/NiS5z3zcthj1wcAz/?mibextid=WC7FNe'
                }
              >
                <Image className="" src={Facebook} alt="Email-icon" />
              </Link>

              <Link target="_blank" href={'mailto:Luxedhq@gmail.com'}>
                <Image className="" src={Email} alt="Email-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
