import React from 'react';

const About = () => {
  return (
    <section id='about' className='mb-16 scroll-mt-16 md:mb-16 lg:mb-20 lg:scroll-mt-24 text-gray-400 text-md backdrop-blur-sm p-2 rounded-md' aria-label='About me'>
    <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
      <h2 className="text-sm font-bold uppercase tracking-widest text-white-75 lg:sr-only">
        about me
      </h2>
    </div>
    <div>
      <p className='mb-4 leading-relaxed'>
        Motivated and adaptable individual with a background in software development and a genuine passion for technology and innovation. I possess a solid understanding of full-stack technologies, and enjoy working with diverse teams to bring impactful projects to life. I approach challenges with an analytical mindset and strong interpersonal skills, always looking for new opportunities to learn and grow. I thrive in dynamic environments where I can apply my creativity and problem-solving skills to make a positive impact.
      </p>
      <p className='mb-4 leading-relaxed'>
        With a multidiciplinary education combining <a href='https://education.msu.edu/kin/' className='no-underline text-white-75 hover:text-teal-300'> Kinesiology </a> and <a href='https://dpi.uillinois.edu/tech-talent-development/' className='no-underline text-white-75 hover:text-teal-300'> Software Development </a>, the idea of what my professional career would entail has shifted throughout the years. With previous work experience in <a href='https://allenneighborhoodcenter.org/' className='no-underline text-white-75 hover:text-teal-300'> Community Engagement</a>, <a href='https://americorps.gov/serve/americorps/americorps-vista' className='no-underline text-white-75 hover:text-teal-300'> Non-profit Organizations</a>, and <a href='https://education.msu.edu/kin/' className='no-underline text-white-75 hover:text-teal-300'> Physical Education</a>, I found my love for technology through learning and hearing from the people I would interact with on a day to day, it made me want to create meaningful change in their life. 
      </p>
      <p className='mb-4 leading-relaxed'>
        In my spare time, I am usually walking, knitting, hanging out with my friends and family, or working through <a href='https://letterboxd.com/' className='no-underline text-white-75 hover:text-teal-300'> LetterBoxd's </a> top 100 movie list. 
      </p>
    </div>
  </section>
  );
};

export default About;
