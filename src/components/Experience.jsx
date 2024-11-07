import React from 'react';

const experienceData = [
  {
    dateRange: "Aug'24 - Present",
    title: 'Program Assistant',
    organization: 'Discovery Partners Institute',
    description:
      'Support trainees during the pre-apprenticeship and classroom phases by offering project assistance, monitoring their progress, and ensuring consistent attendance. Participate in team meetings, lectures, and labs, continually up-skilling in the latest curricula and providing encouragement and guidance based on my own experience in the program.',
    technologies: ['Ruby on Rails', 'HTML/CSS', 'Leadership', 'Technical Support'],
    link: 'https://dpi.uillinois.edu/',
  },
  {
    dateRange: "Dec'23 - May'24",
    title: 'Software Development Apprentice',
    organization: 'Discovery Partners Institute',
    description:
      'Attended weekly classroom sessions and developed full-stack web apps utilizing technologies such as Ruby on Rails PostgreSQL, and JavaScript. Collaborated in teams throughout the development life cycle, researched issues, and designed solutions, while curating deadlines and delegating responsibilities. Engaged in networking events hosted by DPI to meet industry professionals in tech, sales, and e-commerce, enhancing soft skills through workshops in public speaking and networking for personal growth.',
    technologies: ['Ruby on Rails', 'HTML/CSS', 'Postgresql', 'JavaScript', 'Tailwind'],
    link: 'https://dpi.uillinois.edu/',
  },
  {
    dateRange: "Dec'23 - Feb'24",
    title: 'Jr Front End Web Developer',
    organization: 'TalkDust Inc.',
    description:
      'Developed and designed emoji reaction buttons for messages within TalkDusts chatrooms, aimed at connecting people over shared interests, utilizing JavaScript and Lit Elements for functionality. Assisted the UX team in the design process by creating mockups of the websites model using tools such as Figma for seamless creation and visibility of the product outcome.',
    technologies: ['JavaScript', 'Lit Elements', 'Figma'],
    link: 'https://www.linkedin.com/company/talkdust/',
  },
  {
    dateRange: "May'22 - Aug'22",
    title: 'Community Resilience Summer Associate',
    organization: 'AmeriCorps',
    description:
      'New position at Allen Neighborhood Center funded through AmeriCorps VISTA, a program focused on addressing issues related to poverty, such as public health, education, the environment, public safety, and employment. Coordinated the Bread Basket Initiative, overseeing the distribution of free produce and baked goods from the Nonprofit Organization, Allen Neighborhood Center. Canvassed low-income neighborhoods in the area, informing residents about news and resources available at the center, in addition to gathering their perceptions of the "state of the neighborhood"',
    technologies: ['Community Engagement', 'Program Development', 'Community Outreach'],
    link: 'https://www.americorps.gov/',
  },  
  {
    dateRange: "Jan'22 - May'22",
    title: 'Market Moves Coordinator Intern',
    organization: 'Allen Neighborhood Center',
    description:
      'Curated fitness and movement classes specific to residents and of Allen Neighborhood Center, accounting and accommodating for limited mobility and range of motion for senior and disabled participants. Supported the set up and operation of the year-long EBT-friendly farmers market, aiding customers in accessing funds from their accounts and transferring them into token currency for purchasing. Supervised the Market Moves Program, encouraging exercise by providing tokens to the Farmers Market as incentives for exercising, healthy eating, and supporting local farmers.',
    technologies: ['Community Engagement', 'Program Development', 'Physical Educaiton'],
    link: 'https://allenneighborhoodcenter.org/',
  },
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
                <header className='z-10 mb-2 mt-1 list-none text-sm font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2' aria-label={experience.dateRange}>
                  {experience.dateRange}
                </header>
                <div className='z-10 sm:col-span-6'>
                  <h3 className='font-medium leading-snug text-slate-200 mt-0'>
                    <a
                      className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base'
                      href={experience.link}
                      target='_blank'
                      rel='noreferrer noopener'
                      aria-label={`${experience.title}, ${experience.organization} (opens in a new tab)`}
                    >
                      <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                      <span>{experience.title} | {experience.organization}</span>
                    </a>
                  </h3>
                  <p className='mt-2 text-base leading-normal text-slate-400'>{experience.description}</p>
                  <ul className='mt-2 flex flex-wrap p-0 list-none' aria-label='Technologies used'>
                    {experience.technologies.map((tech, idx) => (
                      <li key={idx} className='mr-1.5 mt-2'>
                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>
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
        </div>
      </div>
      <a
            className='inline-flex items-baseline font-medium leading-tight hover:text-teal-300 focus-visible:text-teal-300 text-slate-200 group/link text-sm'
            href='./resume.pdf'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='View Full Résumé (opens in a new tab)'
            download={true}
          >
            View Full Résumé
          </a>
    </section>
  );
};

export default Experience;
