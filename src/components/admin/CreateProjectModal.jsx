import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import firebase from '../../api/FirebaseConfig';

const CreateProjectModal = ({ isOpen, onClose, onProjectCreated }) => {
  const [newProjectTitle, setNewProjectTitle] = useState('');
  const [newProjectImageFile, setNewProjectImageFile] = useState(null);

  const handleCreateProject = async () => {
    if (newProjectTitle && newProjectImageFile) {
      try {
        // Carica l'immagine selezionata in Firebase Storage
        const imageRef = firebase.storage().ref().child(newProjectImageFile.name);
        await imageRef.put(newProjectImageFile);

        // Ottieni l'URL dell'immagine appena caricata
        const imageURL = await imageRef.getDownloadURL();

        // Aggiungi un nuovo progetto alla collezione "projects" di Firebase
        const projectRef = await firebase.firestore().collection('projects').add({
          title: newProjectTitle,
          imageURL: imageURL,
          // Altri campi del progetto, se necessario
        });

        onProjectCreated(projectRef.id, newProjectTitle, imageURL);
        setNewProjectTitle('');
        setNewProjectImageFile(null);
        onClose();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setNewProjectImageFile(event.target.files[0]);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen backdrop-blur-sm">
        <div className="bg-white p-4 rounded-lg shadow-md max-w-md w-full mx-4">
          <Dialog.Title as="h2" className="text-xl font-semibold mb-4 text-black">
            Create New Project
          </Dialog.Title>
          <input
            type="text"
            placeholder="Project Title"
            value={newProjectTitle}
            onChange={(e) => setNewProjectTitle(e.target.value)}
            className="w-full px-3 py-2 mb-2 border rounded text-black font-semibold"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 mb-2 border rounded text-black font-semibold"
          />
          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
              onClick={handleCreateProject}
            >
              Create Project
            </button>
            <button
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default CreateProjectModal;
