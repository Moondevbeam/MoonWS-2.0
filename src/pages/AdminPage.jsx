import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import PostListAdmin from '../components/admin/PostListAdmin';
import CreatePostForm from '../components/admin/CreatePostForm';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../api/AuthContext';
import firebase from '../api/FirebaseConfig';
import { Switch } from '@headlessui/react';
import CreateProjectModal from '../components/admin/CreateProjectModal';
import ProjectCard from '../components/admin/ProjectCard'; // Assumi che ci sia il componente per la carta del progetto

const AdminPage = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const { user } = useAuth();
  const [authReady, setAuthReady] = useState(false);
  const [toggleState, setToggleState] = useState(true);
  const [isCreateProjectModalOpen, setIsCreateProjectModalOpen] = useState(false);
  const [projects, setProjects] = useState([]); // Stato per i progetti

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

  useEffect(() => {
    // Ottieni i progetti da Firebase e aggiorna lo stato
    const fetchProjects = async () => {
      try {
        const projectsSnapshot = await firebase.firestore().collection('projects').get();
        const projectList = projectsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projectList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  const handleToggleChange = () => {
    setToggleState(!toggleState);
  };

  const handleCreateProjectModalOpen = () => {
    setIsCreateProjectModalOpen(true);
  };

  const handleCreateProjectModalClose = () => {
    setIsCreateProjectModalOpen(false);
  };

  const handleProjectCreated = (title, imageURL) => {
    // Implementa la gestione del progetto creato qui se necessario
    console.log('New project created:', title, imageURL);
  };

  if (!authReady) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <div className='flex items-center space-x-2 mt-8 justify-center my-4'>
        <span>Show Projects</span>
        <Switch
          checked={toggleState}
          onChange={handleToggleChange}
          className={`${toggleState ? 'bg-blue-600' : 'bg-purple-700'
            } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        >
          <span className='sr-only'>Use setting</span>
          <span
            className={`${toggleState ? 'translate-x-6' : 'translate-x-1'
              } pointer-events-none inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </Switch>
        <span>Show Blog</span>
      </div>
      {toggleState ? (
        // Sezione dei blog
        <>
          <CreatePostForm />
          <div className='mt-16'>
            <PostListAdmin />
          </div>
        </>
      ) : (
        // Sezione dei progetti
        <div>
          <button
            className="bg-blue-500 text-white py-2 px-4 my-8 mx-4 rounded hover:bg-blue-600"
            onClick={handleCreateProjectModalOpen}
          >
            Create Project
          </button>
          <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-col gap-4 flex justify-center'>
          {projects.map((project) => (
    <ProjectCard
      key={project.id}
      id={project.id} // Passa l'ID del progetto
      title={project.title}
      imageURL={project.imageURL}
    />
  ))}
          </div>
          {isCreateProjectModalOpen && (
            <CreateProjectModal
              isOpen={isCreateProjectModalOpen}
              onClose={handleCreateProjectModalClose}
              onProjectCreated={handleProjectCreated}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
