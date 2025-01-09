"use client";

import React, { FormEvent, useRef } from "react";
import Image from "next/image";
import { Icon } from '@iconify/react';
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

interface MainProps {
    darkMode: boolean;
}

export default function Main({ darkMode }: MainProps) {
    const frameworks = [
        { id: 1, image: '/resources/logo/bootstrap.png', title: 'Bootstrap', description: 'CSS Framework', link: 'https://getbootstrap.com/' },
        { id: 2, image: '/resources/logo/codeigniter.png', title: 'Codeigniter', description: 'PHP Framework', link: 'https://www.codeigniter.com/' },
        { id: 3, image: '/resources/logo/laravel.png', title: 'Laravel', description: 'PHP Framework', link: 'https://laravel.com/' },
        { id: 4, image: '/resources/logo/angular.png', title: 'Angular', description: 'Javascript Framework', link: 'https://angular.dev/' },
        { id: 5, image: '/resources/logo/next-js.png', title: 'NextJS', description: 'ReactJS Framework', link: 'https://nextjs.org/', dark: '/resources/logo/next-js-white.png' },
        { id: 6, image: '/resources/logo/tailwindcss.png', title: 'Tailwind CSS', description: 'CSS Framework', link: 'https://tailwindcss.com/' },
        { id: 7, image: '/resources/logo/flutter.png', title: 'Flutter', description: 'Open-source Software Development Kit (SDK) from Google', link: 'https://flutter.dev/' },
        { id: 7, image: '/resources/logo/react-js.png', title: 'ReactJS', description: 'Javascript Framework', link: 'https://react.dev/' },
    ];

    const languages = [
        { id: 1, image: '/resources/logo/javascript.png', title: 'Javascript', description: 'A programming language and core technology of the Web', link: 'https://www.w3schools.com/js/' },
        { id: 2, image: '/resources/logo/php.png', title: 'PHP', description: 'A widely-used, open source scripting language', link: 'https://www.w3schools.com/php/' },
        { id: 3, image: '/resources/logo/typescript.svg', title: 'Typescript', description: 'Strongly typed programming language that builds on JavaScript', link: 'https://www.w3schools.com/typescript/' },
        { id: 4, image: '/resources/logo/python.png', title: 'Python', description: 'Interpreted, Interactive, Object-oriented Programming Language', link: 'https://www.w3schools.com/python/' },
        { id: 5, image: '/resources/logo/dart.png', title: 'Dart', description: 'A client-optimized language for developing fast apps on any platform', link: 'https://dart.dev/' },
        { id: 6, image: '/resources/logo/mysql.png', title: 'MySQL', description: 'Relational Database Management System (RDBMS)', link: 'https://www.mysql.com/' },
    ];

    const apps = [
        { id: 1, image: '/resources/works/elibrary.png', title: 'E-Library Book Rent', description: 'Mobile App - Flutter', link: '#' },
        { id: 1, image: '/resources/works/dataset.png', title: 'Dashboard Analytics', description: 'Dataset Analytics - Python', link: 'https://nadya-bikesharing.streamlit.app/' },
    ];

    const formRef = useRef<HTMLFormElement>(null);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formRef.current) {
            const formData = new FormData(formRef.current);

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData,
                });

                if (response.ok) {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Your form has been submitted.",
                        customClass: {
                            popup: "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-md shadow-md max-w-sm",
                            title: "text-lg font-semibold",
                            confirmButton: "bg-[#62b6ee] text-white px-4 py-2 rounded-md hover:bg-[#38caef]",
                        },
                        backdrop: `rgba(0,0,0,0.5)`,
                    });
                    formRef.current.reset();
                } else {
                    throw new Error("Form submission failed");
                }
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Error!",
                    text: "Something went wrong. Please try again later. " + error,
                    customClass: {
                        popup: "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-md shadow-md max-w-sm",
                        title: "text-lg font-semibold",
                        confirmButton: "bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600",
                    },
                    backdrop: `rgba(0,0,0,0.5)`,
                });
            }
        }
    };
    return (
        <div className="mt-52">
            <section id="home" className="py-12 mb-32">
                <div className="container mx-auto flex flex-col lg:flex-row justify-evenly items-center w-full h-full">
                    <div className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto lg:mx-0">
                        <Image
                            src="/resources/images/lead.png"
                            alt="Nadya"
                            className="object-cover w-full h-full hover:drop-shadow-[0_5px_10px_#e19c4d] dark:hover:drop-shadow-[0_5px_10px_#aa362b]"
                            width={700}
                            height={700}
                        />
                    </div>

                    <div className="flex flex-col justify-center text-center lg:text-left mt-6 lg:mt-0 lg:ml-6 space-y-1">
                        <h5 className="text-2xl md:text-xl lg:text-2xl font-bold text-black dark:text-gray-100">
                            Hello,
                        </h5>
                        <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold text-black dark:text-gray-100 flex justify-center lg:justify-start items-center">
                            I am
                            <span
                                className="ml-2 text-4xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00bcf2] to-[#00b294] animate-typing-mobile md:animate-typing lg:animate-typing border-r-2 border-white whitespace-nowrap overflow-hidden"
                            >
                                Nadya.
                            </span>
                        </h2>
                        <h4 className="text-2xl md:text-2xl lg:text-3xl font-bold text-black dark:text-gray-100">
                            a
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mx-1">
                                full-stack
                            </span>
                            developer.
                        </h4>
                    </div>
                </div>
            </section>

            <section id="about" className="py-12">
                <div className="inline-flex items-center justify-center w-full mb-28">
                    <hr className="w-80 h-1 my-8 bg-black border-0 rounded dark:bg-white" />
                    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-black">
                        <svg className="w-4 h-4 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                    </div>
                </div>

                {/* About */}
                <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-evenly px-4 lg:px-8">
                    <div className="relative flex-shrink-0 mb-4 lg:mb-0">
                        <div className="group relative w-40 h-56 md:w-48 md:h-64 lg:w-60 lg:h-72 bg-[#b1a9ae] dark:bg-[#5b5456] flex items-center justify-center overflow-hidden rounded-full transition-all duration-300 hover:h-80">
                            <div className="absolute w-20 md:w-24 h-[130%] bg-gradient-to-b from-[#e19c4d] via-[#aa362b] to-[#62b6ee] animate-spin-slow rounded-full"></div>
                            <div className="relative w-full h-full bg-[#b1a9ae] dark:bg-[#5b5456] inset-1 rounded-full flex flex-col items-center justify-center z-10 overflow-hidden">
                                <Image
                                    src="/resources/images/3.jpg"
                                    alt="Profile"
                                    className="rounded-full object-cover w-full h-full group-hover:scale-100 transition-transform duration-300"
                                    width={200}
                                    height={200}
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-transparent text-center p-3 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h1 className="text-black">Nadya</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center max-w-sm text-center lg:text-left lg:pl-0">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-gray-100 mb-4">
                            About Me!
                        </h3>
                        <p className="text-sm sm:text-base lg:text-md text-black dark:text-gray-300 leading-relaxed">
                            Passionate in both front-end and back-end development, I am capable of building complete web applications from start to finish.
                            Working on client-facing interfaces, ensuring a seamless user experience, while also managing server-side logic, databases, and application architecture to maintain robust functionality.
                            My proficiency in various programming languages, frameworks, and tools enables me to bridge the gap between design and engineering, ensuring comprehensive and efficient digital solutions.
                        </p>
                    </div>
                </div>

                <div className="mx-auto flex justify-center items-center mt-12 space-x-4">
                    <a
                        target="_blank"
                        href="https://github.com/raddva"
                        className="w-12 h-12 flex items-center justify-center bg-transparent text-black dark:text-white rounded-full shadow hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                    >
                        <Icon icon="fa-brands:github" className="text-2xl" />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/radiva"
                        className="w-12 h-12 flex items-center justify-center bg-transparent text-[#0a66c2] rounded-full shadow hover:bg-[#0a66c2] hover:text-white transition"
                    >
                        <Icon icon="fa-brands:linkedin" className="text-2xl" />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.instagram.com/raddva"
                        className="w-12 h-12 flex items-center justify-center bg-transparent text-[#C13584] rounded-full shadow hover:bg-[#C13584] hover:text-white transition"
                    >
                        <Icon icon="fa-brands:instagram" className="text-2xl" />
                    </a>
                    <a
                        target="_blank"
                        href="https://discord.com/users/760506230677569586"
                        className="w-12 h-12 flex items-center justify-center bg-transparent text-[#7289da] rounded-full shadow hover:bg-[#7289da] hover:text-white transition"
                    >
                        <Icon icon="fa-brands:discord" className="text-2xl" />
                    </a>
                </div>
            </section>

            <section id="skills" className="py-24">
                <div className="inline-flex items-center justify-center w-full mt-4 mb-14">
                    <hr className="w-80 h-1 my-8 bg-black border-0 rounded dark:bg-white" />
                    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-black">
                        <svg className="w-4 h-4 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                    </div>
                </div>

                {/* Skills */}
                <div className="container mx-0">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Skills</h2>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                            Some programming languages and frameworks I am skilled in.
                        </p>
                    </div>

                    <div className="relative w-screen lg:w-full py-2">
                        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none z-10" />
                        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none z-10" />
                        <div className="overflow-hidden">
                            <div className="flex space-x-4 animate-scroll-left-mobile lg:animate-scroll-left">
                                {[...languages, ...languages].map((lang, index) => (
                                    <a
                                        href={lang.link}
                                        target="_blank"
                                        key={index}
                                        className="flex-shrink-0 w-[220px] h-[120px] sm:w-[250px] sm:h-[140px] rounded-lg overflow-hidden bg-transparent shadow transition-transform transform hover:scale-100 hover:shadow-lg hover:shadow-gray-400 flex border border-gray-200 dark:border-gray-800"
                                    >
                                        <div className="relative w-[55%] h-full">
                                            <Image
                                                src={lang.image}
                                                alt={lang.title}
                                                width={500}
                                                height={500}
                                                className="absolute top-0 left-0 w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="flex flex-col justify-center w-[45%] p-3 bg-transparent">
                                            <h3 className="text-sm font-bold text-black dark:text-white">{lang.title}</h3>
                                            <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{lang.description}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="overflow-hidden mt-8">
                            <div className="flex space-x-4 animate-scroll-right-mobile lg:animate-scroll-right">
                                {[...frameworks, ...frameworks].map((fw, index) => (
                                    <a
                                        href={fw.link}
                                        target="_blank"
                                        key={index}
                                        className="flex-shrink-0 w-[220px] h-[120px] sm:w-[250px] sm:h-[140px] rounded-lg overflow-hidden bg-transparent shadow transition-transform transform hover:scale-100 hover:shadow-lg hover:shadow-gray-400 flex border border-gray-200 dark:border-gray-800"
                                    >
                                        <div className="relative w-[55%] h-full">
                                            <Image
                                                src={fw.dark && darkMode ? fw.dark : fw.image}
                                                alt={fw.title}
                                                width={300}
                                                height={300}
                                                className="absolute top-0 left-0 w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="flex flex-col justify-center w-[45%] p-3 bg-transparent">
                                            <h3 className="text-sm font-bold text-black dark:text-white">{fw.title}</h3>
                                            <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{fw.description}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="works">
                <div className="inline-flex items-center justify-center w-full mt-4 mb-14">
                    <hr className="w-80 h-1 my-8 bg-black border-0 rounded dark:bg-white" />
                    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-black">
                        <svg className="w-4 h-4 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                    </div>
                </div>

                {/* Works */}
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">Works</h2>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">Projects I have done.</p>
                    </div>

                    <div className="relative w-full py-6">
                        <div className="flex flex-wrap gap-6 justify-center">
                            {apps.map((app, index) => (
                                <div
                                    className="w-64 md:w-80 lg:w-96 h-auto bg-transparent rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out"
                                    key={index}
                                >
                                    <div className="w-full h-48 md:h-56 rounded-t-3xl relative">
                                        <Image
                                            src={app.image}
                                            alt={app.title}
                                            width={500}
                                            height={500}
                                            className="w-full h-full object-cover rounded-t-3xl"
                                        />
                                        <div
                                            className="absolute top-5 right-5 bg-transparent w-8 h-8 flex items-center justify-center rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-110"
                                            title={app.link === "#" ? "No link available" : ""}
                                        >
                                            {app.link === "#" ? (
                                                <span className="cursor-not-allowed text-black dark:text-white w-4 h-4">
                                                    <Icon icon="fa-link" />
                                                </span>
                                            ) : (
                                                <a
                                                    href={app.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-black dark:text-white w-4 h-4 hover:text-[#62b6ee] dark:hover:text-[#62b6ee]"
                                                >
                                                    <Icon icon="fa-link" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <div className="p-5 flex flex-col justify-between">
                                        <p className="font-semibold text-base text-black dark:text-white">{app.title}</p>
                                        <p className="text-sm text-gray-500">{app.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="inline-flex items-center justify-center w-full mt-4 mb-14">
                    <hr className="w-80 h-1 my-8 bg-black border-0 rounded dark:bg-white" />
                    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-black">
                        <svg className="w-4 h-4 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                    </div>
                </div>

                {/* Contacts */}
                <div className="container mx-auto px-4">
                    <div className="isolate py-1">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">Contact Me</h2>
                            <p className="text-gray-700 dark:text-gray-300 mt-2">For more.</p>
                        </div>
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="mx-auto mt-16 max-w-xl sm:mt-20 space-y-6"
                        >
                            <input
                                type="hidden"
                                name="access_key"
                                value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}
                            />
                            <div className="form__group field">
                                <input
                                    type="text"
                                    className="form__field w-full"
                                    name="sender"
                                    id="sender"
                                    placeholder=""
                                    required
                                />
                                <label htmlFor="sender" className="form__label">
                                    Name
                                </label>
                            </div>
                            <div className="form__group field">
                                <input
                                    type="email"
                                    className="form__field w-full"
                                    name="email"
                                    id="email"
                                    placeholder=""
                                    required
                                />
                                <label htmlFor="email" className="form__label">
                                    Email
                                </label>
                            </div>
                            <div className="form__group field">
                                <textarea
                                    className="form__field w-full"
                                    name="message"
                                    placeholder=""
                                    id="message"
                                    required
                                ></textarea>
                                <label htmlFor="message" className="form__label">
                                    Message
                                </label>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="block w-full rounded-md bg-transparent border-black dark:border-white text-black px-4 py-3 text-center text-sm font-medium dark:text-white hover:bg-gradient-to-r hover:from-transparent hover:to-transparent border hover:border-[#62b6ee] hover:text-[#62b6ee] dark:hover:border-[#62b6ee] dark:hover:text-[#62b6ee] sm:text-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

{/* <div className="group relative w-48 h-64 bg-[#b1a9ae] dark:bg-[#5b5456] flex items-center justify-center overflow-hidden rounded-2xl transition-all duration-300 hover:h-80">
    <div className="absolute w-24 h-[130%] bg-gradient-to-b from-[#e19c4d] via-[#aa362b] to-[#62b6ee] animate-spin-slow rounded-full"></div>
    <div className="relative w-full h-full bg-[#b1a9ae] dark:bg-[#5b5456] inset-1 rounded-[15px] flex flex-col items-center justify-center z-10 overflow-hidden">
        <Image
            src="/resources/images/profile.jpeg"
            alt="Childe"
            className="rounded-[15px] object-cover w-full h-full group-hover:scale-100 transition-transform duration-300"
            width={150}
            height={150}
        />

        <div className="absolute bottom-0 left-0 w-full bg-transparent text-center p-3 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-lg font-white drop-shadow-md">
                Tartaglia
            </h1>
        </div>
    </div>
</div>

<div className="relative w-64 h-64 bg-[#5b5456] dark:bg-gray-800 text-white rounded-2xl p-4 flex flex-col justify-center space-y-4 transition-all duration-300">
    <h2 className="text-lg font-semibold text-center">About Me</h2>
    <p className="text-sm font-light text-justify">
        Nadya, or just Dya. I am a 12th Grade Student in Vocational High School. Majoring in Software Engineering and likes to build or develop applications. A full-stack dev, but i love backend more. I also do Mobile with Flutter. For contacts please check below
    </p>
</div> */}
