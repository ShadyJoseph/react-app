import Man from '../assets/images/man.avif';
import Woman from '../assets/images/woman.avif';
import Kid from '../assets/images/kid.avif';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Context';

const Categories = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`bg-${isDarkMode ? 'gray-700' : 'gray-100'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-8`}>Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative">
              <Link to="/men">
                <div className="relative h-80 overflow-hidden rounded-lg bg-white">
                  <img src={Man} alt="Man Collection" className="h-full w-full object-cover object-center" />
                </div>
                <div className="p-4">
                  <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'} mb-2`}>Men</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>Excel and express yourself when and where you can</p>
                  <button className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ${isDarkMode ? 'hover:bg-blue-700' : ''}`}>
                    Shop Now
                  </button>
                </div>
              </Link>
            </div>
            <div className="group relative">
              <Link to="/women">
                <div className="relative h-80 overflow-hidden rounded-lg bg-white">
                  <img src={Woman} alt="Woman Collection" className="h-full w-full object-cover object-center" />
                </div>
                <div className="p-4">
                  <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'} mb-2`}>Women</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>Excel and express yourself when and where you can</p>
                  <button className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ${isDarkMode ? 'hover:bg-blue-700' : ''}`}>
                    Shop Now
                  </button>
                </div>
              </Link>
            </div>
            <div className="group relative">
              <Link to="/kids">
                <div className="relative h-80 overflow-hidden rounded-lg bg-white">
                  <img src={Kid} alt="Kid Collection" className="h-full w-full object-cover object-center" />
                </div>
                <div className="p-4">
                  <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'} mb-2`}>Kids</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>Get your kids outside and exploring with confidence in children's clothes</p>
                  <button className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ${isDarkMode ? 'hover:bg-blue-700' : ''}`}>
                    Shop Now
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
