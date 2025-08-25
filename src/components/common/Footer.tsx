import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Instructors', href: '/instructors' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const courses = [
    { name: 'Web Development', href: '/courses/web-development' },
    { name: 'Mobile App Development', href: '/courses/mobile-development' },
    { name: 'Data Science', href: '/courses/data-science' },
    { name: 'UI/UX Design', href: '/courses/ui-ux-design' },
    { name: 'Digital Marketing', href: '/courses/digital-marketing' },
    { name: 'Cloud Computing', href: '/courses/cloud-computing' },
  ];

  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt className="text-blue-500" />, 
      text: '123 Skill Street, Tech City, TC 12345' 
    },
    { 
      icon: <FaPhoneAlt className="text-blue-500" />, 
      text: '+1 (234) 567-8900' 
    },
    { 
      icon: <FaEnvelope className="text-blue-500" />, 
      text: 'info@skillorbit.com' 
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">SkillOrbit</h3>
            <p className="text-gray-400">Empowering individuals with in-demand skills for the digital age. Learn from industry experts and accelerate your career.</p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white border-b border-gray-700 pb-2">Popular Courses</h4>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.name}>
                  <a 
                    href={course.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white border-b border-gray-700 pb-2">Contact Us</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="mt-1">{item.icon}</span>
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
            
           
      </div>
    </footer>
  );
};

export default Footer;