import Hero from './components/Hero';
import Demo from './components/Demo';

import './App.css';
import SunCanvas from './components/sun';

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <section className='app '>
          <Hero />

        <div className='bg-[#f5f5ffd4] absolute top-2 -z-20 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#460556]'></div>
        <Demo />
      </section>
    </main>
  );
};

export default App;
