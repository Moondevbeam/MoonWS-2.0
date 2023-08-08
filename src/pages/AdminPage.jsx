import React, { useEffect } from 'react';
import Navbar from '../components/Navbar'; // Import your Navbar component
import PostListAdmin from '../components/admin/PostListAdmin'; // Import the component for listing posts
import CreatePostForm from '../components/admin/CreatePostForm';
import { useNavigate } from 'react-router-dom';
import firebase from '../api/FirebaseConfig';

const AdminPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      const user = firebase.auth().currentUser;
      if (!user) {
        navigate('/'); // Redirect to home if user is not authenticated
      }
    };
    
    checkAuthentication();
  });
    return (
      <div>
        <Navbar />
        <CreatePostForm />
        <h3 className='mx-4 mb-8 text-center font-bold text-xl'>Manage Posts</h3>
        <PostListAdmin />
      </div>
    );
  };

export default AdminPage;
