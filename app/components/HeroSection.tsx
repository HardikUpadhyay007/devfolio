"use client";

import React from "react";
import {
    ArrowRight,
    Github,
    Copy,
    Eye,
    Code2,
    Zap,
    Users,
    Star,
} from "lucide-react";
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
        <section className="w-full h-screen text-center relative overflow-hidden px-4 sm:px-6 lg:px-8 flex items-center justify-center transform translate-x-4 snap-start">
            <Navbar theme={theme} />

            <div className="mx-auto max-w-6xl relative z-10">
                {/* Badge */}
                <div className="mb-6 sm:mb-8 md:mb-10 flex justify-center">
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
                        <span className="font-medium">New Devs</span>
                        <Zap className="h-3 w-3 text-orange-500" />
                        <span className="hidden sm:inline-flex items-center">
                            Joining Everyday
                        </span>
                        <ArrowRight className="h-3 w-3" />
                    </div>
                </div>

                {/* Main heading */}
                <div className="mb-6 sm:mb-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-1 sm:mb-3">
                        <span
                            className={`font-medium transition-colors duration-300 ${
                                isPatternDark
                                    ? "text-white"
                                    : "text-gray-900 dark:text-gray-50"
                            }`}
                        >
                            Craft Beautiful
                        </span>
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight">
                        <span
                            className={`bg-gradient-to-r bg-[200%_auto] bg-clip-text leading-tight text-transparent transition-all duration-300 ${
                                isPatternDark
                                    ? "from-neutral-100 via-slate-400 to-neutral-400"
                                    : "from-neutral-900 via-slate-500 to-neutral-500 dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400"
                            }`}
                        >
                            Developer Portfolios
                        </span>
                    </h2>
                </div>

                {/* Description */}
                <p
                    className={`text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed transition-colors duration-300 px-4 sm:px-0 ${
                        isPatternDark
                            ? "text-gray-200"
                            : "text-gray-600 dark:text-gray-200"
                    }`}
                >
                    Professional-grade portfolio templates and components.
                    Easily customize and seamlessly showcase your projects.
                    <span className="block">
                        Crafted with modern React and Tailwind CSS
                    </span>
                </p>

                {/* Feature highlights */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-10 sm:mb-14 max-w-4xl mx-auto px-4 sm:px-0">
                    <div
                        className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 border w-full sm:w-auto ${
                            isPatternDark
                                ? "bg-black/30 border-white/10 hover:bg-black/40"
                                : "bg-white/70 border-gray-200/30 hover:bg-white/80"
                        }`}
                    >
                        <div
                            className={`p-2 rounded-lg transition-colors duration-300 ${
                                isPatternDark
                                    ? "bg-violet-500/20"
                                    : "bg-violet-100"
                            }`}
                        >
                            <Zap
                                className={`h-4 sm:h-5 w-4 sm:w-5 transition-colors duration-300 ${
                                    isPatternDark
                                        ? "text-violet-300"
                                        : "text-violet-600"
                                }`}
                            />
                        </div>
                        <div className="text-left">
                            <h3
                                className={`font-semibold text-sm transition-colors duration-300 ${
                                    isPatternDark
                                        ? "text-white"
                                        : "text-gray-900"
                                }`}
                            >
                                Register & Showcasee
                            </h3>
                            <p
                                className={`text-xs transition-colors duration-300 ${
                                    isPatternDark
                                        ? "text-gray-300"
                                        : "text-gray-600"
                                }`}
                            >
                                Get on the showcase
                            </p>
                        </div>
                    </div>
                    <div
                        className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 border w-full sm:w-auto ${
                            isPatternDark
                                ? "bg-black/30 border-white/10 hover:bg-black/40"
                                : "bg-white/70 border-gray-200/30 hover:bg-white/80"
                        }`}
                    >
                        <div
                            className={`p-2 rounded-lg transition-colors duration-300 ${
                                isPatternDark ? "bg-pink-500/20" : "bg-pink-100"
                            }`}
                        >
                            <Eye
                                className={`h-4 sm:h-5 w-4 sm:w-5 transition-colors duration-300 ${
                                    isPatternDark
                                        ? "text-pink-300"
                                        : "text-pink-600"
                                }`}
                            />
                        </div>
                        <div className="text-left">
                            <h3
                                className={`font-semibold text-sm transition-colors duration-300 ${
                                    isPatternDark
                                        ? "text-white"
                                        : "text-gray-900"
                                }`}
                            >
                                Live Preview
                            </h3>
                            <p
                                className={`text-xs transition-colors duration-300 ${
                                    isPatternDark
                                        ? "text-gray-300"
                                        : "text-gray-600"
                                }`}
                            >
                                See portfolios in action
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
                    <button
                        className={`cursor-pointer gap-2 px-4 sm:px-8 py-3 text-sm sm:text-base font-medium shadow-lg transition-all duration-300 flex-1 sm:flex-none rounded-lg flex items-center justify-center ${
                            isPatternDark
                                ? "bg-white text-black hover:bg-gray-100"
                                : "bg-slate-950 hover:bg-slate-900 dark:bg-white dark:text-black dark:hover:bg-gray-100"
                        }`}
                        onClick={() => {
                            window.open(
                                "https://github.com/your-repo/devfolio#contributing",
                                "_blank"
                            );
                        }}
                    >
                        <Github className="h-4 sm:h-5 w-4 sm:w-5" />
                        Create Your Profile
                    </button>
                    <button
                        className={`cursor-pointer gap-2 px-4 sm:px-8 py-3 text-sm sm:text-base font-medium shadow-lg transition-all duration-300 flex-1 sm:flex-none rounded-lg flex items-center justify-center ${
                            isPatternDark
                                ? "bg-slate-950 text-white hover:bg-slate-900"
                                : "bg-white text-black hover:bg-gray-100"
                        }`}
                        onClick={handleBrowsePortfoliosClick}
                    >
                        <Code2 className="h-4 sm:h-5 w-4 sm:w-5" />
                        Browse Developers
                    </button>
                </div>

                {/* Stats */}
                <div
                    className={`flex items-center justify-center gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-18 pt-6 sm:pt-8 border-t transition-all duration-300 ${
                        isPatternDark
                            ? "border-white/20"
                            : "border-gray-300 dark:border-gray-700"
                    }`}
                >
                    <div className="text-center">
                        <div
                            className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                                isPatternDark ? "text-white" : ""
                            }`}
                        >
                            50+
                        </div>
                        <div
                            className={`text-xs sm:text-sm transition-colors duration-300 ${
                                isPatternDark ? "text-gray-300" : ""
                            }`}
                        >
                            Users
                        </div>
                    </div>
                    <div className="text-center">
                        <div
                            className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                                isPatternDark ? "text-white" : ""
                            }`}
                        >
                            Big
                        </div>
                        <div
                            className={`text-xs sm:text-sm transition-colors duration-300 ${
                                isPatternDark ? "text-gray-300" : ""
                            }`}
                        >
                            Community
                        </div>
                    </div>
                    <div className="text-center">
                        <div
                            className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                                isPatternDark ? "text-white" : ""
                            }`}
                        >
                            Showcase
                        </div>
                        <div
                            className={`text-xs sm:text-sm transition-colors duration-300 ${
                                isPatternDark ? "text-gray-300" : ""
                            }`}
                        >
                            & Grow
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
                <div
                    className={`w-6 h-10 border-2 rounded-full flex items-start justify-center p-1 ${
                        isPatternDark ? "border-gray-400" : "border-gray-600"
                    }`}
                >
                    <div
                        className={`w-2 h-2 bg-gray-400 rounded-full animate-bounce-lower ${
                            isPatternDark ? "" : "bg-gray-600"
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
