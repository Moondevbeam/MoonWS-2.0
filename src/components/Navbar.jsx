import React from 'react';
import logo from '../assets/images/1682858017524.png'
import DarkModeToggle from '../Utilities/DarkModeToggle'
import Dropdown from '../Utilities/Dropdown';
const Navbar = () => {
  return (
    <nav className="flex p-2 md:p-6 justify-between mx-auto bg-white bg-opacity-[0.35] sticky rounded-[32px] mx-2 top-1 mb-1 z-10">
      <div className="flex items-center">
        <img src={logo} alt="logo" className='w-8 h-8 md:w-12 md:h-12 mr-8 ml-4'/>
        <DarkModeToggle/>
      </div>
      <div className="hidden md:flex justify-end text-[#8000ff] font-extrabold text-lg">
        <a href="/" aria-label='Home' className="px-4 py-2 hover:text-blue-700">Home</a>
        <a href="/About" aria-label='About' className="px-4 py-2 hover:text-blue-700">About</a>
        <a href="/Projects" aria-label='Projects' className="px-4 py-2 hover:text-blue-700">Projects</a>
        <a href="/Blog" aria-label='Blog' className="px-4 py-2 hover:text-blue-700">Blog</a>
      </div>

        <div className="flex md:hidden">
          <Dropdown/>
        </div>
            </nav>
          );
        }

        export default Navbar;
