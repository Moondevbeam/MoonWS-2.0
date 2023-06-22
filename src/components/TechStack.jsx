import React from 'react';

function TechStack() {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-8 text-center hidden mb-32 md:block">Tech Stack</h2>
      <div className="flex flex-row justify-center items-center ml-50 mb-32 md:justify-start">
      <div className="w-1/4 hidden md:block hover:scale-125">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="mb-2 mx-auto h-32 w-32"/>
          <h3 className="text-sm text-center font-extrabold">HTML5</h3>
        </div>
        <div className="w-1/4 hidden md:block hover:scale-125">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="mb-2 mx-auto h-32 w-32"/>
          <h3 className="text-sm text-center font-extrabold">CSS</h3>
        </div>
        <div className="w-1/4 hidden md:block hover:scale-125">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="mb-2 mx-auto h-32 w-32"/>
          <h3 className="text-sm text-center font-extrabold">JavaScript</h3>
        </div>
        <div className="w-1/4 hidden md:block hover:scale-125">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="JavaScript" className="mb-2 mx-auto h-32 w-32"/>
          <h3 className="text-sm text-center font-extrabold">React</h3>
        </div>
        <div className="w-1/4 hidden md:block hover:scale-125">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind" className="mb-2 mx-auto h-32 w-32"/>
          <h3 className="text-sm text-center font-extrabold">Tailwind</h3>
        </div>
        <div className="w-1/4 hidden md:block hover:scale-125">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt="NextJS" className="mb-2 mx-auto h-32 w-32"/>
          <h3 className="text-sm text-center font-extrabold">NextJS</h3>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
