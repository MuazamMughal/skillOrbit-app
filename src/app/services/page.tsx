'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiClock, FiUsers, FiAward, FiLayers, FiCode, FiDatabase, FiSmartphone } from 'react-icons/fi';
import ServiceCard from '@/components/services/ServiceCard';

const ServicesPage = () => {
  // Services data with Unsplash image URLs
  const services = [
    {
      title: 'Web Development',
      description: 'Custom, responsive websites built with modern technologies to help your business establish a strong online presence.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      features: [
        'Responsive Design',
        'E-commerce Solutions',
        'CMS Integration',
        'SEO Optimization',
        'Performance Tuning'
      ]
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android to engage your customers on the go.',
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      features: [
        'iOS & Android Apps',
        'React Native Development',
        'UI/UX Design',
        'API Integration',
        'App Store Deployment'
      ]
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces designed to enhance user experience and drive engagement.',
      image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing',
        'Design Systems'
      ]
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services to power your business applications and data.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      features: [
        'Cloud Migration',
        'AWS/Azure/GCP Services',
        'Serverless Architecture',
        'DevOps Automation',
        'Cost Optimization'
      ]
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven digital marketing strategies to grow your online presence and reach your target audience.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      features: [
        'SEO & Content Strategy',
        'Social Media Marketing',
        'PPC Advertising',
        'Email Campaigns',
        'Analytics & Reporting'
      ]
    },
    {
      title: 'IT Consulting',
      description: 'Expert technology consulting to align your IT strategy with your business objectives.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      features: [
        'Technology Assessment',
        'Digital Transformation',
        'IT Infrastructure',
        'Cybersecurity',
        'Compliance & Security'
      ]
    }
  ];

  const stats = [
    { id: 1, name: 'Projects Completed', value: '500+', icon: FiCheckCircle },
    { id: 2, name: 'Years Experience', value: '8+', icon: FiClock },
    { id: 3, name: 'Happy Clients', value: '200+', icon: FiUsers },
    { id: 4, name: 'Awards Won', value: '25+', icon: FiAward },
  ];

 
};

export default ServicesPage;