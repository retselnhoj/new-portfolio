import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Navbar() {
    return (
        <nav className="top-0 z-20 w-full px-[24px] xl:px-0">
            <div className="flex flex-wrap items-center justify-between max-w-[1160px] w-full py-7 mx-auto">
                <div className="lg:text-[28px] text-2xl font-black text-neutral-300">
                    John Lester
                </div>
                <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                    <div className="flex justify-between items-center gap-[13px] z-30">
                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/Iod.retselnhoj"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook
                                size={24}
                                className="text-blue-600 hover:text-blue-800 transition-colors"
                            />
                        </a>
                        {/* GitHub */}
                        <a
                            href="https://github.com/retselnhoj/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub
                                size={24}
                                className="text-gray-800 hover:text-gray-600 transition-colors"
                            />
                        </a>
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/johnlester/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin
                                size={24}
                                className="text-blue-600 hover:text-blue-800 transition-colors"
                            />
                        </a>
                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/johnlester/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram
                                size={24}
                                className="text-pink-500 hover:text-pink-700 transition-colors"
                            />
                        </a>
                    </div>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full gap-16 md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col items-center w-[90%] justify-center gap-4 md:gap-[30px] p-4 mt-4 font-medium absolute md:left-1/2 md:-translate-x-1/2 z-10 bg-[#141414]/[20%] md:bg-transparent border backdrop-blur-2xl md:backdrop-blur-0 border-[#222222] md:border-0 rounded-lg md:p-0 rtl:space-x-reverse md:flex-row md:mt-0 pointer-events-auto">
                        <li className="text-center">
                            <a
                                href="#home"
                                className="block text-center text-white rounded md:bg-transparent"
                            >
                                Home
                            </a>
                        </li>
                        <li className="text-center">
                            <a
                                href="#services"
                                className="block text-center text-white rounded md:bg-transparent"
                            >
                                Services
                            </a>
                        </li>
                        <li className="text-center">
                            <a
                                href="#portfolio"
                                className="block text-center text-white rounded md:bg-transparent"
                            >
                                Portfolio
                            </a>
                        </li>
                        <li className="text-center">
                            <a
                                href="#contact"
                                className="block text-center text-white rounded md:bg-transparent"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
