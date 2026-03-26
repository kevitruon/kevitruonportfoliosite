import React from "react";
import { useTheme } from "../ThemeContext";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  type: 'tesla' | 'work' | 'education';
  bullets: string[];
  tech?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Data Operations Support",
    company: "Tesla",
    period: "Feb 2025 – Present",
    type: "tesla",
    bullets: [
      "Conduct functional testing on AI models of Tesla Bots to evaluate and document responsiveness, efficiency, and accuracy under set guidelines and operational conditions.",
      "Guide and train new hires in best practices, keeping abreast of updated guidelines and disseminating valuable information to other operators.",
      "Work with QA and project coordinators to find root causes and drive solutions.",
      "Collected and processed 800+ hours of data, maintaining an average quality score of approximately 95% across all workflows.",
    ],
    tech: ["AI/ML Testing", "Data QA", "Process Automation", "Documentation"],
  },
  {
    title: "Software Engineering Fellow",
    company: "Headstarter",
    period: "Jul 2024 – Sept 2024",
    type: "work",
    bullets: [
      "Architected and developed 5+ AI-powered applications utilizing NextJS, Gemini API, React, and Stripe API, targeting a user base of 1000+.",
      "Spearheaded end-to-end project development, from conceptualization to deployment, while leading a team of three engineering fellows.",
      "Implemented MVC design patterns to ensure scalable and maintainable codebases across multiple projects.",
    ],
    tech: ["Next.js", "React", "Gemini AI", "Stripe", "Node.js"],
  },
];

const education = {
  degree: "Advanced Software Engineering Certificate",
  school: "Hack Reactor | Galvanize",
  period: "Nov 2023 – Apr 2024",
  bullets: [
    "Completed an immersive 19-week full-stack software engineering program covering JavaScript, React, Node.js, databases, data structures, algorithms, and modern web development practices.",
    "Gained hands-on experience building complex web applications from ideation to deployment, collaborating in an Agile environment.",
    "Received personalized instruction and mentorship from experienced software engineers from top technology companies.",
  ],
  also: "AWS Cloud Practitioner Essentials Certificate | Amazon Web Services | Coursera · Jun 2024",
  ucsc: "Computer Science: Computer Game Design | UC Santa Cruz · 2020–2023 · 134 credits",
};

const typeColors = {
  tesla: {
    bg: 'rgba(232,33,39,0.1)',
    border: 'rgba(232,33,39,0.35)',
    dot: '#E82127',
    dotGlow: '0 0 10px rgba(232,33,39,0.6)',
    badge: 'rgba(232,33,39,0.15)',
    badgeText: '#F87171',
    label: '⚡ Current Role',
  },
  work: {
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.25)',
    dot: '#6366F1',
    dotGlow: '0 0 10px rgba(99,102,241,0.5)',
    badge: 'rgba(99,102,241,0.12)',
    badgeText: '#A78BFA',
    label: 'Fellow',
  },
  education: {
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.25)',
    dot: '#10B981',
    dotGlow: '0 0 10px rgba(16,185,129,0.5)',
    badge: 'rgba(16,185,129,0.12)',
    badgeText: '#34D399',
    label: 'Education',
  },
};

const About: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const sectionBg = isDark ? '#0D1117' : '#F8FAFC';
  const cardBg = isDark ? 'rgba(17,24,39,0.8)' : 'rgba(255,255,255,0.9)';
  const headingColor = isDark ? '#F9FAFB' : '#111827';
  const mutedColor = isDark ? 'rgba(255,255,255,0.55)' : '#6B7280';
  const textColor = isDark ? 'rgba(255,255,255,0.75)' : '#374151';

  return (
    <div
      id="About"
      style={{
        background: sectionBg,
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background pattern */}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: isDark
            ? 'radial-gradient(at 80% 0%, rgba(99,102,241,0.06) 0, transparent 50%), radial-gradient(at 0% 80%, rgba(232,33,39,0.04) 0, transparent 50%)'
            : 'radial-gradient(at 80% 0%, rgba(99,102,241,0.04) 0, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="text-sm font-semibold tracking-widest uppercase mb-3 block"
            style={{ color: '#6366F1' }}
          >
            Background
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: headingColor }}
          >
            About{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6366F1, #A78BFA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Me
            </span>
          </h2>
          <p style={{ color: mutedColor, maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Building at the intersection of AI, data, and full-stack engineering.
          </p>
          <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)', marginTop: '2rem' }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Experience Timeline */}
          <div>
            <h3
              className="text-lg font-bold mb-6 flex items-center gap-2"
              style={{ color: headingColor }}
            >
              <span style={{ color: '#6366F1', fontSize: '1.25rem' }}>💼</span>
              Experience
            </h3>

            <div style={{ position: 'relative', paddingLeft: '2rem' }}>
              {/* Timeline vertical line */}
              <div
                style={{
                  position: 'absolute',
                  left: '7px',
                  top: '8px',
                  bottom: 0,
                  width: '2px',
                  background: 'linear-gradient(180deg, #E82127, #6366F1, rgba(99,102,241,0.1))',
                }}
              />

              {experiences.map((exp, i) => {
                const colors = typeColors[exp.type];
                return (
                  <div
                    key={i}
                    style={{
                      position: 'relative',
                      marginBottom: i < experiences.length - 1 ? '2rem' : 0,
                    }}
                  >
                    {/* Timeline dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-2rem',
                        top: '4px',
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        background: colors.dot,
                        boxShadow: colors.dotGlow,
                        border: '2px solid ' + (isDark ? '#0D1117' : '#F8FAFC'),
                        zIndex: 1,
                      }}
                    />

                    {/* Card */}
                    <div
                      style={{
                        background: cardBg,
                        border: '1px solid ' + colors.border,
                        borderRadius: '1rem',
                        padding: '1.25rem 1.5rem',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease',
                        boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.08)',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)';
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px rgba(0,0,0,0.4), inset 0 0 0 1px ${colors.border}`;
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.transform = '';
                        (e.currentTarget as HTMLElement).style.boxShadow = isDark ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.08)';
                      }}
                    >
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4
                              className="text-base font-bold"
                              style={{ color: headingColor }}
                            >
                              {exp.title}
                            </h4>
                            {exp.type === 'tesla' && (
                              <span
                                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                                style={{ background: colors.badge, color: colors.badgeText, border: `1px solid ${colors.border}` }}
                              >
                                {colors.label}
                              </span>
                            )}
                          </div>
                          <p
                            className="text-sm font-semibold"
                            style={{ color: colors.dot }}
                          >
                            {exp.company}
                          </p>
                        </div>
                        <span
                          className="text-xs font-medium px-2 py-1 rounded-lg shrink-0"
                          style={{ background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)', color: mutedColor }}
                        >
                          {exp.period}
                        </span>
                      </div>

                      {/* Bullets */}
                      <ul style={{ paddingLeft: '1.1rem', margin: '0 0 0.75rem 0' }}>
                        {exp.bullets.map((b, j) => (
                          <li
                            key={j}
                            className="text-sm mb-1"
                            style={{ color: textColor, lineHeight: 1.6, listStyleType: 'disc' }}
                          >
                            {b}
                          </li>
                        ))}
                      </ul>

                      {/* Tech tags */}
                      {exp.tech && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs font-medium px-2 py-0.5 rounded-md"
                              style={{ background: colors.badge, color: colors.badgeText }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3
              className="text-lg font-bold mb-6 flex items-center gap-2"
              style={{ color: headingColor }}
            >
              <span style={{ color: '#10B981', fontSize: '1.25rem' }}>🎓</span>
              Education & Certifications
            </h3>

            {/* Main education card */}
            <div
              style={{
                background: cardBg,
                border: '1px solid ' + typeColors.education.border,
                borderRadius: '1rem',
                padding: '1.5rem',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                marginBottom: '1rem',
                boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; }}
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h4
                    className="text-base font-bold mb-1"
                    style={{ color: headingColor }}
                  >
                    {education.degree}
                  </h4>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: '#10B981' }}
                  >
                    {education.school}
                  </p>
                </div>
                <span
                  className="text-xs font-medium px-2 py-1 rounded-lg shrink-0"
                  style={{ background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)', color: mutedColor }}
                >
                  {education.period}
                </span>
              </div>
              <ul style={{ paddingLeft: '1.1rem', margin: 0 }}>
                {education.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="text-sm mb-1"
                    style={{ color: textColor, lineHeight: 1.6, listStyleType: 'disc' }}
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional certifications */}
            {[
              { icon: '☁️', text: education.also, color: '#F59E0B', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)' },
              { icon: '🎮', text: education.ucsc, color: '#8B5CF6', bg: 'rgba(139,92,246,0.1)', border: 'rgba(139,92,246,0.25)' },
            ].map((cert, i) => (
              <div
                key={i}
                style={{
                  background: cardBg,
                  border: '1px solid ' + cert.border,
                  borderRadius: '0.875rem',
                  padding: '1rem 1.25rem',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; }}
              >
                <span
                  style={{
                    width: 32, height: 32, borderRadius: '0.5rem',
                    background: cert.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', flexShrink: 0,
                  }}
                >
                  {cert.icon}
                </span>
                <p className="text-sm" style={{ color: textColor, lineHeight: 1.6 }}>
                  {cert.text}
                </p>
              </div>
            ))}

            {/* Resume CTA */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.08))',
                border: '1px solid rgba(99,102,241,0.25)',
                borderRadius: '1rem',
                padding: '1.25rem',
                textAlign: 'center',
                marginTop: '1.5rem',
              }}
            >
              <p className="text-sm mb-3" style={{ color: mutedColor }}>
                Want the full picture?
              </p>
              <a
                href="https://drive.google.com/file/d/1QRO1wlbH7bksqrQdlGolohtV0XUO5Q2e/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  padding: '0.625rem 1.5rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(99,102,241,0.35)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 25px rgba(99,102,241,0.5)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 15px rgba(99,102,241,0.35)'; }}
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Full Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
