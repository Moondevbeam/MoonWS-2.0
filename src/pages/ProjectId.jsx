import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import firebase from '../api/FirebaseConfig';

const ProjectId = () => {
  const { projectId } = useParams(); // Get the projectId from the URL parameter
  const [projectData, setProjectData] = useState(null);

  // Fetch project data from Firestore based on the projectId
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const projectSnapshot = await firebase.firestore().collection('projects').doc(projectId).get();
        if (projectSnapshot.exists) {
          const project = projectSnapshot.data();
          setProjectData(project);
        } else {
          console.log('Project not found');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjectData();
  }, [projectId]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 px-4 text-black font-semibold">
        {projectData ? (
          <div>
            <h1 className="text-2xl font-semibold mb-4 text-center text-white">{projectData.title}</h1>
            <img src={projectData.imageURL} alt={projectData.title} className="w-full h-auto object-cover mb-4 rounded cursor-pointer" />
            <div className='text-white text-center text-2xl font-semibold my-4'><h2>KEY FEATURES</h2></div>
            <div className="flex">
              <div className="w-1/2 pr-2">
                <img src={projectData.smallimgURL} alt={projectData.title} className="w-full h-auto object-cover rounded cursor-pointer" />
              </div>
              <p className="w-1/2 p-2 rounded text-gray-500">{projectData.description}</p>
            </div>
            <div className='border border-t border-[2px] my-8'></div>
            <div className="flex">
              <p className="w-1/2 p-2 rounded text-gray-500">{projectData.extraDescription}</p>
              <div className="w-1/2 pr-2">
                <img src={projectData.extraSmallimgURL} alt={projectData.title} className="w-full h-auto object-cover rounded cursor-pointer" />
              </div>
            </div>
          </div>
        ) : (
          <p>Loading project data...</p>
        )}
      </div>
    </div>
  );
};

export default ProjectId;
