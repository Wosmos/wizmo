import React from 'react';

import { logo } from '../assets';
import Logo from './logo';
import Socials from './socials';
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3  '>
        <span className='flex flex-col text-white mt-4'>
          <p className='-mb-8'>Powered by</p>
          <a href='https://wasiff.vercel.app/' target='_blank' rel='noreferrer'>
            <Logo width='100' height='100' alt='sumz_logo' />
          </a>
        </span>

        <Socials />
      </nav>

      <section className='mt-0  md:-mt-12'>
        <h1 className='md:text-9xl text-6xl font-bold -mb-8 font-inter text-center blue_gradient'>
          Wizmo
        </h1>
        <h1 className='head_text -mb-2'>
          Unlock the <span className='blue_gradient'>Power </span> of{' '}
          <br className='max-md:hidden' />
          <span className='blue_gradient'>AI-Driven </span>Summarization
        </h1>
        <h2 className='desc -mb-10'>
          Revolutionize your reading with Summize, an open-source solution using
          OpenAI GPT-4 to distill articles into concise, insightful summaries
          for effortless understanding.
        </h2>
      </section>
    </header>
  );
};

export default Hero;
