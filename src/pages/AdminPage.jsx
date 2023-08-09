import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import PostListAdmin from '../components/admin/PostListAdmin';
import CreatePostForm from '../components/admin/CreatePostForm';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../api/AuthContext'; // Assicurati che il percorso sia corretto
import firebase from '../api/FirebaseConfig';

const AdminPage = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const { user } = useAuth();
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      await firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setAuthReady(true);
        } else {
          navigate('/');
        }
      });
    };

    checkAuthentication();
  }, [navigate]);

  // Restituisci solo il contenuto della pagina se l'autenticazione è pronta
  if (!authReady) {
    return null;
  }

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
