import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, imageURL }) => {
  return (
    <Link to={`/admin/${id}`} className="bg-white rounded-md shadow-md cursor-pointer mx-4">
      <img src={imageURL} alt={title} className="w-full h-64 object-cover mb-2 rounded-t" />
      <h3 className="text-md text-center mb-1 font-semibold text-gray-800">{title}</h3>
    </Link>
  );
};

export default ProjectCard;
