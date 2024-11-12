// Header.js
import React from 'react';
import NavBar from './NavBar';
import LinkBar from './LinkBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex max-h-screen lg:w-1/2 lg:flex-col lg:justify-between">
      <div>
        <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-4xl mt-24'>
          Mary Webby
        </h1>
        <h2 className='mt-3 text-lg font-bold uppercase tracking-tight text-white-75 sm:text-lg'>
          Software Developer
        </h2>
        <p className='mt-4 max-w-sm leading-normal text-gray-400'>
          <FontAwesomeIcon icon={faMapPin} className='text-gray-400'/>
            &nbsp; Technical Associate at&nbsp;
              <a href="https://dpi.uillinois.edu/" className='text-gray-400 no-underline hover:text-teal-300'>D.P.I.</a>
        </p>
        <NavBar />
      </div>
      <LinkBar />
    </header>
  );
};

export default Header;
