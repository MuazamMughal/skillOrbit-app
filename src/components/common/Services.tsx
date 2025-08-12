"use client";

import React, { useEffect, useRef, useState } from 'react';
import { FaLaptopCode, FaMobileAlt, FaChartLine, FaServer, FaPalette, FaRocket } from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode className="w-8 h-8 text-blue-600" />,
    title: 'Web Development',
    description: 'Custom, responsive websites built with modern technologies for optimal performance and user experience.',
    color: 'from-blue-100 to-blue-50',
    border: 'border-blue-200'
  },
  {
    icon: <FaMobileAlt className="w-8 h-8 text-purple-600" />,
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications that deliver seamless experiences across all devices.',
    color: 'from-purple-100 to-purple-50',
    border: 'border-purple-200'
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-green-600" />,
    title: 'Digital Marketing',
    description: 'Data-driven strategies to grow your online presence and reach your target audience effectively.',
    color: 'from-green-100 to-green-50',
    border: 'border-green-200'
  },
  {
    icon: <FaServer className="w-8 h-8 text-orange-600" />,
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure tailored to your business needs.',
    color: 'from-orange-100 to-orange-50',
    border: 'border-orange-200'
  },
  {
    icon: <FaPalette className="w-8 h-8 text-pink-600" />,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive interfaces that enhance user engagement and satisfaction.',
    color: 'from-pink-100 to-pink-50',
    border: 'border-pink-200'
  },
  {
    icon: <FaRocket className="w-8 h-8 text-indigo-600" />,
    title: 'Startup Solutions',
    description: 'End-to-end technology solutions to help startups launch and scale efficiently.',
    color: 'from-indigo-100 to-indigo-50',
    border: 'border-indigo-200'
  }
];

const useIntersectionObserver = (ref: React.RefObject<HTMLElement>, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};

const ServiceCard = ({ service, index, isVisible }: { service: any, index: number, isVisible: boolean }) => {
  return (
    <div 
      className={`p-6 rounded-2xl bg-gradient-to-br ${service.color} border ${service.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-xl shadow-md mb-6">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-4">
        {service.description}
      </p>
            {/* this is the reference to */}
      <a 
        href="#" 
        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
      >
        Learn more
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  
  const isIntersecting = useIntersectionObserver(sectionRef as React.RefObject<HTMLElement>, {
    rootMargin: '-100px 0px',
    threshold: 0.1
  });

  useEffect(() => {
    if (isIntersecting) {
      setIsVisible(true);
    }
  }, [isIntersecting]);

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg text-gray-600">
            We offer a wide range of professional services to help your business grow in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 inline-flex items-center">
            View All Services
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;