/* OurServices.tsx */
import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

// ──────────────────────── Import assets ────────────────────────
import personalImg from '../assets/personal.jpg';
import commercialImg from '../assets/commercial.jpg';
import personalModalImg from '../assets/personal-modal.jpg';
import commercialModalImg from '../assets/commercial-modal.jpg';

// Helvetica-like system font stack
const helvetica = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
} as const;

const OurServices: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPersonalModal, setShowPersonalModal] = useState(false);
  const [showCommercialModal, setShowCommercialModal] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  /* ───── Scroll-into-view trigger ───── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ───── Close modal on Escape ───── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowPersonalModal(false);
        setShowCommercialModal(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const closeModal = () => {
    setShowPersonalModal(false);
    setShowCommercialModal(false);
  };

  /* ───── Updated button style: wider + larger text + closer to image ───── */
  const buttonBaseStyle = {
    display: 'inline-block' as const,
    backgroundColor: '#2e2d78',
    color: '#fff',
    fontSize: '1.3rem', // Increased from 1.1rem
    fontWeight: 'bold' as const,
    padding: '16px 48px', // Wider: 14px → 16px, 36px → 48px
    border: '1px solid #2e2d78',
    borderRadius: '50px',
    textDecoration: 'none' as const,
    transition: 'all 0.3s ease-in-out',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    ...helvetica,
  };

  return (
    <>
      {/* ──────────────────────── MAIN SECTION ──────────────────────── */}
      <section
        ref={sectionRef}
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: '#e4e8ee' }}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Headings */}
          <div className="text-center mb-12">
            <h1
              className={`text-5xl md:text-6xl font-bold transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ color: '#2e2d78' }}
            >
              LET’S PROTECT
            </h1>
            <p
              className={`text-2xl md:text-3xl font-medium mt-2 transition-all duration-1000 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ color: '#2e2d78' }}
            >
              WHAT MATTERS MOST
            </p>
          </div>

          {/* ───── Image + CTA Grid ───── */}
          <div className="grid md:grid-cols-2 items-start">
            {/* ─── PERSONAL ─── */}
            <div
              className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-24 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="overflow-hidden rounded-xl shadow-2xl mb-4 bg-white">
                {/* Reduced border-radius: rounded-3xl → rounded-xl */}
                <img
                  src={personalImg}
                  alt="Personal Insurance"
                  className="w-full h-[36rem] object-cover"
                  // Increased height: 32rem → 36rem (width unchanged)
                />
              </div>

              <a
                href="#personal"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPersonalModal(true);
                }}
                style={{
                  ...buttonBaseStyle,
                  padding: '16px 64px',
                  fontSize: '1.4rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.style.color = '#2e2d78';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#2e2d78';
                  e.currentTarget.style.color = '#fff';
                }}
                className="hover:shadow-lg"
              >
                PERSONAL
              </a>
            </div>

            {/* ─── COMMERCIAL ─── */}
            <div
              className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-24 opacity-0'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="overflow-hidden rounded-xl shadow-2xl mb-4 bg-white">
                <img
                  src={commercialImg}
                  alt="Commercial Insurance"
                  className="w-full h-[36rem] object-cover"
                />
              </div>

              <a
                href="#commercial"
                onClick={(e) => {
                  e.preventDefault();
                  setShowCommercialModal(true);
                }}
                style={{
                  ...buttonBaseStyle,
                  padding: '16px 64px',
                  fontSize: '1.4rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.style.color = '#2e2d78';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#2e2d78';
                  e.currentTarget.style.color = '#fff';
                }}
                className="hover:shadow-lg"
              >
                COMMERCIAL
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────── PERSONAL MODAL ──────────────────────── */}
      {showPersonalModal && personalModalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <div className="p-8 md:p-12">
              <h2
                className="text-4xl font-bold mb-8 text-center"
                style={{ color: '#2e2d78' }}
              >
                PERSONAL INSURANCE
              </h2>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Your world deserves the right protection - whether it’s the
                    home you’ve built, the car you drive, or the things that make
                    life special. At Lambert Brothers, we take a hands-on approach
                    to helping you choose cover that fits your lifestyle, giving
                    you peace of mind when it matters most.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    With access to leading insurers and decades of expertise,
                    we’ll guide you through the options and tailor a solution that
                    protects what matters most to you and your family.
                  </p>
                </div>

                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={personalModalImg}
                    alt="Personal Insurance Protection"
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ──────────────────────── COMMERCIAL MODAL ──────────────────────── */}
      {showCommercialModal && commercialModalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <div className="p-8 md:p-12">
              <h2
                className="text-4xl font-bold mb-8 text-center"
                style={{ color: '#2e2d78' }}
              >
                COMMERCIAL INSURANCE
              </h2>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Your business is your legacy, and protecting it requires more
                    than just coverage — it demands strategic foresight. At Lambert
                    Brothers, we partner with you to understand your operations,
                    risks, and goals, crafting robust commercial insurance
                    solutions that safeguard your assets, employees, and future
                    growth.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    From liability and property protection to specialised industry
                    coverage, our access to top-tier insurers and decades of
                    expertise ensure your business is resilient, compliant, and
                    ready for whatever comes next.
                  </p>
                </div>

                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={commercialModalImg}
                    alt="Commercial Insurance Protection"
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OurServices;