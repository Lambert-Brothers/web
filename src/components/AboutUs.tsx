import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import familyImage from '../assets/family.webp'; // Ensure this path is correct

const AboutUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Helvetica font style
  const helvetica = {
    fontFamily: 'Helvetica, Arial, sans-serif',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: '#e4e8ee' }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image with fade-in from left */}
          <div
            className="relative overflow-hidden rounded-lg shadow-lg"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
              transition: 'opacity 1s ease-out, transform 1s ease-out',
            }}
          >
            <img
              src={familyImage}
              alt="Lambert Brothers Team"
              className="w-full h-auto object-cover"
              style={{ display: 'block' }}
            />
          </div>

          {/* Right: Text Content */}
          <div
            className="bg-white p-8 md:p-12 rounded-lg shadow-md"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s',
            }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-3"
              style={{ color: '#2e2d78', ...helvetica }}
            >
              WHO WE ARE
            </h2>
            <h3
              className="text-xl md:text-2xl font-bold mb-6"
              style={{ color: '#2e2d78', ...helvetica }}
            >
              MORE THAN JUST A BROKERAGE
            </h3>

            <div
              className="space-y-4 text-base md:text-lg leading-relaxed"
              style={{ color: '#545454', ...helvetica }}
            >
              <p>
                At Lambert Brothers, who we are has always mattered as much as what we do. Since 1997, we’ve helped individuals and businesses make confident, informed financial decisions. As a licensed Financial Services Provider, we specialise in Healthcare, Employee Benefits, Life Insurance and Short-Term Insurance, offering solutions tailored to each client’s needs.
              </p>
              <p>
                Our hands-on approach sets us apart. We take the time to understand every client - whether a growing business or a private individual - and provide advice that’s practical, independent, and always in their best interests.
              </p>
              <p>
                By partnering with respected insurers and medical schemes, we offer unbiased guidance and ensure that cover remains both relevant and competitive.
              </p>
              <p>
                Built on a foundation of personal service and integrity, we’ve spent more than two decades earning trust through action and building lasting relationships through genuine care.
              </p>
              <p style={{ ...helvetica }}>
                <span style={{ fontWeight: 'normal' }}>Lambert Brothers </span>
                <span style={{ fontWeight: 600 }}>- trusted advice, personal service, lasting partnerships.</span>
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-8">
            <a
              href="#contact"
              className="mt-8 inline-block text-center"
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
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.color = '#2e2d78';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2e2d78';
                e.currentTarget.style.color = '#fff';
              }}
            >
              LET'S TALK ABOUT YOUR COVER
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;