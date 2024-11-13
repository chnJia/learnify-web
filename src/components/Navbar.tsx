import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const logo = '/assets/learnify-logo.png'; 
  const profileIcon = 'assets/profile-picture-icon.png';

  return (
    <nav className="w-full bg-dark-blue flex flex-row justify-between py-3 px-10 items-center">
      <img src={logo} className='w-14 cursor-pointer' alt="Logo" />

      <div className="flex w-2/5 mx-5 relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-md text-black border-2 border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-soft-blue focus:outline-none"
        />
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      </div>
      
      <img src={profileIcon} className='w-14 h-14 cursor-pointer' alt="profile-picture-icon" />
    </nav>
  );
};

export default Navbar;