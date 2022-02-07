import React from "react";
import {
  FaChevronCircleUp,
  FaYoutubeSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import BackToTop from "react-back-to-top-button";

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="container px-6 py-4 mx-auto max-w-7xl">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <div>
                <a href="#" className="text-xl font-bold text-white">
                  The Believer&apos;s Equipping Network
                </a>
              </div>

              <p className="max-w-md mt-2 text-gray-300 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, nisi! Id.
              </p>

              <div className="flex mt-4 -mx-2">
                <a
                  href="#"
                  className="mx-2 text-white dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                  aria-label="Facebook"
                >
                  <FaFacebookSquare size={24} color="#3b5998" />
                </a>

                <a
                  href="#"
                  className="mx-2 text-white  dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                  aria-label="Twitter"
                >
                  <FaTwitterSquare size={24} color="#1DA1F2" />
                </a>

                <a
                  href="#"
                  className="mx-2 text-white  dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                  aria-label="Instagram"
                >
                  <FaInstagramSquare size={24} color="#c13584" />
                </a>

                <a
                  href="#"
                  className="mx-2 text-white  dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                  aria-label="Youtube"
                >
                  <FaYoutubeSquare size={24} color="red" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <div>
                <h3 className="text-gray-300 uppercase dark:text-white">
                  About Us
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline cursor-pointer"
                >
                  B.E.N (who we are)
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline cursor-pointer"
                >
                  Leaders
                </a>
              </div>

              <div>
                <h3 className="text-gray-300 uppercase dark:text-white">
                  Support & Resources
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline cursor-pointer"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline cursor-pointer"
                >
                  Past Messages
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline cursor-pointer"
                >
                  Podcats
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline cursor-pointer"
                >
                  Videos
                </a>
              </div>

              <div>
                <h3 className="text-gray-300 uppercase dark:text-white">
                  Legal
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline cursor-pointer"
                >
                  Terms & Conditions
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-300 dark:text-gray-400 hover:underline cursor-pointer"
                >
                  Privacy Policy
                </a>
              </div>

              <div>
                <h3 className="text-gray-300 uppercase dark:text-white">
                  Contact Us
                </h3>
                <span className="block mt-2 text-sm text-gray-200 dark:text-gray-400">
                  +234 809 1764 286
                </span>
                <span className="block mt-2 text-sm text-gray-200 dark:text-gray-400">
                  belivers-equipping-network@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />
        <div>
          <p className="text-center text-gray-800 dark:text-white">
            © Belivers Equipping Network {new Date().getFullYear()} - All rights
            reserved
          </p>
        </div>
      </div>
      <BackToTop speed={500} easing="easeInOutQuint">
        <FaChevronCircleUp color="#DC2626" className="" />
      </BackToTop>
    </footer>
  );
};

export default Footer;
