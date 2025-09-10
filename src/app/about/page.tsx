'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiUsers, FiTarget, FiAward, FiHeart, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      bio: 'Visionary leader with 15+ years of experience in the tech industry.'
    },
    {
      name: 'Sarah Williams',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
      bio: 'Tech enthusiast and problem solver with a passion for innovation.'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      bio: 'Full-stack developer with expertise in modern web technologies.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX/UI Designer',
      image: 'https://images.unsplash.com/photo-1573496358961-3cde308acf6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      bio: 'Creative designer focused on delivering exceptional user experiences.'
    }
  ];

  const values = [
    {
      icon: <FiTarget className="w-8 h-8 text-blue-600" />,
      title: 'Our Mission',
      description: 'To empower businesses through innovative technology solutions that drive growth and success.'
    },
    {
      icon: <FiAward className="w-8 h-8 text-blue-600" />,
      title: 'Our Vision',
      description: 'To be the most trusted partner for digital transformation in the industry.'
    },
    {
      icon: <FiHeart className="w-8 h-8 text-blue-600" />,
      title: 'Our Values',
      description: 'Integrity, innovation, and customer satisfaction are at the core of everything we do.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Team working together"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Empowering businesses through innovative technology solutions and exceptional service.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Story</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A Passion for Innovation
            </p>
            <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
              Founded in 2020, we started as a small team of passionate individuals with a shared vision to revolutionize the tech industry. Today, we're proud to serve clients worldwide with our cutting-edge solutions.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="pt-6"
                >
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        {value.icon}
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900">{value.title}</h3>
                      <p className="mt-2 text-base text-gray-500">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

     
  );
};

export default AboutPage;