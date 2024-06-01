import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-betweens object-top py-4">
      <nav className="bg-slate-700 rounded-2xl relative">
        <a
          href="#Home"
          className="inline-block px-8 py-3 text-white hover:text-gray-200 z-10 relative"
        >
          KeviTruon
        </a>
        <a
          href="#About"
          className="inline-block px-8 py-3 text-white hover:text-gray-200 z-10 relative"
        >
          About
        </a>
        <a
          href="#Skills"
          className="inline-block px-8 py-3 text-white hover:text-gray-200 z-10 relative"
        >
          Skills
        </a>
        <a
          href="#Portfolio"
          className="inline-block px-8 py-3 text-white hover:text-gray-200 z-10 relative"
        >
          Portfolio
        </a>
        <a
          href="#Contact"
          className="inline-block px-8 py-3 text-white hover:text-gray-200 z-10 relative"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
