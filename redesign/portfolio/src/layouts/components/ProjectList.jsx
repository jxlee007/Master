// import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Clone Portfolio Web',
    description: 'A portfolio website with a modern design and smooth scrolling.',
    tags: ['Portfolio Website', 'Web Design'],
    demoLink: '#',
  },
  {
    title: 'DUO',
    description: 'A modern website showcasing brand experiences with smooth transitions and bold digital solutions.',
    tags: ['Web Design', 'Interactive'],
    demoLink: '#',
  },
  {
    title: 'REJOICE',
    description: 'A minimalist website with a little bit of animated and interactive elements for enhanced user engagement.',
    tags: ['Web Design', 'Interactive'],
    demoLink: '#',
  },
  {
    title: 'Sundown',
    description: 'An award-winning portfolio site with interactive features and responsive design.',
    tags: ['Portfolio', 'Web Design'],
    demoLink: '#',
  },
  {
    title: 'Sneakers Store Ecommerce',
    description: 'An e-commerce landing page with a dynamic product slider, detailed product sections, interactive features, and more.',
    tags: ['E-commerce', 'Web Design'],
    demoLink: '#',
  },
];

const ProjectList = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {projects.map(project => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
};

export default ProjectList;
