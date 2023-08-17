import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/images/1682858017524.png';
import DarkModeToggle from '../Utilities/DarkModeToggle';
import Dropdown from '../Utilities/Dropdown';
import firebase from '../api/FirebaseConfig';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="flex p-2 md:p-6 justify-between mx-auto bg-white bg-opacity-[0.45] backdrop-blur-sm sticky rounded-[32px] md:mx-6 top-1 mb-1 z-10">
      <div className="flex items-center">
        <button>
          <Link to="/">
            <img src={logo} alt="logo" className='w-10 h-10 md:w-12 md:h-12 mr-8 ml-4'/>
          </Link>
        </button>
        <DarkModeToggle/>
      </div>
      <div className="hidden md:flex justify-end text-[#8000ff] font-extrabold text-2xl">
        <button aria-label='Home'><a href="/" aria-label='Home' className="px-4 py-2 hover:text-blue-700">Home</a></button>
        <button aria-label='Projects'><a href="/Projects" aria-label='Projects' className="px-4 py-2 hover:text-blue-700">Projects</a></button>
        <button aria-label='Blog'><a href="/Blog" aria-label='Blog' className="px-4 py-2 hover:text-blue-700">Blog</a></button>
        {location.pathname === '/admin' && (
          <button
            className="px-4 mb-1 hover:text-blue-700"
            onClick={handleLogout}
          >Logout</button>
        )}
      </div>
      <div className="flex md:hidden">
        <Dropdown/>
      </div>
    </nav>
  );
}

export default Navbar;
