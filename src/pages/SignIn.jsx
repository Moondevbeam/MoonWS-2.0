import React, { useState } from 'react';
import firebase from '../api/FirebaseConfig';
import GitHubSignIn from '../components/admin/GithubSignIn';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignInWithEmailAndPassword = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setErrorMessage('');
      navigate('/admin'); // Naviga a /admin
    } catch (error) {
      setErrorMessage("Invalid Email or Password");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className='border border-[2px] mx-2 md:p-24 p-8 rounded rounded-[24px]'>
      <form onSubmit={handleSignInWithEmailAndPassword}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full py-2 border border-gray-500 rounded"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-500 rounded"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 text-red-500">{errorMessage}</div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white mb-4 mr-4 py-2 px-4 rounded"
          type="submit"
        >
          Sign In with Email and Password
        </button>
        <div className='border border-t border-black w-full mb-2'></div>
        <div className='text-center'>
        <GitHubSignIn/>
        </div>
      </form>
      </div>
    </div>
  );
};

export default SignIn;
