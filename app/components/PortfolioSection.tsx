import React from "react";
import UserCards from "./UserCards";

const PortfolioSection = () => {
    return (
        <section
            id="portfolio-showcase"
            className="w-full h-screen relative overflow-x-hidden overflow-y-auto snap-start flex flex-col items-center pt-16"
        >
            {/* Heading and description */}
            <div className="relative z-10 text-center px-4">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Showcase Your Portfolio
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Explore and filter through user-submitted portfolios to find
                    inspiration and see real-world examples crafted by talented
                    developers.
                </p>
            </div>
            {/* User cards grid */}
            <div className="relative z-10 w-full max-w-6xl mt-8">
                <UserCards />
            </div>
        </section>
    );
};

export default PortfolioSection;
