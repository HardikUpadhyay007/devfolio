"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="absolute inset-x-0 top-0 z-50 mx-auto flex h-20 w-full max-w-7xl items-center gap-6 px-6">
            <a href="#" className="inline-flex flex-1 items-center gap-2">
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="30" height="30" rx="15" fill="#3b82f6"></rect>
                    <path
                        d="M10.4711 7.01068C10.5216 7.0099 10.5216 7.0099 10.5731 7.00911C10.6442 7.00823 10.7154 7.00758 10.7865 7.00713C10.8937 7.00612 11.0007 7.00329 11.1079 7.00043C11.6456 6.99271 12.0067 7.08756 12.4255 7.44291C12.7448 7.82762 12.8091 8.25023 12.8085 8.73545C12.8087 8.77423 12.8088 8.813 12.8089 8.85295C12.8092 8.98284 12.8092 9.11273 12.8093 9.24261C12.8095 9.33576 12.8097 9.42892 12.8099 9.52207C12.8103 9.72268 12.8106 9.92328 12.8109 10.1239C12.8112 10.4412 12.812 10.7586 12.8129 11.076C12.8131 11.1846 12.8134 11.2933 12.8137 11.402C12.8138 11.4292 12.8138 11.4563 12.8139 11.4843C12.8147 11.7933 12.8154 12.1022 12.8161 12.4112C12.8162 12.4394 12.8162 12.4677 12.8163 12.4968C12.8173 12.954 12.818 13.4113 12.8186 13.8685C12.8193 14.3385 12.8204 14.8085 12.8218 15.2785C12.8227 15.568 12.8232 15.8576 12.8233 16.1472C12.8234 16.3694 12.8241 16.5916 12.825 16.8137C12.8252 16.9046 12.8253 16.9955 12.8252 17.0864C12.825 17.2108 12.8256 17.3352 12.8263 17.4597C12.8261 17.4953 12.8259 17.531 12.8257 17.5678C12.8329 18.2964 13.2017 18.9895 13.7102 19.494C14.2354 19.9952 14.8751 20.2336 15.5973 20.2259C15.659 20.2266 15.659 20.2266 15.7221 20.2272C16.47 20.2246 17.1213 19.9014 17.6622 19.3983C18.2119 18.8372 18.4449 18.0783 18.4456 17.3074C18.4338 16.6138 18.1108 15.9463 17.6383 15.4451C17.2443 15.0743 16.7516 14.8167 16.2302 14.6797C16.0158 14.6174 15.8688 14.515 15.7447 14.3278C15.6057 14.0516 15.6154 13.7697 15.6173 13.4681C15.6172 13.4117 15.6171 13.3552 15.6169 13.2987C15.6167 13.1809 15.617 13.0631 15.6177 12.9453C15.6186 12.7949 15.6181 12.6445 15.6172 12.494C15.6166 12.3776 15.6168 12.2612 15.6172 12.1448C15.6173 12.0893 15.6172 12.0339 15.6168 11.9784C15.6151 11.6358 15.6242 11.4032 15.8615 11.1397C16.0969 10.9378 16.2675 10.8673 16.5821 10.8807C16.6942 10.9003 16.8031 10.9286 16.9128 10.9586C16.9439 10.967 16.975 10.9754 17.0071 10.9841C17.5729 11.1416 18.1065 11.3566 18.6227 11.6362C18.663 11.658 18.7034 11.6798 18.745 11.7022C19.1817 11.9474 19.5636 12.255 19.9244 12.6001C19.9641 12.6381 20.004 12.6759 20.044 12.7135C20.3691 13.0193 20.6404 13.3442 20.8899 13.714C20.9294 13.772 20.9294 13.772 20.9696 13.8312C21.6496 14.8835 22.0027 16.09 21.9999 17.3383C22 17.3843 22 17.3843 22 17.4312C21.9992 17.9309 21.9576 18.4036 21.8346 18.8895C21.8211 18.9488 21.8211 18.9488 21.8073 19.0092C21.7825 19.1096 21.7535 19.2068 21.7213 19.3051C21.7136 19.3286 21.7059 19.352 21.698 19.3762C21.1444 21.0474 20.0223 22.482 18.4337 23.2812C18.1503 23.42 17.8596 23.5377 17.5646 23.6495C17.5286 23.6639 17.4925 23.6782 17.4554 23.693C17.1828 23.7986 16.9073 23.8624 16.6199 23.9139C16.5767 23.9218 16.5335 23.9296 16.489 23.9377C16.1527 23.989 15.8191 23.9973 15.4792 23.9989C15.4132 23.9995 15.4132 23.9995 15.3459 24C13.633 23.9938 12.0508 23.1425 10.8664 21.9512C10.0964 21.1563 9.54066 20.1475 9.24183 19.0855C9.23298 19.0547 9.22413 19.0239 9.21502 18.9921C9.03303 18.3114 9.0077 17.6312 9.00868 16.9305C9.0084 16.8348 9.00807 16.739 9.00771 16.6432C9.00696 16.4121 9.00674 16.1809 9.00681 15.9498C9.00686 15.7618 9.00671 15.5738 9.00643 15.3858C9.00557 14.7932 9.00536 14.2005 9.00566 13.6078C9.00587 13.1415 9.00508 12.6751 9.00383 12.2088C9.00256 11.7282 9.00198 11.2477 9.00216 10.7672C9.00224 10.498 9.00205 10.2289 9.0011 9.95978C9.00022 9.70699 9.00033 9.45422 9.0011 9.20144C9.00123 9.10891 9.00104 9.01638 9.0005 8.92385C8.99727 8.33059 8.99705 7.85589 9.43091 7.4041C9.74288 7.13019 10.0618 7.01633 10.4711 7.01068Z"
                        fill="white"
                    ></path>
                </svg>
                <span className="text-2xl font-bold tracking-tight text-white">
                    DevFolio
                </span>
            </a>

            <div className="hidden flex-1 justify-end gap-2 lg:inline-flex">
                <a
                    href="/browse"
                    className="px-4 py-2 bg-transparent text-white rounded-md font-medium hover:bg-gray-700 transition cursor-pointer"
                >
                    Browse Profiles
                </a>
                <button
                    className="px-4 py-2 bg-transparent text-white rounded-md font-medium hover:bg-gray-700 transition cursor-pointer"
                    onClick={() => (window.location.href = "/login")} // Navigate to login
                >
                    Sign In
                </button>
                <button
                    className="px-4 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-100 transition cursor-pointer"
                    onClick={() => (window.location.href = "/register")} // Navigate to register
                >
                    Join DevFolio
                </button>
            </div>

            <div className="ml-auto lg:hidden">
                <button
                    className="p-2 border border-gray-600 rounded-md text-white cursor-pointer hover:bg-gray-700 transition"
                    aria-label="Open Menu"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Menu className="w-5 h-5" />
                </button>

                {/* Mobile dropdown menu */}
                {isOpen && (
                    <div className="absolute top-full right-6 mt-2 bg-gray-800 rounded-md shadow-lg flex flex-col gap-2 p-4 min-w-[180px]">
                        <a
                            href="/browse"
                            className="px-4 py-2 bg-transparent text-white rounded-md font-medium hover:bg-gray-700 transition cursor-pointer text-left"
                        >
                            Browse Profiles
                        </a>
                        <button
                            className="px-4 py-2 bg-transparent text-white rounded-md font-medium hover:bg-gray-700 transition cursor-pointer text-left"
                            onClick={() => (window.location.href = "/login")} // Navigate to login
                        >
                            Sign In
                        </button>
                        <button
                            className="px-4 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-100 transition cursor-pointer text-left"
                            onClick={() => (window.location.href = "/register")} // Navigate to register
                        >
                            Join DevFolio
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
