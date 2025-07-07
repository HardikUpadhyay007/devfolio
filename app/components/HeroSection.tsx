"use client";

import React from "react";
import { ArrowRight, Github, Eye, Zap } from "lucide-react";
import Navbar from "./Navbar";

interface HeroProps {
    activePattern?: string | null;
    setActivePattern?: (pattern: string | null) => void;
    theme?: "light" | "dark";
}

const handleBrowsePortfoliosClick = () => {
    document.getElementById("portfolio-showcase")?.scrollIntoView({
        behavior: "smooth",
    });
};

export const HeroSection = ({ theme = "dark" }: HeroProps) => {
    const isPatternDark = theme === "dark";

    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
            <Navbar />

            <div className="mx-auto max-w-6xl relative z-10 flex flex-col items-center w-full">
                {/* Badge */}
                <div className="mb-6 sm:mb-8 md:mb-10 w-full flex justify-center">
                    <div
                        className={`gap-2 py-2 px-3 sm:px-4 text-xs sm:text-sm rounded-full shadow-lg backdrop-blur-md transition-all duration-300 border inline-flex items-center ${
                            isPatternDark
                                ? "bg-black/40 border-white/20 text-white hover:bg-black/50"
                                : "bg-white/80 border-gray-200/50 text-gray-900 hover:bg-white/90"
                        }`}
                    >
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </div>
                        <span className="font-medium">New Developers</span>
                        <Zap className="h-3 w-3 text-orange-500" />
                        <span className="hidden sm:inline-flex items-center">
                            Joining
                        </span>
                        <ArrowRight className="h-3 w-3" />
                    </div>
                </div>

                {/* Main heading */}
                <div className="mb-6 sm:mb-8 w-full px-2">
                    <h1
                        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 sm:mb-3 ${
                            isPatternDark
                                ? "text-white"
                                : "text-gray-900 dark:text-gray-50"
                        }`}
                    >
                        Join the Platform &
                    </h1>
                    <h2
                        className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r bg-[200%_auto] bg-clip-text text-transparent ${
                            isPatternDark
                                ? "from-neutral-100 via-slate-400 to-neutral-400"
                                : "from-neutral-900 via-slate-500 to-neutral-500 dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400"
                        }`}
                    >
                        Showcase Your Skills
                    </h2>
                </div>

                {/* Description */}
                <p
                    className={`text-sm sm:text-lg mb-8 max-w-md sm:max-w-2xl mx-auto leading-relaxed transition-colors duration-300 px-2 ${
                        isPatternDark
                            ? "text-gray-200"
                            : "text-gray-600 dark:text-gray-200"
                    }`}
                >
                    Create your developer profile, showcase your work, and get
                    discovered.
                    <span className="block mt-2 text-yellow-400 font-medium">
                        Go Premium for golden visibility ✨
                    </span>
                </p>

                {/* Feature highlights */}
                <div className="flex flex-col sm:flex-row justify-center items-center w-full max-w-sm sm:max-w-xl gap-3 sm:gap-6 mb-8 sm:mb-14">
                    <div
                        className={`flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 border w-full sm:w-auto ${
                            isPatternDark
                                ? "bg-black/30 border-white/10 hover:bg-black/40"
                                : "bg-white/70 border-gray-200/30 hover:bg-white/80"
                        }`}
                    >
                        <div
                            className={`p-1.5 sm:p-2 rounded-lg ${
                                isPatternDark
                                    ? "bg-violet-500/20"
                                    : "bg-violet-100"
                            }`}
                        >
                            <Zap
                                className={`h-4 sm:h-5 sm:ml-6 w-4 sm:w-5 ${
                                    isPatternDark
                                        ? "text-violet-300"
                                        : "text-violet-600"
                                }`}
                            />
                        </div>
                        <div className="text-center flex-1">
                            <h3
                                className={`font-semibold text-xs sm:text-base ${
                                    isPatternDark
                                        ? "text-white"
                                        : "text-gray-900"
                                }`}
                            >
                                Join & Showcase
                            </h3>
                            <p
                                className={`text-xs sm:text-sm ${
                                    isPatternDark
                                        ? "text-gray-300"
                                        : "text-gray-600"
                                }`}
                            >
                                Build your profile
                            </p>
                        </div>
                    </div>
                    <div
                        className={`flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 border w-full sm:w-auto ${
                            isPatternDark
                                ? "bg-black/30 border-white/10 hover:bg-black/40"
                                : "bg-white/70 border-gray-200/30 hover:bg-white/80"
                        }`}
                    >
                        <div
                            className={`p-1.5 sm:p-2 rounded-lg ${
                                isPatternDark ? "bg-pink-500/20" : "bg-pink-100"
                            }`}
                        >
                            <Eye
                                className={`h-4 sm:h-5 w-4 sm:w-5 ${
                                    isPatternDark
                                        ? "text-pink-300"
                                        : "text-pink-600"
                                }`}
                            />
                        </div>
                        <div className="text-center flex-1">
                            <h3
                                className={`font-semibold text-xs sm:text-base ${
                                    isPatternDark
                                        ? "text-white"
                                        : "text-gray-900"
                                }`}
                            >
                                Premium
                            </h3>
                            <p
                                className={`text-xs sm:text-sm ${
                                    isPatternDark
                                        ? "text-gray-300"
                                        : "text-gray-600"
                                }`}
                            >
                                Stand out with gold
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center w-full max-w-md gap-4 sm:gap-6">
                    <button
                        className={`cursor-pointer gap-2 px-6 py-4 text-base font-medium shadow-lg transition-all duration-300 rounded-lg flex items-center justify-center w-full sm:w-auto ${
                            isPatternDark
                                ? "bg-white text-black hover:bg-gray-100"
                                : "bg-slate-950 hover:bg-slate-900 dark:bg-white dark:text-black dark:hover:bg-gray-100"
                        }`}
                        onClick={() => (window.location.href = "/register")}
                    >
                        <Github className="h-5 w-5" />
                        Join Now
                    </button>
                    <button
                        className={`cursor-pointer gap-2 px-6 py-4 text-base font-medium shadow-lg transition-all duration-300 rounded-lg flex items-center justify-center w-full sm:w-auto ${
                            isPatternDark
                                ? "bg-slate-950 text-white hover:bg-slate-900"
                                : "bg-white text-black hover:bg-gray-100"
                        }`}
                        onClick={handleBrowsePortfoliosClick}
                    >
                        <Eye className="h-5 w-5" />
                        Browse Profiles
                    </button>
                </div>

                {/* Rolling ticker */}
                <div className="w-full py-6 overflow-hidden mt-8 sm:mt-12">
                    <div className="flex animate-marquee whitespace-nowrap">
                        <span className="text-white text-lg sm:text-2xl font-bold tracking-wide">
                            50+ Users&nbsp;&bull;&nbsp;Big
                            Community&nbsp;&bull;&nbsp;Showcase &
                            Grow&nbsp;&bull;&nbsp;
                        </span>
                        <span className="text-white text-lg sm:text-2xl font-bold tracking-wide ml-6">
                            50+ Users&nbsp;&bull;&nbsp;Big
                            Community&nbsp;&bull;&nbsp;Showcase &
                            Grow&nbsp;&bull;&nbsp;
                        </span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
                <div
                    className={`w-6 h-10 border-2 rounded-full flex items-start justify-center p-1 ${
                        isPatternDark ? "border-gray-400" : "border-gray-600"
                    }`}
                >
                    <div
                        className={`w-2 h-2 rounded-full animate-bounce-lower ${
                            isPatternDark ? "bg-gray-400" : "bg-gray-600"
                        }`}
                    ></div>
                </div>
                <span
                    className={`mt-2 text-sm ${
                        isPatternDark ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                    Scroll Down
                </span>
            </div>
        </section>
    );
};
