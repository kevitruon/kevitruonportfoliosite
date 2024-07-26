import React from 'react';
import { useTheme } from '../ThemeContext';

const Portfolio: React.FC = () => {
  const { theme } = useTheme();

  const projects = [
    {
      title: "FitConnect - Social Media Workout Tracker",
      description: "A social media workout tracker built with React, FastAPI, and PostgreSQL.",
      image: "https://via.placeholder.com/600x400",
      repoLink: "https://github.com/your-repo-link"
    },
    {
      title: "CarCar Dealership - Car Dealership Management Application",
      description: "A car dealership management application built with React, Django, and PostgreSQL.",
      image: "https://via.placeholder.com/600x400",
      repoLink: "https://github.com/your-repo-link"
    },
    {
      title: "Project 3",
      description: "A brief description of Project 3.",
      image: "https://via.placeholder.com/600x400",
      repoLink: "https://github.com/your-repo-link"
    }
  ];

  return (
      <div className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-background'}`} id="Portfolio">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-primary'}`}>Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <div key={index} className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300`}>
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-primary'}`}>{project.title}</h3>
                    <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
<a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block px-4 py-2 ${theme === 'dark' ? 'bg-primary text-white' : 'bg-accent text-white'} rounded-md hover:bg-opacity-80 transition duration-300`}
                    >
                    View Repo
                  </a>
                </div>
              </div>
              ))}
          </div>
        </div>
      </div>
  );
};

export default Portfolio;