"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';


// Sample course data - replace with your actual data
const courses = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn modern web development with the latest technologies",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
    duration: "8 Weeks",
    level: "Beginner"
  },
  {
    id: 2,
    title: "Data Science",
    description: "Master data analysis and machine learning",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
    duration: "12 Weeks",
    level: "Intermediate"
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3",
    duration: "10 Weeks",
    level: "Intermediate"
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Learn to design beautiful user interfaces",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3",
    duration: "6 Weeks",
    level: "Beginner"
  }
];

const CourcesCarosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === courses.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? courses.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16">
      <div className="container mx-auto lg:px-12">
        <div className="group relative inline-block">
          <div className="flex items-center gap-6 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              Our Courses
            </h2>
            <span className="opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-in-out text-blue-600 hover:text-blue-800 cursor-pointer whitespace-nowrap">
              Explore All
            </span>
            <div className="flex space-x-2">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="w-full flex-shrink-0 px-4"
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                  <div className="relative h-64">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                      <p className="text-gray-200 mb-3">{course.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-300">
                        <span>{course.duration}</span>
                        <span>•</span>
                        <span>{course.level}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                      Explore Course
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourcesCarosel;