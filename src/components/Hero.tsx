import React, { useState, useEffect, useRef } from 'react';
import heroImage from '../assets/hero.jpg';
import logoImage from '../assets/Lambert Brothers.svg';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [bgVisible, setBgVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBgVisible(true);
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  const logoSize = isMobile ? '75px' : isTablet ? '110px' : '140px';
  const logoTop = isMobile ? '15px' : isTablet ? '10px' : '20px';

  const h1Size = isMobile ? '1.9rem' : isTablet ? '2.8rem' : '3.4rem';
  const lineHeight = isMobile ? '1.1' : '1.15';

  const helvetica = { fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' };

  const logoTransform = isVisible ? 'translateY(0)' : 'translateY(-40px)';

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: isMobile ? '0px 5% 60px' : '140px 8% 80px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        opacity: bgVisible ? 1 : 0,
        transition: 'opacity 1.2s ease-out',
      }}
    >
      {/* Dark overlay + bottom fade-out */}


      {/* Bottom fade to transparent (blends into next section) */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '150px',
          background: 'linear-gradient(to bottom, transparent, #e4e8ee)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Logo */}
      <img
        src={logoImage}
        alt="Lambert Brothers Logo"
        style={{
          position: 'absolute',
          top: logoTop,
          left: isMobile ? '50%' : '5%',
          transform: isMobile
            ? `translateX(-50%) ${logoTransform}`
            : logoTransform,
          height: logoSize,
          width: 'auto',
          zIndex: 3,
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.9s ease-out',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: isMobile ? '95%' : '700px',
          margin: isMobile ? '0 auto' : '0',
          marginTop: isMobile ? '0px' : '50px',
          textAlign: isMobile ? 'center' : 'left',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 1s ease 0.3s',
          ...helvetica,
        }}
      >
        <h1
          style={{
            fontSize: h1Size,
            fontWeight: 'bold',
            lineHeight,
            margin: '0 0 1.5rem',
            color: '#fff',
          }}
        >
          <span style={{ color: '#2e2d78' }}>Smart </span>
          <span>Cover.</span>
          <br />
          <span style={{ color: '#2e2d78' }}>Personal </span>
          <span>Service.</span>
          <br />
          <span style={{ color: '#2e2d78' }}>Trusted </span>
          <span>Advice.</span>
        </h1>

        <p
          style={{
            fontSize: isMobile ? '0.95rem' : '1.1rem',
            lineHeight: '1.6',
            margin: '0 0 2.5rem',
            color: '#2e2d78',
            maxWidth: '550px',
          }}
        >
          Lambert Brothers - trusted since 1997. Independent advice in healthcare, life, and short-term insurance.
        </p>

        <a
          href="#contact"
          style={{
            display: 'inline-block',
            backgroundColor: '#2e2d78',
            color: '#fff',
            fontSize: isMobile ? '0.95rem' : '1.05rem',
            fontWeight: 'bold',
            padding: isMobile ? '11px 30px' : '13px 38px',
            borderRadius: '50px',
            textDecoration: 'none',
            border: '2px solid #2e2d78',
            transition: 'all 0.3s ease',
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