import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - 200 &&
          scrollPosition < sectionTop + sectionHeight - 200
        ) {
          setActiveSection(section.getAttribute('id') || '');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-slate-700 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-8">
          <li>
            <a
              href="#Home"
              className={`text-white hover:text-gray-200 ${
                activeSection === 'Home' ? 'font-bold' : ''
              }`}
              onClick={(event) => handleClick(event, 'Home')}
            >
              KeviTruon
            </a>
          </li>
          <li>
            <a
              href="#About"
              className={`text-white hover:text-gray-200 ${
                activeSection === 'About' ? 'font-bold' : ''
              }`}
              onClick={(event) => handleClick(event, 'About')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Skills"
              className={`text-white hover:text-gray-200 ${
                activeSection === 'Skills' ? 'font-bold' : ''
              }`}
              onClick={(event) => handleClick(event, 'Skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#Portfolio"
              className={`text-white hover:text-gray-200 ${
                activeSection === 'Portfolio' ? 'font-bold' : ''
              }`}
              onClick={(event) => handleClick(event, 'Portfolio')}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className={`text-white hover:text-gray-200 ${
                activeSection === 'Contact' ? 'font-bold' : ''
              }`}
              onClick={(event) => handleClick(event, 'Contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
