import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto py-8" id="Portfolio">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Project 1"
            className="w-full h-64 object-cover transition duration-300 ease-in-out transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
            <div className="p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">FitConnect - Social Media Workout Tracker</h3>
              <p className="mb-4">A social media workout tracker built with React, FastAPI, and PostgreSQL.</p>
              <a
                href="https://github.com/your-repo-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                View Repo
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Project 2"
            className="w-full h-64 object-cover transition duration-300 ease-in-out transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
            <div className="p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">CarCar Dealership - Car Dealership Management Application</h3>
              <p className="mb-4">A car dealership management application built with React, Django, and PostgreSQL.</p>
              <a
                href="https://github.com/your-repo-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                View Repo
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Project 3"
            className="w-full h-64 object-cover transition duration-300 ease-in-out transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
            <div className="p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Project3</h3>
              <p className="mb-4">A brief description of Project3.</p>
              <a
                href="https://github.com/your-repo-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                View Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
