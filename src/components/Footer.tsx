import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111B25] py-4">
      <div className="container mx-auto px-6 text-white">
        <section className="text-center mb-6">
          <div className="flex flex-wrap justify-center space-x-6 sm:space-y-0 sm:space-x-6">
            <div>
              <Link to="/about" className="font-bold text-xs sm:text-sm">About us</Link>
            </div>
            <div>
              <Link to="/products" className="font-bold text-xs sm:text-sm">Products</Link>
            </div>
            <div>
              <Link to="/help" className="font-bold text-xs sm:text-sm">Help</Link>
            </div>
            <div>
              <Link to="/contact" className="font-bold text-xs sm:text-sm">Contact</Link>
            </div>
          </div>
        </section>

        <hr className="my-4 border-[#333]" />

        <section className="mb-6 text-center">
          <p className="text-[#DBEAFF] text-xs sm:text-sm">
          Learnify is not just about acquiring knowledge, but about transforming how we approach the world. It’s a dynamic, ongoing process where each new piece of information leads to greater understanding. Learnify empowers individuals to embrace curiosity, challenge limits, and continuously evolve in both personal and professional growth.
          </p>
        </section>

        <section className="flex justify-center space-x-4 mb-6">
          <Link to="https://www.instagram.com/learn.with.learnify?igsh=MXFxZW1tbGR1dXZ5dw==" className="text-white hover:text-gray-400">
            <FaInstagram className="text-xl sm:text-2xl" />
          </Link>
          <Link to="https://linkedin.com" className="text-white hover:text-gray-400">
            <FaLinkedin className="text-xl sm:text-2xl" />
          </Link>
          <Link to="https://github.com" className="text-white hover:text-gray-400">
            <FaGithub className="text-xl sm:text-2xl" />
          </Link>
        </section>
      </div>

      <div className="text-center p-2 bg-[#333333] text-[#DBEAFF] text-xs sm:text-sm">
        © 2020 Copyright: Learnify
      </div>
    </footer>
  );
};

export default Footer;