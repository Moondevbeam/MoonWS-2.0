import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {
  return (
    <div className='mb-8'>
      <h2 className="text-2xl font-bold mt-16 text-center md:block">
        Links and Contacts
      </h2>
      <div className="mt-10 flex flex-col items-center md:flex-row md:justify-start">
        <div className="w-full flex flex-col items-center mb-16 md:mb-0 md:mr-8">
          <div className="flex-grow hover:scale-125 cursor-pointer">
            <a href="https://www.linkedin.com/in/moonbeam-dev/" aria-label='LinkedIn Account'>
              <FontAwesomeIcon icon={faLinkedin} className="mb-2 mx-auto h-16 w-16 text-blue-600" />
              <h3 className="text-sm text-center font-extrabold">LinkedIn</h3>
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col items-center mb-16 md:mb-0 md:mr-8">
          <div className="flex-grow hover:scale-125 cursor-pointer">
            <a href="https://github.com/Moondevbeam" aria-label='Github Account'>
              <FontAwesomeIcon icon={faGithub} className="mb-2 mx-auto h-16 w-16 text-purple-700" />
              <h3 className="text-sm text-center font-extrabold">GitHub</h3>
            </a>
            <div className="flex items-center justify-center mt-4">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
