import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Project 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">FitConnect - Social Media Workout Tracker</h3>
            <div className="flex flex-wrap mb-4">
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">JavaScript</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">Python</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">React</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">FastAPI</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">PostgreSQL</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">TailwindCSS</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">Docker</span>
            </div>
            <p className="text-gray-600">Github Repo</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Project 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">CarCar Dealership - Car Dealership Management Application</h3>
            <div className="flex flex-wrap mb-4">
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">JavaScript</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">Python</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">React</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">Django</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">PostgreSQL</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">BootStrap</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">Docker</span>
            </div>
            <p className="text-gray-600">Github Repo</p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Project 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Project3</h3>
            <div className="flex flex-wrap mb-4">
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">JavaScript</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">Python</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">React</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">Django</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">PostgreSQL</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">BootStrap</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2 mb-2">Docker</span>
            </div>
            <p className="text-gray-600">Github Repo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
