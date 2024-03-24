import Hero from './components/Hero';
import Demo from './components/Demo';

import './App.css';

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app '>
        {/* <div className='bg-gradient-to-tl from-blue-300 via-purple-200 to-pink-300 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[15rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-gradient-to-tl dark:from-blue-100 dark:via-purple-900  dark:to-blue-900'></div> */}
        <Hero />

        <Demo />
        <div className='bg-[#8989f9d4] absolute bottom-0 -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#460556]'></div>
      </div>
    </main>
  );
};

export default App;
