import React from 'react';
import Header from './Header';
import Experience from './Experience';
import About from './About';
import Projects from './Projects';

const Body = () => {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-noto md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header /> 
        <main id='content' className='pt-24 lg:w-1/2 lg:py-24'>
          <About />
          <Experience />
          <Projects />
        </main>
      </div>
    </div>
  );
};

export default Body;
