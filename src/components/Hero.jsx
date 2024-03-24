import React from 'react';

import { logo } from '../assets';
import Logo from './logo';
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        {/* <img src={logo} alt='sumz_logo' className='w-28 object-contain' /> */}
        <Logo width='100' height='100' alt='sumz_logo' />

        <button
          type='button'
          onClick={() => window.open('https://github.com/Wosmos', '_blank')}
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <div className='mt-0 md:mt-28'>
        <h1 className='head_text  '>
          Summarize Articles with <br className='max-md:hidden' />
          <span className='purple_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
          Simplify your reading with Summize, an open-source article summarizer
          that transforms lengthy articles into clear and concise summaries
        </h2>
      </div>
    </header>
  );
};

export default Hero;
