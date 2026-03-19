import React from "react";
import { useTheme } from '../ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgStyle: React.CSSProperties = isDark
    ? {
        background: '#0A0A0F',
        backgroundImage: [
          'radial-gradient(at 30% 20%, hsla(228,83%,65%,0.18) 0px, transparent 55%)',
          'radial-gradient(at 75% 10%, hsla(270,83%,65%,0.12) 0px, transparent 55%)',
          'radial-gradient(at 5%  60%, hsla(355,83%,55%,0.10) 0px, transparent 55%)',
          'radial-gradient(at 80% 80%, hsla(228,83%,55%,0.10) 0px, transparent 55%)',
        ].join(', '),
      }
    : {
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #1e1b4b 100%)',
      };

  return (
    <div
      className="relative min-h-screen flex items-center overflow-hidden"
      style={bgStyle}
      id="Home"
    >
      {/* Floating orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '10%', left: '5%',
          width: 400, height: 400,
          borderRadius: '50%',
          background: 'rgba(99,102,241,0.12)',
          filter: 'blur(80px)',
          animation: 'float 10s ease-in-out infinite',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '10%', right: '5%',
          width: 350, height: 350,
          borderRadius: '50%',
          background: 'rgba(232,33,39,0.08)',
          filter: 'blur(70px)',
          animation: 'float 14s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '50%',
          width: 300, height: 300,
          borderRadius: '50%',
          background: 'rgba(139,92,246,0.08)',
          filter: 'blur(80px)',
          transform: 'translate(-50%,-50%)',
          animation: 'float 12s ease-in-out infinite 2s',
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Text content */}
          <div className="md:w-1/2 text-center md:text-left">

            {/* Tesla badge */}
            <div
              className="inline-flex items-center gap-2 mb-6 animate-fade-in-up"
              style={{
                background: 'rgba(232,33,39,0.12)',
                border: '1px solid rgba(232,33,39,0.35)',
                borderRadius: '9999px',
                padding: '0.375rem 1rem',
              }}
            >
              <span
                style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: '#E82127',
                  boxShadow: '0 0 8px #E82127',
                  display: 'inline-block',
                  animation: 'pulse 2s infinite',
                }}
              />
              <span className="text-sm font-semibold" style={{ color: '#F87171' }}>
                Data Operations @ Tesla · Feb 2025 – Present
              </span>
            </div>

            {/* Name */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 animate-fade-in-up animation-delay-200 leading-tight"
              style={{
                background: 'linear-gradient(135deg, #fff 30%, #A78BFA 70%, #6366F1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Kevin Truong
            </h1>

            {/* Role */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6 animate-fade-in-up animation-delay-300">
              {['Full Stack Developer', 'AI Engineer', 'React · Next.js · TypeScript'].map((tag, i) => (
                <span
                  key={i}
                  className="text-sm font-medium px-3 py-1 rounded-full"
                  style={{
                    background: 'rgba(99,102,241,0.12)',
                    border: '1px solid rgba(99,102,241,0.25)',
                    color: '#A78BFA',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bio */}
            <p
              className="text-lg mb-8 animate-fade-in-up animation-delay-400 leading-relaxed max-w-lg mx-auto md:mx-0"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              Software Engineer building AI-powered applications and data pipelines.
              Currently driving data quality for Tesla's AI initiatives while crafting
              full-stack solutions with React, Next.js, and modern cloud technologies.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-up animation-delay-500">
              <a
                href="#Portfolio"
                className="btn-primary"
                style={{
                  background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                  color: 'white',
                  fontWeight: 600,
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 20px rgba(99,102,241,0.4)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(99,102,241,0.6)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(99,102,241,0.4)'; }}
              >
                View Projects
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#About"
                style={{
                  background: 'transparent',
                  color: '#A78BFA',
                  fontWeight: 600,
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  border: '1px solid rgba(99,102,241,0.4)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.1)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.transform = ''; }}
              >
                About Me
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 justify-center md:justify-start animate-fade-in-up animation-delay-600">
              {[
                { label: 'Projects Built', value: '6+' },
                { label: 'Hours of Data', value: '800+' },
                { label: 'Quality Score', value: '95%' },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div
                    className="text-2xl font-extrabold"
                    style={{
                      background: 'linear-gradient(135deg, #6366F1, #A78BFA)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile image */}
          <div className="md:w-1/2 flex justify-center animate-fade-in-up animation-delay-300">
            <div className="relative">
              {/* Spinning ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: -6,
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #6366F1, #8B5CF6, #E82127, #6366F1)',
                  animation: 'spin 6s linear infinite',
                  zIndex: 0,
                }}
              />
              {/* White gap ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: -2,
                  borderRadius: '50%',
                  background: isDark ? '#0A0A0F' : '#1e1b4b',
                  zIndex: 1,
                }}
              />
              {/* Image */}
              <div
                className="relative z-10"
                style={{
                  width: 256,
                  height: 256,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 0 40px rgba(99,102,241,0.3)',
                }}
              >
                <img
                  src={require("../assets/profilepicture.jpeg")}
                  alt="Kevin Truong"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Floating badge - Tesla */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 12,
                  right: -20,
                  zIndex: 20,
                  background: 'rgba(17,24,39,0.9)',
                  border: '1px solid rgba(232,33,39,0.4)',
                  borderRadius: 12,
                  padding: '8px 12px',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                  animation: 'float 4s ease-in-out infinite 1s',
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>⚡</span>
                <div>
                  <div style={{ color: '#F87171', fontSize: 11, fontWeight: 700 }}>Tesla</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 10 }}>2025 – Present</div>
                </div>
              </div>

              {/* Floating badge - React */}
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  left: -24,
                  zIndex: 20,
                  background: 'rgba(17,24,39,0.9)',
                  border: '1px solid rgba(99,102,241,0.4)',
                  borderRadius: 12,
                  padding: '8px 12px',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                  animation: 'float 5s ease-in-out infinite',
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>⚛️</span>
                <div>
                  <div style={{ color: '#A78BFA', fontSize: 11, fontWeight: 700 }}>React Dev</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 10 }}>Full Stack</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{ animation: 'float 2s ease-in-out infinite' }}
        >
          <div
            style={{
              width: 24,
              height: 40,
              border: '2px solid rgba(99,102,241,0.4)',
              borderRadius: 12,
              display: 'flex',
              justifyContent: 'center',
              paddingTop: 8,
            }}
          >
            <div
              style={{
                width: 4,
                height: 8,
                background: '#6366F1',
                borderRadius: 2,
                animation: 'fadeInUp 1.5s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
