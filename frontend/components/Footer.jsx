import React from "react";
import Logo from '/Layer_1.png';

const Footer = () => {
  return (
    <footer className="bg-[#3652AD]  dark:bg-gray-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={Logo}
              alt="ProFocus Logo"
            />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-white hover:text-[#FFD445]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-white hover:text-[#FFD445]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-white hover:text-[#FFD445]">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-white hover:text-[#FFD445]">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="#" className="hover:underline">
            ProFocus™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
