'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Welcome to my portfolio';
  const typingSpeed = 100; // Kecepatan mengetik (ms)

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(intervalId);
      }
    }, typingSpeed);
    return () => clearInterval(intervalId); // Cleanup the interval
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className='bg-pink-200 py-6 fixed top-0 left-0 w-full z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Efek mengetik */}
        <h1 className='text-pink-700 text-3xl font-bold'>
          <span className='relative'>{typedText}</span>
        </h1>

        {/* Menu navigasi diatur horizontal */}
        <div className='flex space-x-8'>
          {['#home', '#about', '#experience', '#contact'].map((section) => (
            <Link
              href={section}
              key={section}
              onClick={handleClick}
              className='text-pink-700 text-xl font-semibold relative transition-transform transform hover:scale-110 hover:text-pink-900 duration-500 ease-in-out'>
              {section.slice(1).toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
