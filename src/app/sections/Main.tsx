"use client";

import React, { FormEvent, useRef } from "react";
import Image from "next/image";
import { Icon } from '@iconify/react';
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export default function Main() {
    const frameworks = [
        { id: 1, image: '/resources/logo/bootstrap.png', title: 'Bootstrap', description: 'CSS Framework', link: 'https://getbootstrap.com/' },
        { id: 2, image: '/resources/logo/codeigniter.svg', title: 'Codeigniter 4', description: 'PHP Framework', link: 'https://www.codeigniter.com/' },
        { id: 3, image: '/resources/logo/laravel.png', title: 'Laravel', description: 'PHP Framework', link: 'https://laravel.com/' },
        { id: 4, image: '/resources/logo/angular.png', title: 'Angular', description: 'Javascript Framework', link: 'https://angular.dev/' },
        { id: 5, image: '/resources/logo/next-js.svg', title: 'NextJS', description: 'ReactJS Framework', link: 'https://nextjs.org/' },
        { id: 6, image: '/resources/logo/tailwindcss.png', title: 'Tailwind CSS', description: 'CSS Framework', link: 'https://tailwindcss.com/' },
        { id: 7, image: '/resources/logo/flutter.png', title: 'Flutter', description: 'Dart Framework for Mobile Applications', link: 'https://flutter.dev/' },
        { id: 7, image: '/resources/logo/react-js.png', title: 'ReactJS', description: 'Javascript Framework', link: 'https://react.dev/' },
    ];

    const languages = [
        { id: 1, image: '/resources/logo/javascript.png', title: 'Javascript', description: 'JS', link: 'https://www.w3schools.com/js/' },
        { id: 2, image: '/resources/logo/php.png', title: 'PHP', description: 'PHP', link: 'https://www.w3schools.com/php/' },
        { id: 3, image: '/resources/logo/typescript.svg', title: 'Typescript', description: 'JS but Cooler', link: 'https://www.w3schools.com/typescript/' },
        { id: 4, image: '/resources/logo/python.png', title: 'Python', description: 'Snake', link: 'https://www.w3schools.com/python/' },
        { id: 5, image: '/resources/logo/dart.png', title: 'Dart', description: 'Dart', link: 'https://dart.dev/' },
    ];

    const apps = [
        { id: 1, image: '/resources/works/elibrary.png', title: 'E-Library Book Rent App', description: 'Mobile App - Flutter Dart', link: '#' },
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
            {/* Home */}
            <section id="home">
                <div className="container flex justify-evenly items-center w-full h-full mx-auto">
                    <div className="relative flex-shrink-0">
                        <div className="w-96 h-96 relative z-10">
                            <Image
                                src="/resources/images/lead.png"
                                alt="Nadya"
                                className="object-cover w-full h-full rounded-full hover:drop-shadow-[0_5px_10px_#b1a9ae] dark:hover:drop-shadow-[0_5px_10px_#5b5456]"
                                width={350}
                                height={350}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center text-start ml-6 space-y-2">
                        <h5 className="text-2xl sm:text-2xl font-bold text-black dark:text-gray-100">
                            Hello,
                        </h5>
                        <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-gray-100 flex items-center">
                            I am
                            <span
                                className="ml-2 text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00bcf2] to-[#00b294] animate-typing border-r-2 border-white whitespace-nowrap overflow-hidden"
                            >
                                Nadya.
                            </span>
                        </h2>
                        <h4 className="text-2xl sm:text-3xl font-bold text-black dark:text-gray-100">
                            a
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 ml-1 mr-1">
                                full-stack
                            </span>
                            developer.
                        </h4>
                    </div>
                </div>
            </section>

            <section id="about">
                <div className="inline-flex items-center justify-center w-full mt-32 mb-28">
                    <hr className="w-80 h-1 my-8 bg-black border-0 rounded dark:bg-white" />
                    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-black">
                        <svg className="w-4 h-4 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                    </div>
                </div>

                {/* About */}
                <div className="container mx-auto flex justify-evenly items-center">
                    <div className="relative flex-shrink-0">
                        <div className="group relative w-48 h-64 bg-[#b1a9ae] dark:bg-[#5b5456] flex items-center justify-center overflow-hidden rounded-full transition-all duration-300 hover:h-80">
                            <div className="absolute w-24 h-[130%] bg-gradient-to-b from-[#e19c4d] via-[#aa362b] to-[#62b6ee] animate-spin-slow rounded-full"></div>
                            <div className="relative w-full h-full bg-[#b1a9ae] dark:bg-[#5b5456] inset-1 rounded-full flex flex-col items-center justify-center z-10 overflow-hidden">
                                <Image
                                    src="/resources/images/profile.jpeg"
                                    alt="Childe"
                                    className="rounded-full object-cover w-full h-full group-hover:scale-100 transition-transform duration-300"
                                    width={150}
                                    height={150}
                                />

                                <div className="absolute bottom-0 left-0 w-full bg-transparent text-center p-3 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h1 className="text-white drop-shadow-md">Asdya.</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center max-w-lg text-start pl-10">
                        <h3 className="text-3xl sm:text-4xl font-bold text-black dark:text-gray-100 mb-4">
                            About Me!
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Passionated in both front-end and back-end development, capable of building complete web applications from beginning to end.
                            Work on client-facing interfaces, ensuring a seamless user experience, while also managing server-side logic, databases, and application architecture to maintain robust functionality.
                            Proficient in various programming languages, frameworks, and tools, full-stack developers bridge the gap between design and engineering.
                            The ability to adapt to evolving technologies and collaborate across disciplines makes them essential for delivering comprehensive and efficient digital solutions.
                        </p>
                    </div>
                </div>

                <div className="mx-auto flex justify-evenly items-center">
                    <div className="flex justify-center items-center bg-transparent p-4 rounded-full">
                        <a
                            target="_blank"
                            href="https://github.com/raddva"
                            className="flex justify-center items-center w-12 h-12 bg-transparent text-black dark:text-white rounded-full mx-2 shadow hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                        >
                            <Icon icon="fa-brands:github" className="text-2xl" />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/radiva"
                            className="flex justify-center items-center w-12 h-12 bg-transparent text-[#0a66c2] rounded-full mx-2 shadow hover:bg-[#0a66c2] hover:text-white transition"
                        >
                            <Icon icon="fa-brands:linkedin" className="text-2xl" />
                        </a>
                        {/* <a
                        target="_blank"
                        href="https://www.facebook.com/raddva"
                        className="flex justify-center items-center w-12 h-12 bg-blue-500 text-white rounded-full mx-2 shadow hover:bg-gray-200 hover:text-blue-500 transition"
                    >
                        <Icon icon="fa-brands:facebook" className="text-2xl" />
                    </a> */}
                        <a
                            target="_blank"
                            href="https://www.instagram.com/raddva"
                            className="flex justify-center items-center w-12 h-12 bg-transparent text-[#C13584] rounded-full mx-2 shadow hover:bg-[#C13584] hover:text-white transition"
                        >
                            <Icon icon="fa-brands:instagram" className="text-2xl" />
                        </a>
                        <a
                            target="_blank"
                            href="https://discord.com/users/760506230677569586"
                            className="flex justify-center items-center w-12 h-12 bg-transparent text-[#7289da] rounded-full mx-2 shadow hover:text-white hover:bg-[#7289da] transition"
                        >
                            <Icon icon="fa-brands:discord" className="text-2xl" />
                        </a>
                        {/* <a
                        target="_blank"
                        href="https://gitlab.com/asdya"
                        className="flex justify-center items-center w-12 h-12 bg-transparent text-[#fca326] rounded-full mx-2 shadow hover:text-white hover:bg-[#fca326] transition"
                    >
                        <Icon icon="fa-brands:gitlab" className="text-2xl" />
                    </a> */}
                        {/* <a
                        target="_blank"
                        href="https://x.com/letneaa"
                        className="flex justify-center items-center w-12 h-12 bg-transparent text-black dark:text-white rounded-full mx-2 shadow hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                    >
                        <Icon icon="fa-brands:twitter" className="text-2xl" />
                    </a> */}
                    </div>
                </div>
            </section>

            <section id="skills">
                <div className="inline-flex items-center justify-center w-full mt-28 mb-14">
                    <hr className="w-80 h-1 my-8 bg-black border-0 rounded dark:bg-white" />
                    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-black">
                        <svg className="w-4 h-4 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                    </div>
                </div>

                {/* Skills */}
                <div className="container mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Skills</h2>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                            Some programming languages and frameworks I excel in.
                        </p>
                    </div>

                    <div className="relative w-full py-6">
                        {/* fade */}
                        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none z-10" />
                        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none z-10" />
                        <div className="overflow-hidden">
                            <div
                                className="flex space-x-4 animate-scroll-left"
                                style={{ width: `${languages.length * 320 * 2}px` }}
                            >
                                {[...languages, ...languages].map((lang, index) => (
                                    <a
                                        href={lang.link}
                                        target="_blank"
                                        key={index}
                                        className="relative w-[320px] h-[150px] rounded-lg flex items-center justify-center overflow-hidden transition-transform duration-500 hover:scale-110 hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-gray-800"
                                    >
                                        <Image
                                            src={lang.image}
                                            alt={lang.title}
                                            width={800}
                                            height={500}
                                            className="absolute w-full h-full object-cover"
                                        />
                                        <div className="absolute top-1/2 left-1/2 w-full h-full p-10 bg-white dark:bg-black transform translate-x-[-50%] translate-y-[-50%] opacity-0 transition-transform duration-500 hover:rotate-0 hover:opacity-100">
                                            <p className="m-0 text-lg font-bold text-black dark:text-white">
                                                {lang.title}
                                            </p>
                                            <p className="mt-2 text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                                                {lang.description}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="overflow-hidden mt-8">
                            <div
                                className="flex space-x-4 animate-scroll-right"
                                style={{ width: `${frameworks.length * 2 * 320}px` }}
                            >
                                {[...frameworks, ...frameworks].map((fw, index) => (
                                    <a
                                        href={fw.link}
                                        target="_blank"
                                        key={index}
                                        className="relative w-[320px] h-[150px] rounded-lg flex items-center justify-center overflow-hidden transition-transform duration-500 hover:scale-110 hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-gray-800"
                                    >
                                        <Image
                                            src={fw.image}
                                            alt={fw.title}
                                            width={800}
                                            height={500}
                                            className="absolute w-full h-full object-cover"
                                        />
                                        <div className="absolute top-1/2 left-1/2 w-full h-full p-10 bg-white dark:bg-black transform translate-x-[-50%] translate-y-[-50%] opacity-0 transition-transform duration-500 hover:rotate-0 hover:opacity-100">
                                            <p className="m-0 text-lg font-bold text-black dark:text-white">
                                                {fw.title}
                                            </p>
                                            <p className="mt-2 text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                                                {fw.description}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="works">
                <div className="inline-flex items-center justify-center w-full mt-28 mb-14">
                    <hr className="w-80 h-1 my-8 bg-black border-0 rounded dark:bg-white" />
                    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-black">
                        <svg className="w-4 h-4 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                    </div>
                </div>

                {/* Works */}
                <div className="container mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Works</h2>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                            Projects i have done.
                        </p>
                    </div>

                    <div className="relative w-full py-6">
                        <div className="flex space-x-4" style={{ width: `${apps.length * 2 * 320}px` }}>
                            {apps.map((app, index) => (
                                <div
                                    className="w-64 h-72 bg-transparent rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out"
                                    key={index}
                                >
                                    <div className="w-full h-full rounded-t-3xl relative">
                                        <Image
                                            src={app.image}
                                            alt={app.title}
                                            width={500}
                                            height={500}
                                            className="w-full h-full object-cover rounded-t-3xl"
                                        />
                                        <div
                                            className="absolute top-5 right-5 bg-transparent w-8 h-8 flex items-center justify-center rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-110"
                                            title={app.link == "#" ? "No link available" : ""}
                                        >
                                            {app.link == "#" ? (
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

            <section id="contacts">
                <div className="inline-flex items-center justify-center w-full mt-28 mb-14">
                    <hr className="w-80 h-1 my-8 bg-black border-0 rounded dark:bg-white" />
                    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-black">
                        <svg className="w-4 h-4 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                    </div>
                </div>

                {/* Contacts */}
                <div className="container mx-auto">
                    <div className="isolate py-1">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-balance text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">
                                Contact me
                            </h2>
                            <p className="mt-2 text-lg text-black dark:text-white">For more.</p>
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
                                    className="form__field"
                                    placeholder="Your Name"
                                    name="sender"
                                    id="sender"
                                    required
                                />
                                <label htmlFor="sender" className="form__label">
                                    Name
                                </label>
                            </div>
                            <div className="form__group field">
                                <input
                                    type="email"
                                    className="form__field"
                                    placeholder="Your Email"
                                    name="email"
                                    id="email"
                                    required
                                />
                                <label htmlFor="email" className="form__label">
                                    Email
                                </label>
                            </div>
                            <div className="form__group field">
                                <textarea
                                    className="form__field"
                                    placeholder="Your Message"
                                    name="message"
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
                                    className="block w-full rounded-md bg-gradient-to-r from-[#62b6ee] to-[#38caef] px-4 py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-gradient-to-r hover:from-transparent hover:to-transparent hover:border hover:border-[#62b6ee] hover:text-[#62b6ee] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#62b6ee]"
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
