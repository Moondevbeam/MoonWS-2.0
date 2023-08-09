import React from 'react';
import image1 from '../assets/images/andras-vas-Bd7gNnWJBkU-unsplash.jpg';
import logo from '../assets/images/1682858017524.png'
import { Link } from 'react-router-dom';
function Introduction() {
  return (
    <div className='min-h-screen'>
        <img
          src={image1}
          alt="Background"
          className="object-cover absolute inset-0 w-full h-full"
        />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto p-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 pr-6">
            <h1 className="text-3xl md:text-4xl text-white mt-8 mb-2">
                      Hi! <br />
                      My name is <br /> <strong className='text-extrabold text-[#8000ff]'>Moonbeam</strong>
                    </h1>
              <p className="text-lg md:text-2xl text-white mb-8">
              Front End Developer, React and NextJS
              </p>
            </div>
            <div className="md:mt-0 md:ml-20 md:w-1/2 bg-[#121212] bg-opacity-[0.4] rounded-lg border-2 border-black p-6 text-center">
            <div className="flex items-center justify-center">
            <Link to={'/login'} className='cursor-default'>
                <img className="w-24 h-24 mb-5" src={logo} alt="Propic" />
                </Link>
              </div>
              <p className="text-[#FFFFFF] text-lg mb-5">Tech Enthusiast</p>
              <h1 className="mb-5 text-4xl md:text-4xl text-[#FFFFFF] font-bold">
                Web Developer
              </h1>
              <div className="border-t border-[#5A5A5A] mx-auto mb-2"></div>
              <button
                className="bg-[#FFFFFF] border border-[#112340] text-[#112340] font-extrabold px-6 py-2 mt-6 rounded-lg"
              ><a href="/Projects"aria-label='btn-project'>Click here to view my projects!</a>
              </button>
              <p className="text-[#FFFFFF] text-xs mt-4 mb-6">
              For business <br />{" "}
                <a
                  href="https://drive.google.com/file/d/1kjoIF_typkchQqDANVa0UCvz8IZgHTGS/view?usp=sharing"
                  aria-label='Download Link'
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-[#0062ff]"
                >
                Download CV
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
