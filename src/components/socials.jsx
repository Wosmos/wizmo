import React, { useState } from 'react';

const SocialLinks = [
  { name: 'Github', link: 'https://www.facebook.com' },
  { name: 'Twitter', link: 'https://www.twitter.com' },
  { name: 'Instagram', link: 'https://www.instagram.com' },
  { name: 'LinkedIn', link: 'https://www.linkedin.com' },
];

const Socials = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      <button
        className=' bg-blue-500/60  text-white bg-white px-7 py-3 flex items-center  bg-gradient-to-r from-blue-600 to-cyan-600 gap-2  outline-none    cursor-pointer rounded-xl hover:bg-blue-600 transition-colors duration-300'
        onClick={toggleDropdown}
      >
        Socials
      </button>
      {isOpen && (
        <div className='absolute z-10 mt-2 bg-white/20 text-white/90 rounded-md shadow-lg hover:text-white'>
          {SocialLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target='_blank'
              rel='noopener noreferrer'
              className='block px-4 py-2 hover:bg-gray-100/30 transition-colors duration-300 rounded-lg '
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Socials;
