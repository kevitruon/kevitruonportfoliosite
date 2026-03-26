import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  repoLink: string;
  tags: string[];
  badge?: string;
  badgeColor?: string;
}

const projects: Project[] = [
  {
    title: 'ExamForge',
    description: 'AI-powered exam and flashcard generator. Users can create personalized study materials from any topic using Gemini AI.',
    image: require('../assets/examforge.png'),
    repoLink: 'https://exam-forge.vercel.app/',
    tags: ['React', 'Next.js', 'Gemini AI', 'Stripe', 'Clerk'],
    badge: 'Live',
    badgeColor: '#10B981',
  },
  {
    title: 'Flashcard SaaS',
    description: 'Full-stack SaaS flashcard application with AI-generated content, user auth, and subscription billing.',
    image: require('../assets/flashcard.png'),
    repoLink: 'https://github.com/KJBRHeadstarter/flashcard-saas',
    tags: ['Next.js', 'Gemini AI', 'Clerk', 'Stripe', 'Firebase'],
    badge: 'SaaS',
    badgeColor: '#6366F1',
  },
  {
    title: 'Pantry Manager AI',
    description: 'Smart pantry tracker that uses AI to suggest recipes based on ingredients you have on hand.',
    image: require('../assets/pantry.png'),
    repoLink: 'https://github.com/kevitruon/Pantry-Tracker',
    tags: ['React', 'Next.js', 'OpenAI', 'Firebase'],
    badge: 'AI',
    badgeColor: '#F59E0B',
  },
  {
    title: 'FitConnect',
    description: 'Social media workout tracker for athletes. Log workouts, follow friends, and track fitness progress.',
    image: require('../assets/fitconnect.png'),
    repoLink: 'https://github.com/kevitruon/FitConnect',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'CarCar Dealer',
    description: 'Full-featured car dealership management app with inventory, sales, and service appointment tracking.',
    image: require('../assets/carcardealership.png'),
    repoLink: 'https://github.com/kevitruon/CarCarDealership',
    tags: ['React', 'Django', 'PostgreSQL', 'REST API'],
  },
  {
    title: 'Computer Graphics',
    description: '3D model renderer using Three.js and WebGL. Demonstrates shader programming and real-time 3D rendering.',
    image: require('../assets/computergraphics.png'),
    repoLink: 'https://github.com/kevitruon/ComputerGraphics-WebGL',
    tags: ['Three.js', 'WebGL', 'GLSL', 'HTML5'],
  },
];

// Number of cloned slides prepended/appended for infinite loop
const CLONES = 3;
const AUTO_MS = 4500;
const SLIDE_MS = 0.55; // seconds

function getSlidesToShow() {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

const SLIDE_EASE = [0.25, 0.46, 0.45, 0.94] as const;

// ── Project card ────────────────────────────────────────────────────────────

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="h-full flex flex-col bg-white dark:bg-gray-900/90 border border-gray-100 dark:border-white/5 rounded-2xl overflow-hidden group">
    {/* Image */}
    <div className="relative overflow-hidden h-44 flex-shrink-0">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      {project.badge && (
        <span
          className="absolute top-3 right-3 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wide"
          style={{ background: project.badgeColor ?? '#6366F1' }}
        >
          {project.badge}
        </span>
      )}
    </div>

    {/* Body */}
    <div className="flex flex-col flex-1 p-5 gap-3">
      <h3 className="text-base font-bold text-gray-900 dark:text-gray-50 leading-snug">
        {project.title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-500/20"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <a
        href={project.repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30"
        style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}
      >
        <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        View Project
      </a>
    </div>
  </div>
);

// ── Arrow button ─────────────────────────────────────────────────────────────

const ArrowBtn = ({
  dir,
  onClick,
}: {
  dir: 'prev' | 'next';
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    aria-label={dir === 'prev' ? 'Previous' : 'Next'}
    className={`
      absolute top-1/2 -translate-y-1/2 z-10
      w-10 h-10 rounded-full flex items-center justify-center
      bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm
      border border-gray-200 dark:border-white/10
      text-gray-700 dark:text-gray-200
      shadow-md hover:shadow-lg
      transition-all duration-200 hover:scale-110
      ${dir === 'prev' ? 'left-2 sm:left-3' : 'right-2 sm:right-3'}
    `}
  >
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      {dir === 'prev'
        ? <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
        : <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />}
    </svg>
  </button>
);

// ── Portfolio ─────────────────────────────────────────────────────────────────

const Portfolio = () => {
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);

  // Build infinite slide list: [last CLONES real slides] + real + [first CLONES real slides]
  const slides = [
    ...projects.slice(-CLONES),
    ...projects,
    ...projects.slice(0, CLONES),
  ];
  const realStart = CLONES; // index in `slides` of projects[0]
  const realEnd = realStart + projects.length - 1; // index of projects[last]

  const [idx, setIdx] = useState(realStart);
  const [animate, setAnimate] = useState(true); // false = instant snap, no transition

  // Responsive slidesToShow
  useEffect(() => {
    const onResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const advance = useCallback((dir: 1 | -1) => {
    setAnimate(true);
    setIdx(i => i + dir);
  }, []);

  // Infinite loop snap-back
  useEffect(() => {
    if (idx > realEnd) {
      // Entered appended clone zone → wait for animation, snap to realStart
      const t = setTimeout(() => {
        setAnimate(false);
        setIdx(realStart);
        // Re-enable animation after one paint
        requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
      }, SLIDE_MS * 1000);
      return () => clearTimeout(t);
    }
    if (idx < realStart) {
      // Entered prepended clone zone → snap to realEnd
      const t = setTimeout(() => {
        setAnimate(false);
        setIdx(realEnd);
        requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
      }, SLIDE_MS * 1000);
      return () => clearTimeout(t);
    }
  }, [idx, realStart, realEnd]);

  // Auto-play
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => advance(1), AUTO_MS);
    return () => clearInterval(t);
  }, [paused, advance]);

  // Active dot index relative to real projects array
  const activeDot = ((idx - realStart) % projects.length + projects.length) % projects.length;

  // Strip geometry
  // strip width = (slides.length / slidesToShow) × container width
  // translateX as % of strip: -(idx / slides.length) × 100%
  const stripWidthPct = (slides.length / slidesToShow) * 100;
  const translateXPct = -(idx / slides.length) * 100;

  return (
    <div id="Portfolio" className="relative bg-gray-50 dark:bg-gray-950 py-20 overflow-hidden">
      {/* Subtle top gradient accent */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,rgba(99,102,241,0.07)_0%,transparent_60%)] dark:bg-[radial-gradient(ellipse_at_50%_0%,rgba(99,102,241,0.1)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-500 mb-3 block">
            Work
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-50 mb-4">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto text-base">
            A selection of full-stack applications, AI integrations, and systems I've built.
          </p>
          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Arrows */}
          <ArrowBtn dir="prev" onClick={() => advance(-1)} />
          <ArrowBtn dir="next" onClick={() => advance(1)} />

          {/* Track */}
          <div
            className="overflow-hidden mx-6 sm:mx-10 rounded-2xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={e => { touchStartX.current = e.touches[0].clientX; }}
            onTouchEnd={e => {
              const diff = touchStartX.current - e.changedTouches[0].clientX;
              if (Math.abs(diff) > 48) advance(diff > 0 ? 1 : -1);
            }}
          >
            <motion.div
              className="flex items-stretch"
              style={{ width: `${stripWidthPct}%` }}
              animate={{ x: `${translateXPct}%` }}
              transition={
                animate
                  ? { duration: SLIDE_MS, ease: SLIDE_EASE }
                  : { duration: 0 }
              }
            >
              {slides.map((project, i) => (
                <div
                  key={i}
                  style={{ width: `${100 / slides.length}%` }}
                  className="px-2 sm:px-3"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {projects.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => {
                  setAnimate(true);
                  setIdx(realStart + i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeDot
                    ? 'w-6 bg-indigo-500'
                    : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-indigo-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
