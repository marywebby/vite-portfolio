import React from 'react';

const About = () => {
  return (
    <section id='about' className='mb-16 scroll-mt-16 md:mb-16 lg:mb-20 lg:scroll-mt-24 text-gray-400 text-md' aria-label='About me'>
    <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
      <h2 className="text-sm font-bold uppercase tracking-widest text-white-75 lg:sr-only">
        about me
      </h2>
    </div>
    <div>
      <p className='mb-4 leading-relaxed'>
        Motivated and adaptable individual with a background in software development and a genuine passion for technology and innovation. I have a solid understanding of full-stack technologies and have always enjoyed working with diverse teams to bring impactful projects to life. I approach challenges with an analytical mindset and strong interpersonal skills, always looking for new opportunities to learn and grow. I thrive in dynamic environments where I can apply my creativity and problem-solving skills to make a positive impact.
      </p>
      <p className='mb-4 leading-relaxed'>
        With a multidiciplinary education combing <a href='https://discord.com/channels/1290736010849681489/1290736011218911275/1303084654550843475' className='no-underline text-teal-300'> Kinesiology </a> and <a href='https://dpi.uillinois.edu/tech-talent-development/' className='no-underline text-teal-300'> Software Development </a>, . I am now a Program Assistant at a Software Development Apprenticeship Program, one in which I have recently graduated from. 
      </p>
    </div>
  </section>
  );
};

export default About;
