"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-transparent fixed w-full z-20 top-0 border-b border-transparent">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <a href="" className="flex items-center">
                    <Image
                        src="/white-lg.png"
                        alt="Logo"
                        width={100}
                        height={50}
                        className="hidden dark:block"
                    />
                    <Image
                        src="/black-lg.png"
                        alt="Logo"
                        width={100}
                        height={50}
                        className="dark:hidden"
                    />
                </a>

                {/* Toggle */}
                <div className="flex md:order-2">
                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden focus:outline-none dark:text-white"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen}
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Toggle menu</span>
                        {isMenuOpen ? (
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                <div
                    className={`${isMenuOpen ? "block" : "hidden"
                        } absolute md:relative top-14 right-4 md:top-auto lg:left-1/3 md:left-36 bg-transparent shadow-lg p-4 rounded-lg md:shadow-none md:p-0 md:rounded-none items-center justify-between md:flex md:justify-end md:w-auto w-64`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8">
                        {[
                            { name: "Home", to: "home" },
                            { name: "About", to: "about" },
                            { name: "Skills", to: "skills" },
                            { name: "Works", to: "works" },
                            { name: "Contact", to: "contact" },
                        ].map((item, index) => (
                            <li key={index}>
                                <ScrollLink
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="block py-2 px-3 text-black relative group rounded hover:text-[#62b6ee] md:hover:text-[#62b6ee] md:p-0 md:dark:hover:text-[#62b6ee] dark:text-white dark:hover:text-white cursor-default"
                                    onClick={closeMenu}
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#62b6ee] transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:w-full group-hover:left-0"></span>
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
