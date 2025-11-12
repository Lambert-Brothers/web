import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Elvira Montanez",
      content:
        "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      rating: 5,
    },
    {
      name: "Casper Berkley",
      content:
        "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      rating: 5,
    },
    {
      name: "Daniel Gallego",
      content:
        "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      content:
        "Lambert Brothers provided exceptional service when I needed home insurance. Their attention to detail and personalized approach made all the difference.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      content:
        "Professional, reliable, and trustworthy. They helped me find the perfect coverage for my business at a competitive rate.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      content:
        "As a first-time insurance buyer, they made the process simple and stress-free. Their expertise and patience helped me understand exactly what I needed.",
      rating: 5,
    },
  ];

  const totalSlides = reviews.length;

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center space-x-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
      ))}
    </div>
  );

  // Duplicate reviews for infinite loop
  const displayReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          style={{ color: '#2e2d78' }}
        >
          Feedback from our clients
        </h2>

        {/* ====================== DESKTOP: 3 Cards ====================== */}
        <div className="hidden lg:block">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
            >
              {displayReviews.map((review, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0"
                  style={{
                    width: '33.333%',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                  }}
                >
                  <div
                    className="p-8 rounded-2xl h-full min-h-72 flex flex-col justify-between"
                    style={{
                      border: '1px solid #2e2d78',
                      backgroundColor: 'white',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <div>
                      <StarRating rating={review.rating} />
                      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                        {review.content}
                      </p>
                    </div>
                    <p
                      className="mt-6 font-semibold"
                      style={{ color: '#2e2d78' }}
                    >
                      {review.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Skinny Nav Bars */}
          <div className="flex justify-center mt-8 space-x-3">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex % totalSlides
                    ? 'bg-[#2e2d78] w-12'
                    : 'bg-gray-300 w-8'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ====================== MOBILE: 1 Card + Dots ====================== */}
        <div className="lg:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div
                    className="p-6 rounded-2xl"
                    style={{
                      border: '1px solid #2e2d78',
                      backgroundColor: 'white',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <StarRating rating={review.rating} />
                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                      {review.content}
                    </p>
                    <p
                      className="mt-6 font-semibold"
                      style={{ color: '#2e2d78' }}
                    >
                      {review.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex % totalSlides ? 'bg-[#2e2d78]' : 'bg-gray-300'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;