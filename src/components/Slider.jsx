import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Michael T.",
    quote:
      "When I inherited property, Sam made the process seamless. He simplified the step-up in basis and actually made the experience enjoyable.",
  },
  {
    id: 2,
    name: "Michelle B.",
    quote:
      "Sam consistently delivers thorough, unbiased appraisals. His integrity sets him apart.",
  },
  {
    id: 3,
    name: "Chris P.",
    quote:
      "I completed a 1031 exchange with Sam, his expertise made the process smooth and stress-free. His knowledge was invaluable in maximizing my investment.",
  },
  {
    id: 4,
    name: "Tony R.",
    quote:
      "I highly recommend Sam for multi-family home appraisals. His thorough and reliable valuations have become essential in helping my investment decisions. Professional, transparent, and timely - I can't recommend him enough!",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-gray-100 py-12 px-4 flex flex-col items-center">
      <div className="max-w-2xl text-center relative ">
        {/* Slider Content */}
        <div>
          <p className="text-gray-600 text-lg sm:text-base mb-4">
            {testimonials[currentIndex].name}
          </p>
          <hr className="w-14 m-auto mt-6 border-gray-500" />
          <p className="text-xs sm:text-lg tracking-wider leading-9 font-bold text-gray-800 mb-6">
            &quot;{testimonials[currentIndex].quote}&quot;
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-6">
          <button
            className="p-2 hover:bg-gray-400 rounded-full sm:rounded-none transition duration-300"
            onClick={prevSlide}
          >
            ❮
          </button>
          <button
            className="p-2 hover:bg-gray-400 rounded-full sm:rounded-none transition duration-300"
            onClick={nextSlide}
          >
            ❯
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center mt-4">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
