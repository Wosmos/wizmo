import React from 'react';

import { logo } from '../assets';
import Logo from './logo';
import Socials from './socials';
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3  '>
        <Logo width='100' height='100' alt='sumz_logo' />
        <Socials />
      </nav>

      <div className='mt-0 md:mt-10'>
        <h1 className='head_text'>
          Unlock the <span className='purple_gradient'>Power </span> of{' '}
          <br className='max-md:hidden' />
          <span className='purple_gradient'>AI-Driven </span>Summarization
        </h1>
        <h2 className='desc'>
          Revolutionize your reading experience with Summize, the cutting-edge,
          open-source solution that harnesses the incredible capabilities of
          OpenAI GPT-4 to distill complex articles into concise, insightful
          summaries, allowing you to effortlessly grasp the essence of any text.
        </h2>
      </div>
    </header>
  );
};

export default Hero;
