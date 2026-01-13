import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, Linkedin, Facebook } from 'lucide-react';
import officeimg from '../assets/offices.webp';        // keep if still used elsewhere
import footerImg1 from '../assets/Footer.jpeg';
import footerImg2 from '../assets/Footer2.jpeg';

const GetInTouch: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.7,
        rootMargin: '0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Helper function to apply animations only on desktop
  const getAnimationClass = (animationClass: string) => {
    if (isMobile) return 'opacity-100'; // Always visible on mobile
    return isVisible ? 'opacity-100' : 'opacity-0';
  };

  return (
    <section ref={sectionRef} id="contact" className="bg-[#e4e8ee]">
      {/* Two 50/50 Images Banner - 450px height on desktop, 250px on mobile */}
      <div className="relative w-full h-[250px] lg:h-[450px] flex">
        <img
          src={footerImg1}
          alt="Lambert Brothers"
          className="w-1/2 h-full object-cover"
        />
        <img
          src={footerImg2}
          alt="Lambert Brothers"
          className="w-1/2 h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left: Heading */}
          <div
            className={`transition-all duration-1000 ${isMobile
                ? 'opacity-100'
                : isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-12 opacity-0'
              }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight" style={{ color: '#2e2d78' }}>
              LET'S CONNECT
            </h2>
          </div>

          {/* Middle: Address Card */}
          <div
            className={`transition-all duration-1000 delay-200 ${isMobile
                ? 'opacity-100'
                : isVisible
                  ? 'scale-100 opacity-100'
                  : 'scale-95 opacity-0'
              }`}
          >
            <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-[#2e2d78] max-w-xs mx-auto">
              <p className="text-sm text-gray-700 leading-relaxed">
                Suite 6 Sunbury Park<br />
                1 Sunbury Crescent<br />
                Douglas Saunders Drive<br />
                La Lucia, 4051<br />
                <br />
                Company Reg. CC1999/063647/23<br />
                Authorised Financial Services<br />
                Provider (FSP License No. 9616)
              </p>
            </div>
          </div>

          {/* Right: Contact Details */}
          <div
            className={`space-y-5 transition-all duration-1000 delay-400 ${isMobile
                ? 'opacity-100'
                : isVisible
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-12 opacity-0'
              }`}
          >
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-3" style={{ color: '#2e2d78' }} />
              <a href="tel:+27315665511" className="text-lg font-medium hover:underline" style={{ color: '#2e2d78' }}>
                +27 031 566 5511
              </a>
            </div>

            <div className="space-y-1">
              {[
                'david@lambertbrothers.co.za',
                'iain@lambertbrothers.co.za',
                'peter@lambertbrothers.co.za',
                'garth@lambertbrothers.co.za',
                'alan.barter@outlook.com',
                'sharon@lambertbrothers.co.za',
                'kirsten@lambertbrothers.co.za',
              ].map((email) => (
                <div key={email} className="flex items-center">
                  <Mail className="w-4 h-4 mr-3" style={{ color: '#2e2d78' }} />
                  <a href={`mailto:${email}`} className="text-sm hover:underline" style={{ color: '#2e2d78' }}>
                    {email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Left: Social Icons - absolute on desktop, relative on mobile */}
        <div
          className={`lg:absolute bottom-8 left-8 flex space-x-4 mt-8 lg:mt-0 justify-center lg:justify-start transition-all duration-1000 delay-600 ${isMobile
              ? 'opacity-100'
              : isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
        >
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform" title='Open Facebook'>
            <Facebook className="w-5 h-5" style={{ color: '#2e2d78' }} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform" title='Open LinkedIn'>
            <Linkedin className="w-5 h-5" style={{ color: '#2e2d78' }} />
          </a>
          <a href="https://www.google.com/maps/search/?api=1&query=Lambert+Brothers+CC%2C+Suite+6%2C+1+Sunbury+Park%2C+Douglas+Saunders+drive%2C+La+Lucia%2C+4051" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform" title='Open Google Maps'>
            <svg className="w-5 h-5" style={{ color: '#2e2d78' }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;