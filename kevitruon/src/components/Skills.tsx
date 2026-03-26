import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaHtml5, FaCss3, FaJs, FaFigma, FaGit } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Git', icon: <FaGit /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3 /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'Figma', icon: <FaFigma /> },
];

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [showAll, setShowAll] = useState(false);
  const [cardBg, setCardBg] = useState(isDark ? '#1e1e1e' : '#f9f9f9');
  const [cardBorder, setCardBorder] = useState(isDark ? '#333' : '#e0e0e0');
  const [cardHoverBg, setCardHoverBg] = useState(isDark ? '#2c2c2c' : '#eaeaea');
  const [cardHoverBorder, setCardHoverBorder] = useState('#6366ff');
  const [cardHoverShadow, setCardHoverShadow] = useState('0 8px 24px rgba(99,102,241,0.3)');
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCardBg(isDark ? '#1e1e1e' : '#f9f9f9');
    setCardBorder(isDark ? '#333' : '#e0e0e0');
    setCardHoverBg(isDark ? '#2c2c2c' : '#eaeaea');
    setCardHoverBorder('#6366ff');
    setCardHoverShadow('0 8px 24px rgba(99,102,241,0.3)');
  }, [isDark]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.animation = 'pulse 0.3s ease-in-out';
    el.style.borderColor = cardHoverBorder;
    el.style.background = cardHoverBg;
    el.style.boxShadow = cardHoverShadow;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.animation = '';
    el.style.borderColor = cardBorder;
    el.style.background = cardBg;
    el.style.boxShadow = '';
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">



        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          <span className="gradient-text">Skills</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A selection of technologies I work with to create exceptional digital experiences.
        </p>
      </div>



      <div className="mt-8 relative">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-5 gap-3">
          {skills.slice(0, showAll ? skills.length : 10).map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="glass-card border rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-3xl mb-2 transform hover:rotate-12 transition-transform">
                  {skill.icon}
                </div>
                <span className="text-xs font-medium text-gray-800 dark:text-gray-200 text-center">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>









      <div className="mt-12 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="btn-primary px-6 py-3 text-base font-medium"
        >
          {showAll ? 'Show Fewer' : 'View All'}
        </button>
      </div>
    </section>
  );
};

export default Skills;
