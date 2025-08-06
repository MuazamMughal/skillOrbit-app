"use client";

import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/hero.png';

export default function Hero() {
  return (
    <section className="relative py-6 md:py-10 bg-gradient-to-b from-blue-50 to-white">
      <div className=" sm:px-6 lg:px-8 ">
        <div className="flex flex-col items-center">
          {/* Image Section */}
          <div className="mb-3">
            <div className="relative">
              <div className=" overflow-hidden transition-all duration-500">
                <Image
                  src={heroImage}
                  alt="Learning and Development"
                  width={450}
                  height={100}
                  className="  min-h-[35vh]  "
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="text-center max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 leading-tight ">
              Transform Your <span className="text-blue-600">Skills</span> with Our Expert-Led Courses
            </h1>
            <p className="text-lg mx-24 text-gray-600 mb-4 sm:px-0">
              Join thousands of learners worldwide and unlock your potential with our comprehensive courses designed by industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Explore Courses
              </button>
              {/* <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-all duration-300">
                Learn More
              </button> */}
            </div>
          </div>
        </div>
      </div>

      Decorative elements with animation
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-100 rounded-full -z-10 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-indigo-100 rounded-full -z-10 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animate-[blob_7s_infinite_2000ms]"></div>
      <div className="absolute top-1/2 left-1/2 w-1/4 h-1/2 bg-purple-100 rounded-full -z-10 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animate-[blob_7s_infinite_4000ms]"></div>
   
    </section>
  );
};
