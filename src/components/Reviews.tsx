import React, { useState, useEffect } from 'react';

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Michelle",
      content:
        "We've been with Lambert Brothers for many years, and what's kept us there is the personal service. They don't just renew policies and move on - they actually review our cover and explain what's changing and why. It's reassuring to deal with people who genuinely care.",
    },
    {
      name: "Geoff",
      content:
        "Lambert Brothers understand our business and provide clear, practical advice with fast, professional support when it matters most.",
    },
    {
      name: "Leanne",
      content:
        "Choosing medical aid felt overwhelming, but Lambert Brothers made it much easier. They explained the options in plain language and helped us choose cover that actually suits our family. The gap cover recommendation was spot on too.",
    },
    {
      name: "Sibusiso",
      content:
        "You don't really appreciate a good broker until you have to claim. Lambert Brothers guided us through the process and stayed involved from start to finish. Having someone knowledgeable and calm on your side makes all the difference.",
    },
    {
      name: "Lerato",
      content:
        "What I value most about Lambert Brothers is their honesty. They're not trying to sell you things you don't need - they focus on what makes sense. That level of integrity is why we trust them with our business insurance.",
    },
    {
      name: "Gavin",
      content:
        "Lambert Brothers handle both my personal insurance and my business cover, which simplifies everything. They understand the bigger picture and adjust things as circumstances change. It feels more like a relationship than a transaction.",
    },
  ];

  const totalSlides = reviews.length;

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === totalSlides - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          style={{ color: '#2e2d78' }}
        >
          What Our Client's Say
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
              {reviews.map((review, idx) => (
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
                      <p className="text-gray-600 text-sm leading-relaxed">
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
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex
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
                    <p className="text-gray-600 text-sm leading-relaxed">
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
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-[#2e2d78]' : 'bg-gray-300'
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