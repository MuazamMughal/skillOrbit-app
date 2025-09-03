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

 
};

export default AboutPage;