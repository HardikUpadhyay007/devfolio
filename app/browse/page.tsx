import React from "react";
import UserCards from "../components/UserCards";
import Navbar from "../components/Navbar";

export default function BrowsePage() {
    return (
        <div className="min-h-screen w-full bg-[#0f172a] relative">
            {/* Navy Blue Aesthetic Grid Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
        linear-gradient(to right, rgba(30, 58, 138, 0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(30, 58, 138, 0.3) 1px, transparent 1px),
        radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.1) 0%, rgba(29, 78, 216, 0.05) 50%, transparent 80%)
      `,
                    backgroundSize: "40px 40px, 40px 40px, 100% 100%",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 90% 90% at 80% 20%, #000 40%, transparent 85%)",
                    maskImage:
                        "radial-gradient(ellipse 90% 90% at 80% 20%, #000 40%, transparent 85%)",
                }}
            />

            <main className="relative z-10">
                <Navbar />

                <section className="w-full min-h-screen relative flex flex-col justify-start items-center px-4 py-24">
                    {/* Header */}
                    <div className="relative z-10 text-center mb-8 max-w-4xl">
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                            Browse Developer Profiles
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Discover talented developers on DevFolio. Connect
                            with professionals, explore their work, and find
                            inspiration for your next project.
                        </p>

                        {/* Filter/Search Bar Placeholder */}
                        <div className="mt-8 max-w-md mx-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search developers by name, role, or location..."
                                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                />
                                <svg
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* User profiles grid */}
                    <div className="relative z-10 w-full max-w-6xl">
                        <UserCards />
                    </div>

                    {/* Premium CTA */}
                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
                            <div className="flex items-center justify-center mb-4">
                                <span className="text-2xl mr-2">✨</span>
                                <h3 className="text-2xl font-bold text-white">
                                    Stand Out with Premium
                                </h3>
                            </div>
                            <p className="text-gray-300 mb-6">
                                Upgrade to premium and get a golden-outlined
                                profile card that catches attention and
                                increases your visibility to potential
                                collaborators and employers.
                            </p>
                            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-8 py-3 rounded-xl hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105">
                                Upgrade to Premium
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
