/* OurServices.tsx */
import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

// Assets
import domesticImg from '../assets/personal.jpg';
import commercialImg from '../assets/commercial.webp';

import domesticModalImg from '../assets/personal-modal.webp';
import commercialModalImg from '../assets/commercial-modal.webp';

// Service Data
const services = [
  {
    id: 'personal',
    title: 'FOR PEOPLE',
    modalTitle: 'PERSONAL INSURANCE',
    img: domesticImg,
    modalImg: domesticModalImg,
    description:
      "Life is full of moving parts - your home, your health, your family, and everything you've worked hard to build. At Lambert Brothers, we help individuals and families protect what matters most through thoughtful, personalised insurance solutions.\n\nOur hands-on, independent approach means we take the time to understand your lifestyle and priorities before recommending cover. With access to leading insurers and medical schemes, we ensure your protection remains relevant, competitive, and tailored - so you're never left exposed when life takes an unexpected turn.\n\nWith decades of experience and a commitment to personal service, we offer peace of mind today and security for the future.",
    coverTitle: 'Personal Cover We Provide:',
    coverItems: [
      'Houseowners (Buildings) Insurance',
      'Householders (Contents) Insurance',
      'Portable Possessions / All Risks',
      'Vehicle & Motorcycle Insurance',
      'Caravans & Trailers',
      'Watercraft',
      'Solar Installations',
      'Personal Liability Cover',
      'Cybercrime Protection',
      'Medical Aid',
      'Gap Cover',
      'Life Insurance',
    ],
  },
  {
    id: 'commercial',
    title: 'FOR BUSINESS',
    modalTitle: 'COMMERCIAL INSURANCE',
    img: commercialImg,
    modalImg: commercialModalImg,
    description:
      "Running a business means facing a wide range of risks - from protecting your physical assets to guarding against liability and professional exposure. At Lambert Brothers, we work closely with businesses of all sizes to understand your unique risk landscape and design insurance solutions that give you confidence and continuity.\n\nOur hands-on, independent approach means we take time to learn about your business and its challenges before recommending tailored cover that helps protect your people, operations and reputation. With access to leading insurers and decades of expertise, we help you stay ahead of risk so you can focus on growth and success.",
    coverTitle: 'Business Cover We Provide:',
    coverItems: [
      'Commercial Property & Assets',
      'Business Interruption',
      'Public & General Liability',
      'Professional Indemnity',
      'Directors & Officers (D&O) Liability',
      'Cyber, Crime & Fraud Protection',
      "Employer's Liability & Workforce Risks",
      'Commercial Motor & Fleet',
      'Hospitality & Restaurant Insurance',
      'Agricultural Insurance',
      'Construction & Engineering',
      'Body Corporate & Sectional Title',
      'Goods in Transit & Marine',
      'Specialist & Industry-Specific Cover',
    ],
  },
];

const helvetica = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
} as const;

const OurServices: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  /* Detect mobile viewport */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  /* Trigger animation when 50% of section is in viewport (desktop only) */
  useEffect(() => {
    if (isMobile) {
      setIsVisible(true); // Always visible on mobile
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  /* Close modal on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const activeService = activeModal
    ? services.find((s) => s.id === activeModal)
    : null;

  // Split cover items into two columns
  const splitCoverItems = (items: string[]) => {
    const midpoint = Math.ceil(items.length / 2);
    return {
      left: items.slice(0, midpoint),
      right: items.slice(midpoint),
    };
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="services"
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: '#e4e8ee' }}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Headings */}
          <div className="text-center mb-12">
            <h1
              className={`text-5xl md:text-6xl font-bold ${isMobile
                  ? ''
                  : `transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`
                }`}
              style={{ color: '#2e2d78' }}
            >
              LET'S PROTECT
            </h1>
            <p
              className={`text-2xl md:text-3xl font-medium mt-2 ${isMobile
                  ? ''
                  : `transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`
                }`}
              style={{ color: '#2e2d78' }}
            >
              WHAT MATTERS MOST
            </p>
          </div>

          {/* 2-column grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`max-w-2xl mx-auto text-center ${isMobile
                    ? ''
                    : `transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`
                  }`}
                style={isMobile ? {} : { transitionDelay: `${300 + index * 200}ms` }}
              >
                <div className="overflow-hidden rounded-xl shadow-2xl mb-6 bg-white">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-[28rem] object-cover"
                  />
                </div>

                <button
                  onClick={() => setActiveModal(service.id)}
                  className="inline-block bg-[#2e2d78] text-white text-xl font-bold px-12 py-4 rounded-full border border-[#2e2d78] 
                           hover:bg-white hover:text-[#2e2d78] hover:shadow-lg 
                           transition-all duration-300 ease-in-out"
                  style={helvetica}
                >
                  {service.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
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
                {activeService.modalTitle}
              </h2>

              {/* Top section: Description and Image */}
              <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
                <div>
                  {activeService.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={activeService.modalImg}
                    alt={activeService.modalTitle}
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Bottom section: Cover heading and bullet points */}
              <div className="mt-8">
                <h3
                  className="text-2xl font-bold mb-6 text-center"
                  style={{ color: '#2e2d78' }}
                >
                  {activeService.coverTitle}
                </h3>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                  {(() => {
                    const { left, right } = splitCoverItems(activeService.coverItems);
                    return (
                      <>
                        <div className="space-y-2">
                          {left.map((item, idx) => (
                            <div key={idx} className="flex items-start">
                              <span className="text-[#2e2d78] mr-2 flex-shrink-0">•</span>
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-2">
                          {right.map((item, idx) => (
                            <div key={idx} className="flex items-start">
                              <span className="text-[#2e2d78] mr-2 flex-shrink-0">•</span>
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    );
                  })()}
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