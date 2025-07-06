"use client";
import React from "react";

export default function Features() {
    return (
        <div className="w-full py-16">
            {/* Feature Intro */}
            <div className="text-center mb-16">
                <div className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium mb-6">
                    POWERFUL FEATURES
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                    Everything You Need to Stand Out
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto px-4">
                    Create stunning developer portfolios with professional
                    templates, powerful customization tools, and seamless
                    integrations.
                    <br />
                    Join thousands of developers showcasing their best work
                </p>
            </div>

            {/* Bento Grid */}
            <div className="max-w-7xl mx-auto px-4 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Large Card - Professional Templates */}
                    <div className="lg:col-span-2 bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300">
                        <div className="mb-6">
                            <div className="text-3xl mb-4">🎨</div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Professional Templates
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Choose from a curated collection of modern,
                                responsive portfolio templates. Each design is
                                crafted specifically for developers to showcase
                                projects, skills, and experience in the best
                                light.
                            </p>
                        </div>
                        {/* Mock Portfolio Interface */}
                        <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-600/30">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="text-xs text-gray-500">
                                    Portfolio Preview
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded w-3/4"></div>
                                <div className="h-2 bg-gray-700 rounded w-1/2"></div>
                                <div className="h-2 bg-gray-700 rounded w-2/3"></div>
                                <div className="flex space-x-2 mt-3">
                                    <div className="w-8 h-6 bg-blue-500/30 rounded"></div>
                                    <div className="w-8 h-6 bg-green-500/30 rounded"></div>
                                    <div className="w-8 h-6 bg-purple-500/30 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Synergistic Analytics */}
                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300">
                        <div className="mb-6">
                            <div className="text-3xl mb-4">�</div>
                            <h3 className="text-xl font-bold text-white mb-4">
                                Portfolio Analytics
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Track visitor engagement, project views, and
                                contact form submissions. Get insights into
                                which projects resonate most with potential
                                employers and clients.
                            </p>
                        </div>
                        {/* Mock Chart */}
                        <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-600/30">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 bg-gray-700 rounded w-full"></div>
                                <div className="h-2 bg-gray-700 rounded w-4/5"></div>
                                <div className="h-2 bg-gray-700 rounded w-3/5"></div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row - Three Equal Cards */}
                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/50 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300">
                        <div className="mb-4">
                            <div className="text-2xl mb-3">🚀</div>
                            <h3 className="text-lg font-bold text-white mb-3">
                                One-Click Deploy
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Deploy your portfolio instantly to custom
                                domains or popular hosting platforms. No
                                technical setup required - just click and go
                                live.
                            </p>
                        </div>
                        {/* Mock Deployment Interface */}
                        <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-600/30">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center space-x-1">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-xs text-gray-400">
                                        Live
                                    </span>
                                </div>
                                <div className="text-xs text-green-400">
                                    Deployed
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="h-1.5 bg-gradient-to-r from-green-500 to-blue-500 rounded w-full"></div>
                                <div className="h-1.5 bg-gray-700 rounded w-3/4"></div>
                                <div className="h-1.5 bg-gray-700 rounded w-1/2"></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/50 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300">
                        <div className="mb-4">
                            <div className="text-2xl mb-3">⚡</div>
                            <h3 className="text-lg font-bold text-white mb-3">
                                Smart Integrations
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Connect your GitHub repositories, LinkedIn
                                profile, and other developer platforms.
                                Automatically sync your latest projects and
                                achievements.
                            </p>
                        </div>
                        {/* Mock Integration Interface */}
                        <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-600/30">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center space-x-1">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span className="text-xs text-gray-400">
                                        GitHub
                                    </span>
                                </div>
                                <div className="text-xs text-blue-400">
                                    Connected
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded w-full"></div>
                                <div className="h-1.5 bg-gradient-to-r from-blue-500 to-green-500 rounded w-3/4"></div>
                                <div className="h-1.5 bg-gray-700 rounded w-1/2"></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/50 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300">
                        <div className="mb-4">
                            <div className="text-2xl mb-3">🌐</div>
                            <h3 className="text-lg font-bold text-white mb-3">
                                SEO Optimized
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Built with SEO best practices to help recruiters
                                and clients find you. Optimized meta tags,
                                structured data, and fast loading speeds.
                            </p>
                        </div>
                        {/* Mock SEO Interface */}
                        <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-600/30">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center space-x-1">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-xs text-gray-400">
                                        SEO Score
                                    </span>
                                </div>
                                <div className="text-xs text-green-400">
                                    98/100
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded w-full"></div>
                                <div className="h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded w-4/5"></div>
                                <div className="h-1.5 bg-gray-700 rounded w-3/5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    Ready to Showcase Your Work?
                </h3>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto px-4">
                    Join thousands of developers who are already using DevFolio
                    to showcase their skills and land their dream jobs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                        Get Started Free
                    </button>
                    <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                        View Templates
                    </button>
                </div>
            </div>
        </div>
    );
}
