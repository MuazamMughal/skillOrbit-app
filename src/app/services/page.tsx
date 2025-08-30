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

  return (
    <div className="min-h-screen mt-6 ">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-t from-blue-300 to-blue-500 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Team working"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Empowering your business with cutting-edge technology solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className=" py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <stat.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-500">{stat.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Comprehensive Services
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of professional services to help your business grow in the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                features={service.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ServicesPage;