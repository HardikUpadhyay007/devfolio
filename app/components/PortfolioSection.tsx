import React from "react";
import UserCards from "./UserCards";
import StatSection from "./StatSection";
import Features from "./Features";

const PortfolioSection = () => {
    return (
        <section
            id="portfolio-showcase"
            className="w-full min-h-screen relative flex flex-col justify-start items-center px-4 py-8"
        >
            {/* Heading and description */}
            <div className="relative z-10 text-center mb-6 sm:mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
                    Featured Developer Profiles
                </h2>
                <p className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
                    Meet talented developers from our community. Join DevFolio
                    to create your own professional profile and connect with
                    peers in the industry.
                </p>
            </div>
            {/* User cards grid */}
            <div className="relative z-10 w-full max-w-6xl">
                <UserCards />
            </div>

            {/* Statistics Section */}
            <StatSection />

            {/* Features Section */}
            <Features />
        </section>
    );
};

export default PortfolioSection;
