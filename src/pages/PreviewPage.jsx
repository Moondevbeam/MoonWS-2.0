import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../api/AuthContext';
import firebase from '../api/FirebaseConfig';

const PreviewPage = () => {
  const { projectId } = useParams();
  // eslint-disable-next-line
  const { user } = useAuth();
  const [projectData, setProjectData] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedImageURL, setEditedImageURL] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedSmallImageURL, setEditedSmallImageURL] = useState('');
  const [editedExtraDescription, setEditedExtraDescription] = useState('');
  const [editedExtraSmallImageURL, setEditedExtraSmallImageURL] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const projectSnapshot = await firebase.firestore().collection('projects').doc(projectId).get();
        if (projectSnapshot.exists) {
          const project = projectSnapshot.data();
          setProjectData(project);
          setEditedTitle(project.title);
          setEditedImageURL(project.imageURL);
          setEditedDescription(project.description);
          setEditedSmallImageURL(project.smallimgURL);
          setEditedExtraDescription(project.extraDescription);
          setEditedExtraSmallImageURL(project.extraSmallimgURL);
        } else {
          console.log('Project not found');
        }
      } catch (error) {
        console.error(error);
      }
    };

    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is authenticated, fetch project data
        fetchProjectData();
      } else {
        // User is not authenticated, navigate to /admin
        navigate('/admin');
      }
    });

    return () => unsubscribe();
  }, [projectId, navigate]);


  const handleSaveChanges = async () => {
    try {
      await firebase.firestore().collection('projects').doc(projectId).update({
        title: editedTitle,
        imageURL: editedImageURL,
        description: editedDescription,
        smallimgURL: editedSmallImageURL,
        extraDescription: editedExtraDescription,
        extraSmallimgURL: editedExtraSmallImageURL,
      });

      console.log('Changes saved successfully');
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = async (file) => {
    if (file) {
      try {
        const imageRef = firebase.storage().ref().child(file.name);
        await imageRef.put(file);
        const imageURL = await imageRef.getDownloadURL();
        setEditedImageURL(imageURL);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleSmallImageChange = async (file) => {
    if (file) {
      try {
        const imageRef = firebase.storage().ref().child(file.name);
        await imageRef.put(file);
        const imageURL = await imageRef.getDownloadURL();
        setEditedSmallImageURL(imageURL);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleExtraImageChange = async (file) => {
    if (file) {
      try {
        const imageRef = firebase.storage().ref().child(file.name);
        await imageRef.put(file);
        const imageURL = await imageRef.getDownloadURL();
        setEditedExtraSmallImageURL(imageURL);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDeleteProject = async () => {
    try {
      await firebase.firestore().collection('projects').doc(projectId).delete();
      console.log('Project deleted successfully');
      navigate('/admin');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 px-4 text-black font-semibold">
        {projectData ? (
          <div>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="text-2xl font-semibold mb-4 w-full px-2 py-1 border rounded"
            />
            <div className="relative">
              <label htmlFor="fileInput" className="cursor-pointer">
                <img
                  src={editedImageURL}
                  alt={editedTitle}
                  className="w-full h-auto object-cover mb-4 rounded"
                />
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e.target.files[0])}
                className="hidden"
                id="fileInput"
                placeholder=''
              />
            </div>
            <div className='text-white text-center text-2xl font-semibold my-4'><h1>KEY FEATURES</h1></div>
            <div className="flex">
              <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                className="w-1/2 p-2 border rounded"
                rows="4"
                placeholder="Enter project description"
              />
              <div className="w-1/2 mx-2">
                <div className="relative">
                  <label htmlFor="smallFileInput" className="cursor-pointer">
                    <img
                      src={editedSmallImageURL}
                      alt={editedTitle}
                      className="w-full h-auto object-cover rounded"
                    />
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleSmallImageChange(e.target.files[0])}
                    className="hidden"
                    id="smallFileInput"
                  />
                </div>
              </div>
            </div>
            <div className='border border-t border-[2px] my-8'></div>
            <div className="flex">
              <div className="w-1/2 pr-2">
                <div className="relative">
                  <label htmlFor="extraSmallFileInput" className="cursor-pointer">
                    <img
                      src={editedExtraSmallImageURL}
                      alt={editedTitle}
                      className="w-full h-auto object-cover rounded"
                    />
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleExtraImageChange(e.target.files[0])}
                    className="hidden"
                    id="extraSmallFileInput"
                  />
                </div>
              </div>
              <textarea
                value={editedExtraDescription}
                onChange={(e) => setEditedExtraDescription(e.target.value)}
                className="w-1/2 p-2 border rounded"
                rows="4"
                placeholder="Enter extra project description"
              />
            </div>
            <div className="flex justify-between">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-4"
                onClick={handleDeleteProject}
              >
                Delete Project
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
            </div>
          </div>
        ) : (
          <p>Loading project data...</p>
        )}
      </div>
    </div>
  );
};

export default PreviewPage;
