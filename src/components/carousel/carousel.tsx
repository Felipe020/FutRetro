"use client";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import React from "react";
import { useMediaQuery } from "react-responsive";

interface CarouselProps {
  children: React.ReactNode;
}

export default function Carousel({ children }: CarouselProps) {
  const isMoreLargeScreen = useMediaQuery({ minWidth: 1440 });
  const isLargeScreen = useMediaQuery({ minWidth: 1021 });
  const isMediumScreen = useMediaQuery({ maxWidth: 1020 });
  const isSmallScreen = useMediaQuery({ maxWidth: 690 });

  const maxSlidesToShow = isSmallScreen
  ? 1
  : isMediumScreen
  ? 2
  : isMoreLargeScreen
  ? 4 
  : isLargeScreen
  ? 3
  : 0;

  const totalSlides = React.Children.count(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const indexMax = Math.ceil(totalSlides / maxSlidesToShow) - 1;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? indexMax : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= indexMax ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / maxSlidesToShow)}%)`,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / maxSlidesToShow}%` }}
          >
            {child}
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        <ArrowLeft className="text-[#911F27]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        <ArrowRight className="text-[#911F27]" />
      </button>
    </div>
  );
}
