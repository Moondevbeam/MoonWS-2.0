import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import firebase from '../api/FirebaseConfig';

const ProjectId = () => {
  const { projectId } = useParams();
  const [projectData, setProjectData] = useState(null);

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
      <div className="container mx-auto mt-8 mb-8 px-4 text-purple-700 font-semibold">
        {projectData ? (
          <div>
            <h1 className="text-2xl font-semibold mb-4 text-center bg-transparent">{projectData.title}</h1>
            <img src={projectData.imageURL} alt={projectData.title} className="w-full h-auto object-cover mb-4 rounded" />
            <div className='text-gray-500 text-center text-2xl font-semibold my-4'><h2>KEY FEATURES</h2></div>
            
            {/* Reordered content for mobile view */}
            <div className="flex flex-col-reverse md:flex-row-reverse gap-8">
              <div className="w-full md:w-1/2 md:pr-2 order-last md:order-first">
                <img
                  src={projectData.smallimgURL}
                  alt={projectData.title}
                  className="w-full h-auto object-cover rounded mb-4 md:mb-0"
                />
              </div>
              <p className="w-full md:w-1/2 p-2 rounded text-gray-500 whitespace-pre-line max-w-prose">
                {projectData.description}
              </p>
            </div>
            
            <div className='border border-t border-[2px] my-8'></div>

            {/* Reordered content for mobile view */}
            <div className="flex flex-col-reverse md:flex-row gap-8">
              <div className="w-full md:w-1/2 md:pr-2 order-last md:order-first">
                <img
                  src={projectData.extraSmallimgURL}
                  alt={projectData.title}
                  className="w-full h-auto object-cover rounded mb-4 md:mb-0"
                />
              </div>
              <p className="w-full md:w-1/2 p-2 rounded text-gray-500 whitespace-pre-line max-w-prose">
                {projectData.extraDescription}
              </p>
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
