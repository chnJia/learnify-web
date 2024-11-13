import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const logo = '/assets/learnify-logo.png'; 
  const profileIcon = 'assets/profile-picture-icon.png';

  return (
    <nav className="w-full bg-dark-blue flex flex-row justify-between py-2 px-6 items-center">
      <img src={logo} className='w-10 cursor-pointer' alt="Logo" />

      <div className="flex w-2/5 mx-4 relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-8 pr-3 py-1.5 rounded-md text-black border-2 border-gray-300 focus:border-indigo-600 focus:ring-1 focus:ring-soft-blue focus:outline-none"
        />
        <FiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
      </div>
      
      <img src={profileIcon} className='w-12 h-12 cursor-pointer' alt="profile-picture-icon" />
    </nav>
  );
};

export default Navbar;