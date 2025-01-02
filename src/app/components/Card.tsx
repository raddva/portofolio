"use client";

import Image from 'next/image';
import React from 'react';

const Card = () => {
    return (
        <div className="p-10">
            <div className="relative w-72 h-48 rounded-lg flex items-center justify-center overflow-hidden transition-transform duration-500 hover:rotate-[-5deg] hover:scale-110 hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-gray-800">
                <Image
                    src="/resources/images/square.jpeg"
                    alt="Hello"
                    width={800}
                    height={500}
                    className="absolute w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 w-full h-full p-10 bg-white dark:bg-black transform translate-x-[-50%] translate-y-[-50%] rotate-[-45deg] opacity-0 transition-transform duration-500 hover:rotate-0 hover:opacity-100">
                    <p className="m-0 text-lg font-bold text-black dark:text-white">Nadyaa-!</p>
                    <p className="mt-2 text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                        Helloo! I am Nadya, a Full-stack Software Developer.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;