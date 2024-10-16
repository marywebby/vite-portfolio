import React from 'react';

const experienceData = [
  {
    dateRange: "Feb'24 - Present",
    title: 'Program Assistant',
    organization: 'Discovery Partners Institute',
    description:
      'Sociosqu hac a luctus neque augue etiam efficitur porta. Fermentum ridiculus ut tortor elit vitae condimentum est. Vehicula neque suscipit sagittis montes placerat per litora. Netus condimentum sodales euismod lorem elit lacinia nullam. Lorem habitasse curabitur praesent metus aptent, cras hendrerit pharetra.',
    technologies: ['Ruby on Rails', 'HTML/CSS', 'Postgres', 'JavaScript'],
    link: 'https://dpi.uillinois.edu/',
  },
  {
    dateRange: "Jan'22 - Aug'22",
    title: 'Community Resilience Summer Associate',
    organization: 'AmeriCorps',
    description:
      'Inceptos ligula fermentum interdum fringilla fusce varius torquent inceptos scelerisque libero. Ligula sagittis lorem praesent euismod adipiscing cursus primis habitasse. Commodo ultricies nisi platea congue.',
    technologies: ['Community Engagement', 'Program Development'],
    link: 'https://www.americorps.gov/',
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <section id='experience' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' aria-label='Work Experience'>
      <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
          Experience
        </h2>
      </div>
      <div>
        <ol className='group/list p-0 list-none'>
          {experienceData.map((experience, index) => (
            <li key={index} className='mb-12'>
              <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                <header className='z-10 mb-2 mt-1 list-none text-md font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2' aria-label={experience.dateRange}>
                  {experience.dateRange}
                </header>
                <div className='z-10 sm:col-span-6'>
                  <h3 className='font-medium leading-snug text-slate-200 mt-0'>
                    <a
                      className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-xl'
                      href={experience.link}
                      target='_blank'
                      rel='noreferrer noopener'
                      aria-label={`${experience.title}, ${experience.organization} (opens in a new tab)`}
                    >
                      <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                      <span>{experience.title} | {experience.organization}</span>
                    </a>
                  </h3>
                  <p className='mt-2 text-lg leading-normal text-slate-400'>{experience.description}</p>
                  <ul className='mt-2 flex flex-wrap p-0 list-none' aria-label='Technologies used'>
                    {experience.technologies.map((tech, idx) => (
                      <li key={idx} className='mr-1.5 mt-2'>
                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5 text-teal-300'>
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className='mt-12'>
          <a
            className='inline-flex items-baseline font-medium leading-tight hover:text-teal-300 focus-visible:text-teal-300 text-slate-200 group/link text-base underline'
            href='/resume.pdf'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='View Full Résumé (opens in a new tab)'
          >
            View Full Résumé
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
