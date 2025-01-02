"use client";

import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-transparent fixed w-full z-20 top-0 start-0 border-b border-transparent mt-3">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
                        Nadya Auradiva
                    </span> */}

                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {/* <button
                        type="button"
                        className="text-black bg-transparent border-solid border-black hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-700 font-medium rounded-lg text-sm px-4 py-2 text-center dark:text-white dark:hover:bg-slate-500 dark:focus:ring-gray-700 dark:border-white"
                    >
                        Contact
                    </button> */}
                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-white"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen}
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open menu</span>
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
                    className={`${isMenuOpen ? "block" : "hidden"
                        } items-center justify-between w-full md:flex md:w-auto md:order-1`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-transparent rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-transparent">
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-black relative group rounded hover:text-[#62b6ee] md:hover:text-[#62b6ee] md:p-0 md:dark:hover:text-[#62b6ee] dark:text-white dark:hover:text-white dark:border-black"
                            >
                                Home
                                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#62b6ee] transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:w-full group-hover:left-0"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="block py-2 px-3 text-black relative group rounded hover:text-[#62b6ee] md:hover:text-[#62b6ee] md:p-0 md:dark:hover:text-[#62b6ee] dark:text-white dark:hover:text-white dark:border-black"
                            >
                                About
                                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#62b6ee] transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:w-full group-hover:left-0"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className="block py-2 px-3 text-black relative group rounded hover:text-[#62b6ee] md:hover:text-[#62b6ee] md:p-0 md:dark:hover:text-[#62b6ee] dark:text-white dark:hover:text-white dark:border-black"
                            >
                                Skills
                                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#62b6ee] transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:w-full group-hover:left-0"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#works"
                                className="block py-2 px-3 text-black relative group rounded hover:text-[#62b6ee] md:hover:text-[#62b6ee] md:p-0 md:dark:hover:text-[#62b6ee] dark:text-white dark:hover:text-white dark:border-black"
                            >
                                Works
                                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#62b6ee] transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:w-full group-hover:left-0"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contacts"
                                className="block py-2 px-3 text-black relative group rounded hover:text-[#62b6ee] md:hover:text-[#62b6ee] md:p-0 md:dark:hover:text-[#62b6ee] dark:text-white dark:hover:text-white dark:border-black"
                            >
                                Contacts
                                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#62b6ee] transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:w-full group-hover:left-0"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
