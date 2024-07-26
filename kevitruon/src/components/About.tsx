import React from "react";
import { useTheme } from '../ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
      <div className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`} id="About">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-primary'}`}>About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300`}>
              <h3 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-primary' : 'text-primary'}`}>Education</h3>
              <div className="mb-6">
                <h4 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Hack Reactor (2023-2024)</h4>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Advanced Software Engineering Certificate</p>
              </div>
              <div>
                <h4 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>UC Santa Cruz (2020-2023)</h4>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Computer Science: Game Design</p>
              </div>
            </div>
            <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300`}>
              <h3 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-primary' : 'text-primary'}`}>Experience</h3>
              <div>
                <h4 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Software Engineering Fellow</h4>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-2`}>Headstarter (July 2024 - Present)</p>
                <ul className={`list-disc pl-5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>Built 5+ AI apps and APIs using NextJS, OpenAI, Pinecone, StripeAPI</li>
                  <li>Developed projects from design to deployment</li>
                  <li>Coached by engineers from Amazon, Bloomberg, and Capital One</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
<a
            href="https://drive.google.com/file/d/1YPjf-_R9F4iY50T0_L0qkeW5Ihh3t6wc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block ${theme === 'dark' ? 'bg-primary text-white' : 'bg-accent text-white'} font-semibold py-3 px-8 rounded-full transition duration-300`}
            >
            View Resume
          </a>
        </div>
      </div>
</div>
);
};

export default About;