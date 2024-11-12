import React from 'react';

const Navbar: React.FC = () => {
  const logo = '/assets/learnify-logo.png'; 
  const profileIcon = 'assets/profile-picture-icon.png';

  return (
    <nav className="w-full bg-dark-blue flex flex-row justify-between py-3 px-10 items-center">
      <img src={logo} className='w-16 cursor pointer' alt="Logo" />

      <div className="flex w-2/5 mx-5">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded-md text-black"
        />
      </div>
      
      <img src={profileIcon} className='w-16 h-16 cursor pointer' alt="profile-picture-icon" />
    </nav>
  );
};

export default Navbar;
