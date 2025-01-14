import React from 'react';
import lineupImage from './images/lineup-cutout.png';
import gigitImage from './images/gigit-cutout.png'

const projects = [
  {
    title: 'LineUp | Routine Generator',
    description: 'Generate a personalized routine with LineUp. This tool helps users streamline their routines with ease.',
    imageSrc: lineupImage, // Replace this with the correct image import or path
    link: 'https://github.com/marywebby/lineup',
  }, 
  {
    title: 'GigIt | Side-Gig Platform',
    description: 'Showcase your side-gigs and manage external payment methods with GigIt. This tool will allow users to get paid for their hobbies & side projects, letting family and friends easily book them for their services.',
    imageSrc: gigitImage, 
    link: 'https://github.com/marywebby/GigIt'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
      <div className="sticky top-0 z-20 -mx-10 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
      </div>

      <div>
        <ul className="group/list p-0">
          {projects.map((project, index) => (
            <li key={index} className="mb-12 list-none">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">

                <img
                  alt={project.title}
                  width={160}
                  height={100}
                  decoding="async"
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-2 sm:col-span-2 sm:translate-y-1"
                  src={project.imageSrc}
                />

                <div className="z-10 sm:order-1 sm:col-span-6">
                  <h3 className="mt-0">
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span className="font-medium text-base">
                        {project.title}
                        <span className="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-base leading-normal text-slate-400">
                    {project.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;