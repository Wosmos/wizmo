import React, { useState } from 'react';

const SocialLinks = [
  { name: 'Github', link: 'https://github.com/Wosmos' },
  { name: 'Instagram', link: 'https://www.instagram.com/wosmo_tech/' },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/wasif-malik-79205a1bb/',
  },
  { name: 'Hashnode', link: 'https://hashnode.com/@Wosmo' },
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
        <div className='absolute z-10 mt-2 bg-white/20 backdrop-blur-md text-white/90 rounded-md shadow-lg hover:text-white'>
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
