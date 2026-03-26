import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker,
  FaHtml5, FaCss3, FaJs, FaGit, FaFigma,
} from 'react-icons/fa';
import {
  SiDjango, SiMongodb, SiFastapi, SiSelenium,
  SiNextdotjs, SiTypescript, SiPostgresql, SiExpress,
  SiAngular, SiSpring,
} from 'react-icons/si';

const skillGroups = [
  {
    label: 'Languages',
    badge: 'text-blue-600 dark:text-blue-400',
    line: 'from-blue-500/50 dark:from-blue-500/40',
    cols: 'grid-cols-3 sm:grid-cols-6',
    skills: [
      { name: 'JavaScript', icon: <FaJs />,         iconClass: 'text-yellow-400' },
      { name: 'TypeScript', icon: <SiTypescript />, iconClass: 'text-blue-500' },
      { name: 'Python',     icon: <FaPython />,     iconClass: 'text-sky-500' },
      { name: 'Java',       icon: <FaJava />,       iconClass: 'text-orange-500' },
      { name: 'HTML5',      icon: <FaHtml5 />,      iconClass: 'text-orange-500' },
      { name: 'CSS3',       icon: <FaCss3 />,       iconClass: 'text-blue-500' },
    ],
  },
  {
    label: 'Frameworks',
    badge: 'text-indigo-600 dark:text-indigo-400',
    line: 'from-indigo-500/50 dark:from-indigo-500/40',
    cols: 'grid-cols-2 sm:grid-cols-4',
    skills: [
      { name: 'React',      icon: <FaReact />,      iconClass: 'text-cyan-400' },
      { name: 'Next.js',    icon: <SiNextdotjs />,  iconClass: 'text-gray-800 dark:text-gray-100' },
      { name: 'Angular',    icon: <SiAngular />,    iconClass: 'text-red-500' },
      { name: 'Node.js',    icon: <FaNodeJs />,     iconClass: 'text-green-500' },
      { name: 'Express.js', icon: <SiExpress />,    iconClass: 'text-gray-700 dark:text-gray-300' },
      { name: 'Django',     icon: <SiDjango />,     iconClass: 'text-green-700 dark:text-green-400' },
      { name: 'FastAPI',    icon: <SiFastapi />,    iconClass: 'text-teal-500' },
      { name: 'SpringBoot', icon: <SiSpring />,     iconClass: 'text-green-500' },
    ],
  },
  {
    label: 'Tools & Databases',
    badge: 'text-emerald-600 dark:text-emerald-400',
    line: 'from-emerald-500/50 dark:from-emerald-500/40',
    cols: 'grid-cols-3 sm:grid-cols-6',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, iconClass: 'text-blue-600 dark:text-blue-400' },
      { name: 'MongoDB',    icon: <SiMongodb />,    iconClass: 'text-green-500' },
      { name: 'Docker',     icon: <FaDocker />,     iconClass: 'text-blue-500' },
      { name: 'Git',        icon: <FaGit />,        iconClass: 'text-orange-500' },
      { name: 'Selenium',   icon: <SiSelenium />,   iconClass: 'text-green-500' },
      { name: 'Figma',      icon: <FaFigma />,      iconClass: 'text-pink-500' },
    ],
  },
];

// Subtle floating orbs — slightly stronger in dark mode
const orbs = [
  {
    style: { width: 520, height: 520, top: '-10%', left: '-8%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' },
    animate: { x: [0, 40, -20, 0], y: [0, -30, 50, 0], scale: [1, 1.08, 0.96, 1] },
    transition: { duration: 18, repeat: Infinity, ease: 'easeInOut' as const },
  },
  {
    style: { width: 400, height: 400, top: '20%', right: '-6%', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)' },
    animate: { x: [0, -50, 20, 0], y: [0, 40, -30, 0], scale: [1, 0.94, 1.06, 1] },
    transition: { duration: 22, repeat: Infinity, ease: 'easeInOut' as const, delay: 3 },
  },
  {
    style: { width: 460, height: 460, bottom: '-15%', left: '35%', background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)' },
    animate: { x: [0, 30, -40, 0], y: [0, -50, 20, 0], scale: [1, 1.05, 0.98, 1] },
    transition: { duration: 26, repeat: Infinity, ease: 'easeInOut' as const, delay: 6 },
  },
];

const SkillGroup = ({
  group,
  groupIndex,
}: {
  group: typeof skillGroups[0];
  groupIndex: number;
}) => (
  <div>
    <div className="flex items-center gap-3 mb-4">
      <span className={`text-xs font-semibold uppercase tracking-widest ${group.badge}`}>
        {group.label}
      </span>
      <div className={`flex-1 h-px bg-gradient-to-r ${group.line} to-transparent`} />
    </div>
    <div className={`grid ${group.cols} gap-3`}>
      {group.skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: groupIndex * 0.12 + i * 0.05 }}
          className="
            flex flex-col items-center justify-center gap-2 p-3 rounded-xl
            bg-white dark:bg-gray-800/60
            border border-gray-100 dark:border-white/[0.07]
            backdrop-blur-sm dark:backdrop-blur-[10px]
          "
        >
          <div className={`text-2xl ${skill.iconClass}`}>
            {skill.icon}
          </div>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-300 text-center leading-tight">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <section className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
    {/* Floating background orbs */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{ ...orb.style, filter: 'blur(72px)' }}
          animate={orb.animate}
          transition={orb.transition}
        />
      ))}
    </div>

    <div className="relative z-10">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          <span className="gradient-text">Skills</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A selection of technologies I work with to create exceptional digital experiences.
        </p>
      </div>

      <div className="mt-8 space-y-8">
        {skillGroups.map((group, i) => (
          <SkillGroup key={group.label} group={group} groupIndex={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
