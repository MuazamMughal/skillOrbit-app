'use client';

import React, { useState } from 'react';
import CourseCard from '@/components/courses/CourseCard';
import { FiSearch, FiFilter, FiChevronDown } from 'react-icons/fi';

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [level, setLevel] = useState('All');

  // Sample course data - replace with your actual data
  const courses = [
    {
      id: '1',
      title: 'Web Development Bootcamp',
      description: 'Learn full-stack web development with modern technologies including React, Node.js, and MongoDB.',
      image: '/courses/web-dev.jpg', // Replace with your image path
      duration: '12 Weeks',
      level: 'Beginner',
      students: 1245,
      price: '$299',
      category: 'Web Development',
      whatsappLink: 'https://wa.me/1234567890?text=I%20want%20to%20enroll%20in%20Web%20Development%20Bootcamp',
    },
    {
      id: '2',
      title: 'Data Science Fundamentals',
      description: 'Master data analysis, visualization, and machine learning with Python and popular libraries.',
      image: '/courses/data-science.jpg', // Replace with your image path
      duration: '10 Weeks',
      level: 'Intermediate',
      students: 892,
      price: '$349',
      category: 'Data Science',
      whatsappLink: 'https://wa.me/1234567890?text=I%20want%20to%20enroll%20in%20Data%20Science%20Fundamentals',
    },
    {
      id: '3',
      title: 'Mobile App Development',
      description: 'Build cross-platform mobile applications using React Native and Firebase.',
      image: '/courses/mobile-dev.jpg', // Replace with your image path
      duration: '8 Weeks',
      level: 'Intermediate',
      students: 756,
      price: '$279',
      category: 'Mobile Development',
      whatsappLink: 'https://wa.me/1234567890?text=I%20want%20to%20enroll%20in%20Mobile%20App%20Development',
    },
    {
      id: '4',
      title: 'UI/UX Design Masterclass',
      description: 'Learn user-centered design principles and tools like Figma and Adobe XD.',
      image: '/courses/ui-ux.jpg', // Replace with your image path
      duration: '6 Weeks',
      level: 'Beginner',
      students: 1023,
      price: '$249',
      category: 'Design',
      whatsappLink: 'https://wa.me/1234567890?text=I%20want%20to%20enroll%20in%20UI%2FUX%20Design%20Masterclass',
    },
    {
      id: '5',
      title: 'Cloud Computing with AWS',
      description: 'Master cloud infrastructure and services with Amazon Web Services.',
      image: '/courses/cloud.jpg', // Replace with your image path
      duration: '10 Weeks',
      level: 'Advanced',
      students: 543,
      price: '$399',
      category: 'Cloud Computing',
      whatsappLink: 'https://wa.me/1234567890?text=I%20want%20to%20enroll%20in%20Cloud%20Computing%20with%20AWS',
    },
    {
      id: '6',
      title: 'Digital Marketing Pro',
      description: 'Learn SEO, social media marketing, and content strategy to grow businesses online.',
      image: '/courses/digital-marketing.jpg', // Replace with your image path
      duration: '8 Weeks',
      level: 'Beginner',
      students: 1342,
      price: '$229',
      category: 'Marketing',
      whatsappLink: 'https://wa.me/1234567890?text=I%20want%20to%20enroll%20in%20Digital%20Marketing%20Pro',
    },
  ];

  // Get unique categories for filter
  const categories = ['All', ...new Set(courses.map(course => course.category))];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  // Filter courses based on search query and filters
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === 'All' || course.category === category;
    const matchesLevel = level === 'All' || course.level === level;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-100 to-blue-50 text-[#2554A4] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Course</h1>
          <p className="text-xl text-[#2554A4] max-w-3xl mx-auto mb-8">
            Browse our wide range of professional courses and start your learning journey today
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full py-4 px-6 pr-12 rounded-lg border-2 border-[#2554A4] text-[#2554A4] focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#2554A4] text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center px-4 py-2 rounded-lg shadow-sm">
              <FiFilter className="text-gray-500 mr-2" />
              <span className="text-gray-700 mr-2">Filter:</span>
              
              <div className="relative group">
                <button className="flex items-center text-gray-700">
                  {category}
                  <FiChevronDown className="ml-1" />
                </button>
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 ${category === cat ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              
              <span className="mx-2 text-gray-300">|</span>
              
              <div className="relative group">
                <button className="flex items-center text-gray-700">
                  {level}
                  <FiChevronDown className="ml-1" />
                </button>
                <div className="absolute z-10 mt-2 w-32 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                  {levels.map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setLevel(lvl)}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 ${level === lvl ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
              
              {(category !== 'All' || level !== 'All') && (
                <button 
                  onClick={() => {
                    setCategory('All');
                    setLevel('All');
                  }}
                  className="ml-4 text-sm text-blue-600 hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>
          
          <div className="text-gray-600">
            {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} found
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No courses found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setCategory('All');
                setLevel('All');
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;