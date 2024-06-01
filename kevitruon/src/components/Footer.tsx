import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-4">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/kevitruon/" className="text-white hover:text-gray-400">
            <i className="fab fa-linkedin">LinkedIn</i>
          </a>
          <a href="https://github.com/kevitruon" className="text-white hover:text-gray-400">
            <i className="fab fa-github">Github</i>
          </a>
          <a href="https://gitlab.com/kevitruon" className="text-white hover:text-gray-400">
            <i className="fab fa-gitlab">Gitlab</i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
