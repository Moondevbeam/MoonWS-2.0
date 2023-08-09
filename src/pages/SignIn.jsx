import React, { useState, useEffect } from 'react';
import firebase from '../api/FirebaseConfig';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../api/AuthContext';
import logo from '../assets/images/1682858017524.png'

const SignIn = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (user) {
      navigate('/admin');
    }
  }, [user, navigate]);

  const handleSignInWithEmailAndPassword = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage("Invalid Email or Password");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white font-bold">
      <div className='border border-purple-700 border-[6px] mx-2 md:p-24 p-8 rounded rounded-[24px] bg-[#121212]'>
        <img className='w-24 h-24 mb-4 mx-auto border border-[3px] border-purple-700 rounded rounded-full' src={logo} alt="Imageprop" />
        <form onSubmit={handleSignInWithEmailAndPassword}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full py-2 border border-[3px] border-purple-500 rounded bg-[#333333]"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-[3px] border-purple-500 rounded bg-[#333333]"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 text-red-500">{errorMessage}</div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white mb-4 mr-4 py-2 px-4 rounded"
            type="submit"
          >
            Sign In with Email and Password
          </button>
          <div className='border border-t border-white w-full mb-8 mt-4'></div>
          <Link className='flex justify-center font-bold text-md text-white hover:text-blue-400' to={'/'}>Homepage</Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
