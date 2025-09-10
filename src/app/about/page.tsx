'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiTarget, FiAward, FiHeart, FiArrowRight } from 'react-icons/fi';

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
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
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
    <div className="min-h-screen mt-6">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-500 to-blue-300 text-white overflow-hidden">
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
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Story</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A Passion for Innovation
            </p>
            <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
              Founded in 2020&rsquo; we started as a small team of passionate individuals with a shared vision to revolutionize the tech industry. Today, we&rsquo;re proud to serve clients worldwide with our cutting-edge solutions.
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

      {/* Team Section */}
      <div className=" py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              The talented people behind our success
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-500">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-t from-blue-300 to-blue-500">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to start your next project?</span>
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with us today and lets create something amazing together.
          </p>
          <div className="mt-8">
            <Link
              href="/#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-300"
            >
              Get in Touch
              <FiArrowRight className="ml-3 -mr-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;