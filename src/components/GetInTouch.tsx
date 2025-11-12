import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, Linkedin, Facebook } from 'lucide-react';
import officeimg from '../assets/offices.jpg';

const GetInTouch: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

useEffect(() => {
  let timeoutId: NodeJS.Timeout | null = null;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio === 1) {
        timeoutId = setTimeout(() => {
          setIsVisible(true);
        }, 100);
      }
    },
    {
      threshold: 1.0,
      rootMargin: '0px',
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => {
    observer.disconnect();
    if (timeoutId) clearTimeout(timeoutId);
  };
}, []);

  return (
    <section ref={sectionRef} id="contact" className="bg-[#e4e8ee]">
      {/* Image Banner - 450px height */}
      <div className="relative w-full h-[450px] overflow-hidden">
        <img
          src={officeimg}
          alt="Lambert Brothers Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Below - Balanced Width */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left: Heading */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
          >
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ color: '#2e2d78' }}
            >
              LET'S CONNECT
            </h2>
          </div>

          {/* Middle: Address Card */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
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
            className={`space-y-5 transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
          >
            {/* Phone */}
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-3" style={{ color: '#2e2d78' }} />
              <a
                href="tel:+27315665511"
                className="text-lg font-medium hover:underline"
                style={{ color: '#2e2d78' }}
              >
                +27 (0)31 566 5511
              </a>
            </div>

            {/* Emails */}
            <div className="space-y-1">
              {[
                'david@lambertbrothers.co.za',
                'iain@lambertbrothers.co.za',
                'peter@lambertbrothers.co.za',
                'garth@lambertbrothers.co.za',
                'sharon@lambertbrothers.co.za',
                'kirsten@lambertbrothers.co.za',
              ].map((email) => (
                <div key={email} className="flex items-center">
                  <Mail className="w-4 h-4 mr-3" style={{ color: '#2e2d78' }} />
                  <a
                    href={`mailto:${email}`}
                    className="text-sm hover:underline"
                    style={{ color: '#2e2d78' }}
                  >
                    {email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Left: Social Icons */}
        <div
          className={`absolute bottom-8 left-8 flex space-x-4 transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
          >
            <Facebook className="w-5 h-5" style={{ color: '#2e2d78' }} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
          >
            <Linkedin className="w-5 h-5" style={{ color: '#2e2d78' }} />
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Suite+6+Sunbury+Park%2C+1+Sunbury+Crescent%2C+Douglas+Saunders+Drive%2C+La+Lucia%2C+4051"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
          >
            <svg className="w-5 h-5" style={{ color: '#2e2d78' }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;