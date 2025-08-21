"use client";

import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  } as const;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-b from-blue-400 to-blue-600 p-8 text-white md:flex md:flex-col md:justify-center">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-3">Get in Touch</h2>
                <p className="text-blue-100 mb-8">
                  We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-blue-500 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span>support@skillorbit.com</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-500 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span>+1 (234) 567-890</span>
                  </div>
                </div>
              </div>
            </div>
            {/* form section */}
            
          
          </div>
        </motion.div>      </div>
    </section>
  );
};

export default Contact;