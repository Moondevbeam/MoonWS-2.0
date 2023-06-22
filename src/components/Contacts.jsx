import React from 'react';

const Contacts = () => {
  return (
    <div className='mb-8'>
      <h2 className="text-2xl font-bold mt-16 text-center md:block">
        Links and Contacts
      </h2>
      <div className="mt-10 flex flex-col items-center md:flex-row md:justify-start">
        <div className="w-full flex flex-col items-center mb-16 md:mb-0 md:mr-8">
          <div className="flex-grow hover:scale-125 cursor-pointer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="mb-2 mx-auto h-16 w-16"/>
          <h3 className="text-sm text-center font-extrabold"><a href="https://www.linkedin.com/in/moonbeam-dev/" aria-label='LinkedIn Account'>LinkedIn</a></h3>
          </div>
        </div>
        <div className="w-full flex flex-col items-center mb-16 md:mb-0 md:mr-8">
          <div className="flex-grow hover:scale-125 cursor-pointer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github" className="mb-2 mx-auto h-16 w-16"/>
          <h3 className="text-sm text-center font-extrabold"><a href="https://github.com/Moondevbeam" aria-label='Github Account'>Github</a></h3>
            <div className="flex items-center justify-center mt-4">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
