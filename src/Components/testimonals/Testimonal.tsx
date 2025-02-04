import React from "react";
import "./testimonal.scss";
interface Testimonial {
  text: string;
  author: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}
export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  testimonials,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="carousel-container">
      <div className="testimonial">
        <p className="testimonial-text">
          &#x201F; {testimonials[currentIndex].text} &#x201C;
        </p>
        <p className="testimonial-author">
          {testimonials[currentIndex].author}
        </p>
        <button className="carousel-button" onClick={handleNext}>
          &larr;
        </button>
        <button className="carousel-button" onClick={handlePrev}>
          &#8594;
        </button>
      </div>
    </div>
  );
};
