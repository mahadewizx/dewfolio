import {
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTiktok, // Correct TikTok icon import
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-pink-200 text-black py-12'>
      <div className='container mx-auto px-6 flex flex-col items-center'>
        {/* Title */}
        <h3 className='text-2xl font-bold mb-6 text-center tracking-wider text-gray-800'>
          Get in Touch
        </h3>

        {/* Contact Information */}
        <div className='space-y-4 text-center'>
          {/* Email */}
          <div className='flex items-center justify-center space-x-3 text-gray-800'>
            <FaEnvelope size={20} />
            <a
              href='https://mail.google.com/mail/?view=cm&fs=1&to=nddewii72@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-base'>
              nddewii72@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className='flex items-center justify-center space-x-3 text-gray-800'>
            <FaPhone size={20} />
            <p className='text-base'>888-755-2404</p>
          </div>

          {/* Address */}
          <div className='flex items-center justify-center space-x-3 text-gray-800'>
            <FaMapMarkerAlt size={20} />
            <p className='text-base'>Indonesia, Jakarta</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className='flex space-x-6 mt-8'>
          <a
            href='https://www.instagram.com/mhdew._?igsh=N3R5N3UwN2I5dmd1'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-700 hover:text-pink-500 transition duration-300 ease-in-out transform hover:scale-110'>
            <FaInstagram size={28} />
          </a>
          <a
            href='https://www.tiktok.com/@argty_7?_t=8qni59zRa1k&_r=1'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-700 hover:text-pink-500 transition duration-300 ease-in-out transform hover:scale-110'>
            <FaTiktok size={28} /> {/* Corrected to FaTiktok */}
          </a>
        </div>

        {/* Copyright */}
        <div className='mt-10 text-xs text-gray-600 text-center'>
          <p>
            &copy; {new Date().getFullYear()} Maha Dewi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
