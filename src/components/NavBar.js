import React from "react";

const NavBar = () => {
  const handleSmoothScroll = (e, target) => {
    e.preventDefault(); // Prevent default anchor click behavior
    const element = document.getElementById(target); // Get the target element
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the element
    }
  };

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max list-none pl-0">
        <li>
          <a
            className="group flex items-center py-3 active"
            onClick={(e) => handleSmoothScroll(e, 'about')} // Prevent default and handle smooth scroll
            href="#about" // Keep href for accessibility
            aria-label="#about"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
          </a>
        </li>
        <li>
          <a
            className="group flex items-center py-3 active"
            onClick={(e) => handleSmoothScroll(e, 'experience')}
            href="#experience" // Keep href for accessibility
            aria-label="#experience"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
          </a>
        </li>
        <li>
          <a
            className="group flex items-center py-3 active"
            onClick={(e) => handleSmoothScroll(e, 'projects')}
            href="#projects" // Keep href for accessibility
            aria-label="#projects"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
