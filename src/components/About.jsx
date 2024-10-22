import React from 'react';

const About = () => {
  return (
    <section id='about' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-gray-400 text-lg' aria-label='About me'>
    <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
      <h2 className="text-sm font-bold uppercase tracking-widest text-white-75 lg:sr-only">
        about me
      </h2>
    </div>
    <div>
      <p className='mb-4'>
        Motivated and adaptable professional with a background in software development and a passion for technology and innovation. Possess a deep understanding of full-stack technologies with experience collaborating in diverse teams to deliver high-impact projects. 
      </p>
      <p className='mb-4'>
        Bringing a strong analytical mindset and excellent interpersonal skills, seeking new challenges to further develop skills and contribute to innovative projects. Thrives in dynamic environments, applying creativity and problem-solving abilities to drive positive change.
      </p>
    </div>
  </section>
  );
};

export default About;
