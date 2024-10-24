'use client';

import Image from 'next/image';
import { useState } from 'react';

const AboutPage = () => {
  // State to manage the modal visibility and the image to display
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // Function to handle image click
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='bg-pink-200 min-h-screen'>
      <main className='container mx-auto flex flex-col items-center justify-center min-h-screen p-4'>
        <div className='flex bg-white p-6 rounded-xl shadow-lg w-full max-w-3xl transition-transform transform hover:scale-105 duration-300'>
          {/* Text Content */}
          <div className='flex-1 text-left'>
            <h1
              id='about'
              className='text-4xl font-bold text-gray-800 mb-4 transition-transform transform hover:translate-x-1 duration-300'>
              About Me
            </h1>
            <p className='mt-6 text-lg text-gray-700 max-w-2xl mx-auto transition-opacity duration-500 hover:opacity-80'>
              Saya adalah anak kedua dari tiga bersaudara. Saya mempunyai abang
              laki-laki yang saat ini statusnya Mahasiswa dan saya memiliki adik
              perempuan yang saat ini kelas 3 SMP. Saya sangat menyukai makanan
              pedas dan asam. Saya juga memiliki seorang sahabat dekat yang
              sudah saya anggap seperti saudara dan kami juga satu sekolah,
              setiap ada waktu luang kita selalu bermain bersama.
            </p>
            <p className='mt-4 text-lg text-gray-700 max-w-2xl mx-auto transition-opacity duration-500 hover:opacity-80'>
              Saya menyukai Paskibra makanya saya memilih ekskul Paskibra.
              Ketika saya ada waktu luang, saya akan jogging bersama teman-teman
              saya, dan biasanya menghabiskan waktu dengan menonton film/drakor,
              atau merapikan barang-barang yang sudah seharusnya dirapihkan.
            </p>
          </div>
          {/* Profile Images on the Right */}
          <div className='flex flex-col justify-center ml-6'>
            <Image
              src='/dewacaca.jpg' // Ensure this image exists in the public folder
              alt='Foto dewi'
              width={128}
              height={128}
              className='rounded-lg border-4 border-white object-cover mb-4 cursor-pointer transition-transform transform hover:scale-110 duration-300'
              onClick={() => handleImageClick('/dewacaca.jpg')} // Handle click
            />
            <Image
              src='/keidel.jpg' // Ensure this image exists in the public folder
              alt='Foto keidel'
              width={128}
              height={128}
              className='rounded-lg border-4 border-white object-cover mb-4 cursor-pointer transition-transform transform hover:scale-110 duration-300'
              onClick={() => handleImageClick('/keidel.jpg')} // Handle click
            />
            <Image
              src='/paskib.jpg' // Ensure this image exists in the public folder
              alt='Foto paskib'
              width={128}
              height={128}
              className='rounded-lg border-4 border-white object-cover cursor-pointer transition-transform transform hover:scale-110 duration-300'
              onClick={() => handleImageClick('/paskib.jpg')} // Handle click
            />
          </div>
        </div>

        {/* Interests Section */}
        <div className='mt-10'>
          <h2 className='text-3xl font-bold text-gray-800 text-center mb-4'>
            Things I Like To Do
          </h2>
          <div className='flex flex-wrap justify-center gap-10'>
            {/* Jogging */}
            <div className='flex flex-col items-center text-center transition-transform transform hover:scale-110 duration-300'>
              <span role='img' aria-label='jogging' className='text-4xl'>
                🏃‍♂️
              </span>
              <p className='text-lg'>Jogging</p>
            </div>
            {/* Listening to Music */}
            <div className='flex flex-col items-center text-center transition-transform transform hover:scale-110 duration-300'>
              <a
                href='https://open.spotify.com/user/316s53sogoidwr2wo6zmhvh3guye?si=jt5_KDetQ-mI5FhVfuu1DQ'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center'>
                <span role='img' aria-label='music' className='text-4xl'>
                  🎶
                </span>
                <p className='text-lg'>Listening to Music</p>
              </a>
            </div>
            {/* Going to the Beach */}
            <div className='flex flex-col items-center text-center transition-transform transform hover:scale-110 duration-300'>
              <a
                href='https://pin.it/13PVLx1Pq'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center'>
                <span role='img' aria-label='beach' className='text-4xl'>
                  🏖️
                </span>
                <p className='text-lg'>Going to the Beach</p>
              </a>
            </div>
            {/* Watch Movies */}
            <div className='flex flex-col items-center text-center transition-transform transform hover:scale-110 duration-300'>
              <a
                href='https://g.co/kgs/qmpTikg'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center'>
                <span role='img' aria-label='movies' className='text-4xl'>
                  🎬
                </span>
                <p className='text-lg'>Watch Movies</p>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Modal for Enlarged Image */}
      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50'>
          <div className='relative'>
            <button
              className='absolute top-2 right-2 text-white text-2xl'
              onClick={closeModal}>
              &times;
            </button>
            <Image
              src={selectedImage}
              alt='Enlarged'
              width={512} // Adjust as necessary
              height={512} // Adjust as necessary
              className='rounded-lg border-4 border-white object-cover'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
