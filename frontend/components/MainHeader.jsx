import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaHome, FaBars, FaTimes } from "react-icons/fa";
import logo from '/Layer_1.png';

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#3652AD] text-white">
      <div className="container px-4 md:px-10 mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src={logo} alt="Pro Focus" />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-12">
          <a href="#" className="hover:text-[#FFD445] hover:underline">Home</a>
          <a href="#" className="hover:text-[#FFD445] hover:underline">About</a>
          <a href="#" className="hover:text-[#FFD445] hover:underline">Pricing</a>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="mailto:example@example.com"
            className="hover:bg-[#fff] bg-[#FFD445] text-[#3652AD] p-2 rounded-full"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+1234567890"
            className="hover:bg-[#fff] bg-[#FFD445] text-[#3652AD] p-2 rounded-full"
          >
            <FaPhoneAlt />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#3652AD] bg-opacity-95 text-white flex flex-col items-center justify-center z-50">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
            <FaTimes size={24} />
          </button>
          <nav className="flex flex-col items-center space-y-4">
            <a href="#" className="hover:text-[#FFD445] text-2xl" onClick={toggleMenu}>Home</a>
            <a href="#" className="hover:text-[#FFD445] text-2xl" onClick={toggleMenu}>About</a>
            <a href="#" className="hover:text-[#FFD445] text-2xl" onClick={toggleMenu}>Services</a>
          </nav>
          <div className="flex space-x-4 mt-8">
            <a
              href="mailto:example@example.com"
              className="hover:bg-[#fff] bg-[#FFD445] text-[#3652AD] p-2 rounded-full"
            >
              <FaEnvelope />
            </a>
            <a
              href="tel:+1234567890"
              className="hover:bg-[#fff] bg-[#FFD445] text-[#3652AD] p-2 rounded-full"
            >
              <FaPhoneAlt />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default MainHeader;