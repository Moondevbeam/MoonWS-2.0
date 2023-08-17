import React from 'react';
import logo from '../assets/images/1682858017524.png'
import {Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className='md:fixed md:bottom-0'>
      <div className="container mx-auto py-6 px-4">
        <div className="grid gap-2 md:grid-cols-6 grid-cols-2">
          <div className="mb-4 flex flex-col items-center col-span-2 md:col-span-1 md:mr-auto">
          <img src={logo} alt="logo" className='w-12 h-12'/>
          <Link to={'/login'} className='cursor-default'>
          <p className='mt-4 text-md text-extrabold text-[#8000ff]'>moonWS</p>
          </Link>
            <div className="relative">
            </div>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-2 flex flex-col space-y-2 text-[#898989]">
              <li><a className='hover:text-blue-400' href="https://www.linkedin.com/in/moonbeam-dev/" aria-label='Linkedin Profile'>LinkedIn</a></li>
              <li><a className='hover:text-purple-700' href="https://github.com/Moondevbeam" aria-label='Github Profile'>Github</a></li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Pages</h2>
            <ul className="mt-2 flex flex-col space-y-2 text-[#898989]">
              <li><Link className='hover:text-red-700' to="/Blog">Blog</Link></li>
              <li><Link className='hover:text-yellow-400' to="/Projects">Projects</Link></li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Download</h2>
            <ul className="mt-2 space-x-2 text-[#898989]">
              <li className='flex text-center'>
                <a className='hover:text-green-700' href="https://drive.google.com/file/d/1kjoIF_typkchQqDANVa0UCvz8IZgHTGS/view?usp=sharing" aria-label='Download'>CV</a></li>
            </ul>
          </div>
          <div className="border-l-2 border-[#5A5A5A] hidden md:block"></div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-[#A9A5DF]"><a className='hover:text-blue-700' href="https://github.com/Moondevbeam/MoonWS-2.0" aria-label='Github Repo'>Source Code</a></h2>
            <h2 className="text-lg font-semibold mt-1 text-[#A7AEBE]"><a className='hover:text-blue-700' href="https://www.instagram.com/moondevbeam/" aria-label='Instagram Profile'>Follow me on Instagram!</a></h2>
          </div>
        </div>
            <div className="border-t-2 mx-auto border-[#5A5A5A] mt-6 pt-4">
            <ul className="justify-between text-[#898989] md:flex">
              <li>Moonbeam</li>
              <li>Made with React</li>
              <li className='md:hidden'>Coded by Moonbeam ❤️</li>
            </ul>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
