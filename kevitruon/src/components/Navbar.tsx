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

      const sections = document.querySelectorAll('section, [id]');
      sections.forEach((section) => {
        const el = section as HTMLElement;
        const sectionTop = el.offsetTop;
        const sectionHeight = el.clientHeight;
        if (
          scrollPosition >= sectionTop - 200 &&
          scrollPosition < sectionTop + sectionHeight - 200
        ) {
          setActiveSection(el.getAttribute('id') || '');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'About', label: 'About' },
    { id: 'Skills', label: 'Skills' },
    { id: 'Portfolio', label: 'Portfolio' },
    { id: 'Contact', label: 'Contact' },
  ];

  const isDark = theme === 'dark';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? isDark
            ? 'bg-gray-900/80 shadow-lg shadow-black/20'
            : 'bg-white/80 shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
      style={{ backdropFilter: isScrolled ? 'blur(16px)' : 'none', WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none' }}
    >
      {/* Gradient border bottom line */}
      {isScrolled && (
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }} />
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#Home"
            onClick={(e) => handleClick(e, 'Home')}
            className="flex items-center gap-2 group"
          >
            <span
              className={`text-xl font-extrabold tracking-tight transition-all duration-300 ${
                isScrolled
                  ? isDark ? 'text-white' : 'text-gray-900'
                  : 'text-white'
              }`}
              style={{
                background: 'linear-gradient(135deg, #6366F1, #A78BFA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Kevin Truong
            </span>
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full hidden sm:inline-block"
              style={{
                background: 'rgba(232,33,39,0.15)',
                border: '1px solid rgba(232,33,39,0.4)',
                color: '#F87171',
              }}
            >
              @ Tesla
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white'
                    : isScrolled
                      ? isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                      : 'text-white/80 hover:text-white'
                }`}
                style={activeSection === item.id ? {
                  background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                  boxShadow: '0 4px 12px rgba(99,102,241,0.35)',
                } : {}}
              >
                {item.label}
              </a>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full transition-all duration-300 hover:scale-110"
              style={{
                background: isDark ? 'rgba(99,102,241,0.15)' : 'rgba(0,0,0,0.08)',
                border: `1px solid ${isDark ? 'rgba(99,102,241,0.3)' : 'rgba(0,0,0,0.1)'}`,
              }}
              aria-label="Toggle theme"
            >
              {isDark
                ? <span className="text-base">☀️</span>
                : <span className="text-base">🌙</span>
              }
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full"
              style={{
                background: isDark ? 'rgba(99,102,241,0.15)' : 'rgba(0,0,0,0.08)',
                border: `1px solid ${isDark ? 'rgba(99,102,241,0.3)' : 'rgba(0,0,0,0.1)'}`,
              }}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full transition-all ${
                isScrolled ? (isDark ? 'text-gray-300' : 'text-gray-700') : 'text-white'
              }`}
              aria-label="Open menu"
            >
              {isMenuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className="md:hidden"
          style={{
            background: isDark ? 'rgba(17,24,39,0.95)' : 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderTop: '1px solid rgba(99,102,241,0.15)',
          }}
        >
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-white'
                    : isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
                style={activeSection === item.id ? {
                  background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                } : {}}
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
