import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  students: number;
  price: string;
  whatsappLink: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
  image,
  duration,
  level,
  students,
  price,
  whatsappLink,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Course Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        {/* Course Level Badge */}
        <span className={`absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold ${
          level === 'Beginner' ? 'bg-green-500' : 
          level === 'Intermediate' ? 'bg-yellow-500' : 'bg-red-500'
        } text-white`}>
          {level}
        </span>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <div className="mb-4 flex items-center text-sm text-gray-600">
          <span className="flex items-center">
            <svg className="mr-1 h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            4.9
          </span>
          <span className="mx-2">•</span>
          <span>{duration}</span>
          <span className="mx-2">•</span>
          <span>{students} students</span>
        </div>

        <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
        <p className="mb-4 text-gray-600 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">{price}</span>
          <Link 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-green-600 px-6 py-2 font-medium text-white transition-colors hover:bg-green-700"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
