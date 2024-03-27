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
          <a href='https://wasiff.vercel.app/' target='_blank' rel='noreferrer' className='scale-x-105 hover:scale-110 transition-all ease-in-out duration-200 '>
            <Logo width='100' height='100' alt='sumz_logo' />
          </a>
        </span>

        <Socials />
      </nav>

      <section className='  md:mt-8'>
        {/* <h1 className='md:text-9xl text-6xl font-extrabold -mb-8 font-inter text-center bg-gradient-to-b from-blue-600 to-cyan-600 bg-clip-text text-transparent  '>
          Wizmo
        </h1> */}
        <h1 className='head_text -mb-2'>
          Unlock the <span className='blue_gradient'>Power </span> of{' '}
          <br className='max-md:hidden' />
          <span className='blue_gradient'>AI-Driven </span>Summarization
        </h1>
        <h2 className='desc -mb-10'>
          Revolutionize your reading with <b>Wizmo</b>, an open-source solution
          using <b>OpenAI GPT-4</b> to distill articles into concise, insightful{' '}
          <b>summaries</b> for effortless understanding.
        </h2>
      </section>
    </header>
  );
};

export default Hero;
