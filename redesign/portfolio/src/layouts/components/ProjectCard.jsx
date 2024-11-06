// import React from 'react';

const ProjectCard = ({ title, description, tags, demoLink }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
      <div className="mt-4">
        {tags.map(tag => (
          <span key={tag} className="bg-gray-700 text-sm px-2 py-1 rounded mr-2">{tag}</span>
        ))}
      </div>
      <a href={demoLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded">
        Demo
      </a>
    </div>
  );
};

export default ProjectCard;
