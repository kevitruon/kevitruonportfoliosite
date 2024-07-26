import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsScrolled(scrollPosition > 50);

      const sections = document.querySelectorAll('section');
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
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'About', label: 'About' },
    { id: 'Skills', label: 'Skills' },
    { id: 'Portfolio', label: 'Portfolio' },
    { id: 'Contact', label: 'Contact' },
  ];

  return (
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? (theme === 'dark' ? 'bg-gray-800 bg-opacity-80' : 'bg-white bg-opacity-80') : 'bg-transparent'} backdrop-blur-md`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#Home" className={`text-2xl font-bold ${isScrolled ? (theme === 'dark' ? 'text-white' : 'text-primary') : 'text-white'}`}>KeviTruon</a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`px-3 py-2 rounded-md text-sm font-medium ${
                            activeSection === item.id
                                ? 'text-white bg-primary'
                                : `${isScrolled ? (theme === 'dark' ? 'text-gray-300' : 'text-gray-800') : 'text-white'} hover:bg-primary hover:text-white`
                        } transition-colors duration-300`}
                        onClick={(event) => handleClick(event, item.id)}
                    >
                      {item.label}
                    </a>
                ))}
              </div>
              <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-800'}`}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full mr-2 ${theme === 'dark' ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-800'}`}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`inline-flex items-center justify-center p-2 rounded-md ${
                      isScrolled ? (theme === 'dark' ? 'text-gray-300' : 'text-gray-800') : 'text-white'
                  } hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                            activeSection === item.id
                                ? 'text-white bg-primary'
                                : `${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'} hover:bg-primary hover:text-white`
                        } transition-colors duration-300`}
                        onClick={(event) => handleClick(event, item.id)}
                    >
                      {item.label}
                    </a>
                ))}
              </div>
            </div>
        )}
      </nav>
  );
};

export default Navbar;
