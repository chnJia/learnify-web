import React from 'react';

const Navbar: React.FC = () => {
  const logo = '/assets/learnify-logo.png'; 
  const profileIcon = 'assets/profile-picture-icon.png';

  return (
    <nav className="w-full bg-dark-blue flex flex-row justify-between py-3 px-10 items-center">
      <img src={logo} className='w-20' alt="Logo" />
      <img src={profileIcon} className='w-18 h-18' alt="profile-picture-icon" />
    </nav>
  );
};

export default Navbar;
