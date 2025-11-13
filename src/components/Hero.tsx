import React, { useState, useEffect, useRef } from 'react';
import heroImage from '../assets/her.webp';
import logoImage from '../assets/JPEG_LB_Logo-removebg-preview.webp';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);   // for text/logo
  const [bgVisible, setBgVisible] = useState(false);   // for background
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBgVisible(true);     // start background fade
          setIsVisible(true);     // start text/logo fade
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* ---------- GLOBAL Helvetica ---------- */
  const helvetica = {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 5% 80px',
        minHeight: '100vh',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',

        /* ---- Background fade-in ---- */
        opacity: bgVisible ? 1 : 0,
        transition: 'opacity 1.2s ease-out',
        filter: bgVisible ? 'blur(0)' : 'blur(8px)',
      }}
    >
      {/* Dark-to-light overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1))',
          zIndex: 1,
        }}
      />

      {/* ---------- LOGO ---------- */}
      <div
        style={{
          position: 'absolute',
          top: '-30px',
          left: '10%',
          zIndex: 3,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'all 0.7s ease 0.1s',
        }}
      >
        <img
          src={logoImage}
          alt="Lambert Brothers Logo"
          style={{ height: '400px', width: 'auto' }}
        />
      </div>

      {/* ---------- MAIN CONTENT ---------- */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '600px',
          marginLeft: '5%',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease 0.3s',
          ...helvetica,
        }}
      >
        {/* ---- Heading with exact colour split ---- */}
        <h1
          style={{
            fontSize: '3.8rem',
            fontWeight: 'bold',
            lineHeight: '1.1',
            margin: '0 0 1rem 0',
            textAlign: 'left',
          }}
        >
          <span style={{ color: '#2e2d78' }}>Smart </span>
          <span style={{ color: '#fff' }}>Cover.</span>{' '}
          <span style={{ color: '#2e2d78' }}>Personal </span>
          <span style={{ color: '#fff' }}>Service.</span>{' '}
          <span style={{ color: '#2e2d78' }}>Trusted </span>
          <span style={{ color: '#fff' }}>Advice.</span>
        </h1>

        {/* ---- Sub-heading ---- */}
        <p
          style={{
            fontSize: '1.25rem',
            lineHeight: '1.6',
            margin: '1.5rem 0 2.5rem',
            color: '#e0e0e0',
            textAlign: 'left',
          }}
        >
          Lambert Brothers - trusted since 1997. Independent advice in healthcare, life, and short-term insurance.
        </p>

        {/* ---- CTA Button ---- */}
        <a
          href="#contact"
          style={{
            display: 'inline-block',
            backgroundColor: '#2e2d78',
            color: '#fff',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            padding: '14px 36px',
            border: '1px solid #2e2d78',
            borderRadius: '50px',
            textDecoration: 'none',
            transition: 'all 0.3s ease-in-out',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            ...helvetica,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#fff';
            e.currentTarget.style.color = '#2e2d78';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#2e2d78';
            e.currentTarget.style.color = '#fff';
          }}
        >
          GET A QUOTE
        </a>
      </div>
    </section>
  );
};

export default Hero;