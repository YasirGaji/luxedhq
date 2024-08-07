/* eslint-disable @next/next/no-page-custom-font */
'use client';

import Image from 'next/image';
import backgroundImage from '@/assets/images/image_CS.png';
import Logo from '@/assets/images/LUXEDHQ.png';
import Link from 'next/link';
import Mail from '@/assets/sms.svg';
import Email from '@/assets/Mail.svg';
import Instagram from '@/assets/Instagram.svg';
import Facebook from '@/assets/Facebook.svg';
import FollowIcon from '@/assets/icons/FollowIcon';
import FacebookIcon from '@/assets/icons/FacebookIcon';
import InstagramIcon from '@/assets/icons/InstagramIcon';
import MailIcon from '@/assets/icons/MailIcon';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mldrneql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log('Email submitted successfully');
        setEmail('');
        setSubmitted(true);
      } else {
        console.error('Error submitting email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <main className="flex min-h-screen font-[ uber]  flex-col text-azure bg-black items-center justify-between">
        <div className="relative w-full h-screen">
          <Image
            src={backgroundImage}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-15"
          />

          <div className="absolute inset-0 py-4 flex flex-col items-center justify-between text-white text-center px-4 sm:text-4xl sm:font-bold">
            {submitted ? (
              <>
                <div className="flex flex-row justify-between items-center w-full p-4 sm:p-10">
                  <Image
                    src={Logo}
                    alt="Logo"
                    className="object-contain w-[130px] md:w-[200px] h-8 sm:h-12 sm:mb-0"
                  />
                  <Link
                    target="_blank"
                    href={
                      'https://www.instagram.com/theluxedhq/'
                    }
                  >
                    <button className="flex border items-center p-3 justify-around font-light rounded-xl md:py-2 sm:py-3 hover:bg-white hover:text-black w-[155px] h-[37px] md:w-[213px] md:h-[44px]">
                      <p className="text-[10px] md:text-sm ">
                        Follow us on instagram
                      </p>
                      <FollowIcon className=" hover:tex-black transition-all duration-300 sm:h-auto ml-2" />
                    </button>
                  </Link>
                </div>
                <div className="flex flex-col items-center justify-center h-full">
                  <h1 className="font-medium text-5xl text-[#CDD0D5] sm:text-[66px] mb-4">
                    Thank You
                  </h1>
                  <p className="text-base text-[14.2px] md:text-[22px] text-[#CDD0D5] font-thin mb-4 tracking-wider word-spacing-wide">
                    Thank you for joining the GREATNESS that we are about to
                    unveil
                  </p>
                </div>
                <div className="flex flex-col justify-between ">
                  <h2 className="text-[17px] mb-2 text-[#868c98] ">
                    REACH OUT TO US:
                  </h2>

                  <div className="flex items-center align-middle w-[154px] pb-8 justify-between">
                    <Link
                      target="_blank"
                      href={
                        'https://www.instagram.com/theluxedhq/'
                      }
                    >
                      <InstagramIcon />
                    </Link>

                    <Link
                      target="_blank"
                      href={
                        'https://www.facebook.com/people/Luxedhq/100094061065189/'
                      }
                    >
                      <FacebookIcon className="hover:text-white" />
                    </Link>

                    <Link target="_blank" href={'mailto:Luxedhq@gmail.com'}>
                      <MailIcon />
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-row justify-between items-center w-full p-4 sm:p-10">
                  <Image
                    src={Logo}
                    alt="Logo"
                    className="object-contain w-[130px] md:w-[200px] h-8 sm:h-12 sm:mb-0"
                  />
                  <Link
                    target="_blank"
                    href={
                      'https://www.instagram.com/luxedhq?igsh=bnFmeDN2ZHFhZGFn'
                    }
                  >
                    <button className="flex border items-center p-3 justify-around font-light rounded-xl md:py-2 sm:py-3 hover:bg-white hover:text-black w-[155px] h-[37px] md:w-[213px] md:h-[44px]">
                      <p className="text-[10px] md:text-sm ">
                        Follow us on instagram
                      </p>
                      <FollowIcon className=" hover:tex-black transition-all duration-300 sm:h-auto ml-2" />
                    </button>
                  </Link>
                </div>

                <div className="flex flex-col items-center justify-between sm:w-[970px] sm:h-[340px]">
                  <h1 className="font-medium text-5xl hover:text-white text-[#CDD0D5] sm:text-[66px] mb-4">
                    A touch of luxury is on its way.
                  </h1>
                  <p className="text-base text-[14.2px] md:text-[22px] hover:text-white text-[#CDD0D5] font-thin mb-4 tracking-wider word-spacing-wide">
                    Prepare yourself for an extraordinary experience as we
                    unveil something truly special and opulent. Stay tuned for
                    an exclusive introduction to an exceptional addition that
                    promises to elevate your senses and redefine sophistication
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center mt-5 sm:flex-row justify-between w-full"
                  >
                    <div className="relative flex items-center md:mr-9 mb-4 sm:mb-0 w-full">
                      <Image
                        className="absolute ml-3 pt-[4px] h-5 sm:h-auto"
                        src={Mail}
                        alt="mail-icon"
                      />
                      <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="enter email address"
                        className="border pl-10 p-3 bg-transparent placeholder-[#525865] items-center w-full h-[56px] font-light rounded-xl text-sm"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <button className="border items-center w-full sm:w-[213px] h-[56px] font-light rounded-xl text-sm p-3 hover:bg-white hover:text-black">
                      Notify me
                    </button>
                  </form>
                </div>

                <div className="flex flex-col justify-between ">
                  <h2 className="text-[17px] mb-2 text-[#868c98] ">
                    REACH OUT TO US:
                  </h2>

                  <div className="flex items-center align-middle w-[154px] pb-8 justify-between">
                    <Link
                      target="_blank"
                      href={
                        'https://www.instagram.com/luxedhq?igsh=bnFmeDN2ZHFhZGFn'
                      }
                    >
                      <InstagramIcon />
                    </Link>

                    <Link
                      target="_blank"
                      href={
                        'https://www.facebook.com/share/NiS5z3zcthj1wcAz/?mibextid=WC7FNe'
                      }
                    >
                      <FacebookIcon className="hover:text-white" />
                    </Link>

                    <Link target="_blank" href={'mailto:Luxedhq@gmail.com'}>
                      <MailIcon />
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
