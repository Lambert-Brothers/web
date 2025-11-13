/* OurServices.tsx */
import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

// Assets
import domesticImg from '../assets/domestic.webp';
import commercialImg from '../assets/commercial.webp';
import specialistImg from '../assets/specialist.webp';
import personalNewImg from '../assets/personal.webp';

import domesticModalImg from '../assets/personal-modal.webp';
import commercialModalImg from '../assets/commercial-modal.webp';
import specialistModalImg from '../assets/specialist-modal.webp';
import personalNewModalImg from '../assets/domestic-modal.webp';

// Service Data
const services = [
  {
    id: 'domestic',
    title: 'DOMESTIC',
    modalTitle: 'DOMESTIC INSURANCE',
    img: domesticImg,
    modalImg: domesticModalImg,
    description1:
      "Your world deserves the right protection - whether it's the home you've built, the car you drive, or the things that make life special. At Lambert Brothers, we take a hands-on approach to helping you choose cover that fits your lifestyle, giving you peace of mind when it matters most.",
    description2:
      "With access to leading insurers and decades of expertise, we'll guide you through the options and tailor a solution that protects what matters most to you and your family.",
  },
  {
    id: 'commercial',
    title: 'COMMERCIAL',
    modalTitle: 'COMMERCIAL INSURANCE',
    img: commercialImg,
    modalImg: commercialModalImg,
    description1:
      "Your business is your legacy, and protecting it requires more than just coverage — it demands strategic foresight. At Lambert Brothers, we partner with you to understand your operations, risks, and goals, crafting robust commercial insurance solutions that safeguard your assets, employees, and future growth.",
    description2:
      "From liability and property protection to specialised industry coverage, our access to top-tier insurers and decades of expertise ensure your business is resilient, compliant, and ready for whatever comes next.",
  },
  {
    id: 'specialist',
    title: 'SPECIALIST',
    modalTitle: 'SPECIALIST INSURANCE',
    img: specialistImg,
    modalImg: specialistModalImg,
    description1:
      "For unique risks that demand tailored solutions — from agriculture and commercial transporters to special events and hospitality — we deliver specialist short-term insurance that goes beyond standard policies.",
    description2:
      "With deep industry knowledge and partnerships with niche insurers, we protect high-value assets, seasonal operations, and complex exposures with precision and confidence.",
  },
  {
    id: 'personal',
    title: 'PERSONAL',
    modalTitle: 'PERSONAL INSURANCE',
    img: personalNewImg,
    modalImg: personalNewModalImg,
    description1:
      "Your health, life, and financial future matter. We specialise in medical aid, gap cover, life insurance, and income protection — ensuring you and your loved ones are covered when it counts.",
    description2:
      "With access to top medical schemes and life insurers, we simplify complex choices and design plans that evolve with your life stages.",
  },
];

const helvetica = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
} as const;

const OurServices: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  /* Trigger animation when 90% of section is in viewport */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
          setIsVisible(true);
        }
      },
      { threshold: 0.9 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
              className={`text-5xl md:text-6xl font-bold transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ color: '#2e2d78' }}
            >
              LET'S PROTECT
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

          {/* 4-column grid */}
          <div className="grid md:grid-cols-4 gap-8 items-start">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-24 opacity-0'
                }`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                <div className="overflow-hidden rounded-xl shadow-2xl mb-4 bg-white">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-[24rem] object-cover" // Reduced height
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
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in duration-300"
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

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {activeService.description1}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {activeService.description2}
                  </p>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OurServices;