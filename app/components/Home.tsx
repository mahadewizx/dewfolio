'use client';

import Image from 'next/image';
import Navbar from './Navbar';
import { useEffect } from 'react';

const Home = () => {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();

    const target = e.target as HTMLAnchorElement;
    const targetId = target.getAttribute('href');
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const links = document.querySelectorAll(
      'a[href^="#"]'
    ) as NodeListOf<HTMLAnchorElement>;
    links.forEach((link) => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div className='bg-gradient-to-b from-green-100 to-pink-200 min-h-screen'>
      <Navbar />

      <main className='container mx-auto flex flex-col items-center justify-center min-h-screen p-6'>
        <div className='relative bg-white p-8 rounded-xl shadow-lg w-full max-w-lg text-center animate-fade-in mt-20'>
          <div className='absolute top-[-80px] left-1/2 transform -translate-x-1/2'>
            <Image
              src='/dewi.jpg'
              alt='Foto dewi'
              width={180}
              height={180}
              className='rounded-full border-8 border-white object-cover'
            />
          </div>

          <h1 className='text-5xl font-extrabold text-orange-600 mt-20 mb-4'>
            Maha Dewi
          </h1>
          <p className='text-base text-gray-700'>
            Halloww semuaa!! Saya Maha Dewi, biasanya dipanggil Dewi. Saat ini,
            saya sedang bersekolah di SMKN 21 Jakarta, dan saya berada di kelas
            11 PPLG. Saya sangat menyukai makanan pedas dan memiliki kecintaan
            yang besar terhadap matcha. Selain itu, saya juga penggemar es krim,
            terutama saat cuaca panas! Saya juga gemar menggambar dan berkreasi
            dengan desain. Setiap hari adalah kesempatan baru untuk belajar!
          </p>
        </div>

      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Home;
