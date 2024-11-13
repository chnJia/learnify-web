import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111B25] py-4">
      <div className="container mx-auto px-6 text-white">
        <section className="text-center mb-6">
          <div className="flex justify-center space-x-6">
            <div>
              <Link to="/about" className="font-bold text-sm">About us</Link>
            </div>
            <div>
              <Link to="/products" className="font-bold text-sm">Products</Link>
            </div>
            <div>
              <Link to="/awards" className="font-bold text-sm">Awards</Link>
            </div>
            <div>
              <Link to="/help" className="font-bold text-sm">Help</Link>
            </div>
            <div>
              <Link to="/contact" className="font-bold text-sm">Contact</Link>
            </div>
          </div>
        </section>

        <hr className="my-4 border-[#333]" />

        <section className="mb-6 text-center">
          <p className="text-[#DBEAFF] text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat voluptatibus placeat nam,
            commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam sequi voluptate quas.
          </p>
        </section>

        <section className="flex justify-center space-x-4 mb-6">
          <Link to="https://facebook.com" className="text-white hover:text-gray-400">
            <FaFacebookF className="text-xl" />
          </Link>
          <Link to="https://twitter.com" className="text-white hover:text-gray-400">
            <FaTwitter className="text-xl" />
          </Link>
          <Link to="https://google.com" className="text-white hover:text-gray-400">
            <FaGoogle className="text-xl" />
          </Link>
          <Link to="https://instagram.com" className="text-white hover:text-gray-400">
            <FaInstagram className="text-xl" />
          </Link>
          <Link to="https://linkedin.com" className="text-white hover:text-gray-400">
            <FaLinkedin className="text-xl" />
          </Link>
          <Link to="https://github.com" className="text-white hover:text-gray-400">
            <FaGithub className="text-xl" />
          </Link>
        </section>
      </div>

      <div className="text-center p-2 bg-[#333333] text-[#DBEAFF] text-xs">
        © 2020 Copyright: Learnify
      </div>
    </footer>
  );
};

export default Footer;