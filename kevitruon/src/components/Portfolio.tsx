import React from "react";
import { useTheme } from "../ThemeContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    style={{
      position: 'absolute',
      right: -48,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 10,
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 15px rgba(99,102,241,0.4)',
      transition: 'all 0.3s ease',
    }}
    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-50%) scale(1.1)'; }}
    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-50%)'; }}
    aria-label="Next"
  >
    <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    style={{
      position: 'absolute',
      left: -48,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 10,
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 15px rgba(99,102,241,0.4)',
      transition: 'all 0.3s ease',
    }}
    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-50%) scale(1.1)'; }}
    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-50%)'; }}
    aria-label="Previous"
  >
    <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
    </svg>
  </button>
);

interface Project {
  title: string;
  description: string;
  image: string;
  repoLink: string;
  tags: string[];
  badge?: string;
  badgeColor?: string;
}

const Portfolio: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const projects: Project[] = [
    {
      title: "ExamForge",
      description: "AI-powered exam and flashcard generator. Users can create personalized study materials from any topic using Gemini AI.",
      image: require("../assets/examforge.png"),
      repoLink: "https://exam-forge.vercel.app/",
      tags: ["React", "Next.js", "Gemini AI", "Stripe", "Clerk"],
      badge: "Live",
      badgeColor: "#10B981",
    },
    {
      title: "Flashcard SaaS",
      description: "Full-stack SaaS flashcard application with AI-generated content, user auth, and subscription billing.",
      image: require("../assets/flashcard.png"),
      repoLink: "https://github.com/KJBRHeadstarter/flashcard-saas",
      tags: ["Next.js", "Gemini AI", "Clerk", "Stripe", "Firebase"],
      badge: "SaaS",
      badgeColor: "#6366F1",
    },
    {
      title: "Pantry Manager AI",
      description: "Smart pantry tracker that uses AI to suggest recipes based on ingredients you have on hand.",
      image: require("../assets/pantry.png"),
      repoLink: "https://github.com/kevitruon/Pantry-Tracker",
      tags: ["React", "Next.js", "OpenAI", "Firebase"],
      badge: "AI",
      badgeColor: "#F59E0B",
    },
    {
      title: "FitConnect",
      description: "Social media workout tracker for athletes. Log workouts, follow friends, and track fitness progress.",
      image: require("../assets/fitconnect.png"),
      repoLink: "https://github.com/kevitruon/FitConnect",
      tags: ["React", "FastAPI", "PostgreSQL", "Docker"],
    },
    {
      title: "CarCar Dealer",
      description: "Full-featured car dealership management app with inventory, sales, and service appointment tracking.",
      image: require("../assets/carcardealership.png"),
      repoLink: "https://github.com/kevitruon/CarCarDealership",
      tags: ["React", "Django", "PostgreSQL", "REST API"],
    },
    {
      title: "Computer Graphics",
      description: "3D model renderer using Three.js and WebGL. Demonstrates shader programming and real-time 3D rendering.",
      image: require("../assets/computergraphics.png"),
      repoLink: "https://github.com/kevitruon/ComputerGraphics-WebGL",
      tags: ["Three.js", "WebGL", "GLSL", "HTML5"],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: 'slick-dots',
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const sectionBg = isDark ? '#0D1117' : '#F1F5F9';

  return (
    <div
      id="Portfolio"
      style={{
        background: sectionBg,
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: isDark
          ? 'radial-gradient(at 50% 0%, rgba(99,102,241,0.08) 0, transparent 60%)'
          : 'radial-gradient(at 50% 0%, rgba(99,102,241,0.05) 0, transparent 60%)',
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-sm font-semibold tracking-widest uppercase mb-3 block"
            style={{ color: '#6366F1' }}
          >
            Work
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: isDark ? '#F9FAFB' : '#111827' }}
          >
            Featured{' '}
            <span style={{
              background: 'linear-gradient(135deg, #6366F1, #A78BFA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Projects
            </span>
          </h2>
          <p style={{ color: isDark ? 'rgba(255,255,255,0.5)' : '#6B7280', maxWidth: 440, margin: '0 auto' }}>
            A selection of full-stack applications, AI integrations, and systems I've built.
          </p>
          <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)', marginTop: '2rem' }} />
        </div>

        {/* Slider */}
        <div style={{ position: 'relative', padding: '0 3rem' }}>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} style={{ padding: '0 1rem' }}>
                <div
                  style={{
                    background: isDark ? 'rgba(17,24,39,0.9)' : 'rgba(255,255,255,0.95)',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)'}`,
                    borderRadius: '1.25rem',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    transition: 'all 0.4s ease',
                    boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.08)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = 'translateY(-8px)';
                    el.style.boxShadow = '0 20px 50px rgba(99,102,241,0.2)';
                    el.style.borderColor = 'rgba(99,102,241,0.35)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = '';
                    el.style.boxShadow = isDark ? '0 4px 20px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.08)';
                    el.style.borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)';
                  }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', overflow: 'hidden', height: 180 }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; }}
                    />
                    {/* Gradient overlay */}
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      height: '60%',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                    }} />
                    {/* Badge */}
                    {project.badge && (
                      <div
                        style={{
                          position: 'absolute',
                          top: 12, right: 12,
                          background: project.badgeColor || '#6366F1',
                          color: 'white',
                          fontSize: 11,
                          fontWeight: 700,
                          padding: '3px 10px',
                          borderRadius: 9999,
                          letterSpacing: '0.05em',
                        }}
                      >
                        {project.badge}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ color: isDark ? '#F9FAFB' : '#111827' }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-sm mb-4"
                      style={{
                        color: isDark ? 'rgba(255,255,255,0.6)' : '#6B7280',
                        lineHeight: 1.6,
                        flexGrow: 1,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      } as React.CSSProperties}
                    >
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1rem' }}>
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          style={{
                            fontSize: 11,
                            fontWeight: 600,
                            padding: '2px 8px',
                            borderRadius: 6,
                            background: isDark ? 'rgba(99,102,241,0.12)' : 'rgba(99,102,241,0.08)',
                            color: isDark ? '#A78BFA' : '#6366F1',
                            border: `1px solid ${isDark ? 'rgba(99,102,241,0.25)' : 'rgba(99,102,241,0.2)'}`,
                          }}
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
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1.25rem',
                        borderRadius: '0.625rem',
                        background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '0.8125rem',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 12px rgba(99,102,241,0.3)',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 20px rgba(99,102,241,0.5)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.transform = '';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(99,102,241,0.3)';
                      }}
                    >
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .slick-dots li button:before {
          color: #6366F1 !important;
          opacity: 0.4;
          font-size: 8px;
        }
        .slick-dots li.slick-active button:before {
          color: #6366F1 !important;
          opacity: 1;
        }
        .slick-dots {
          bottom: -36px;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
