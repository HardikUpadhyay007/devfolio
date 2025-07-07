import React from "react";
import Link from "next/link";
import { Github } from "lucide-react";

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center p-4">
            <div className="absolute inset-0 z-0">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#0000000f)]"></div>
            </div>
            <div className="w-full max-w-md bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-8 z-10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold tracking-tight mb-2">
                        Welcome Back
                    </h1>
                    <p className="text-gray-400">
                        Sign in to access your DevFolio account.
                    </p>
                </div>
                <form className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="ada.lovelace@example.com"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-white text-black font-bold py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                    >
                        Sign In
                    </button>
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-600"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-[#111827] px-2 text-gray-400">
                                OR
                            </span>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="w-full bg-[#24292e] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#333a41] transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                        <Github className="w-5 h-5" />
                        Sign In with GitHub
                    </button>
                </form>
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-400">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/register"
                            className="font-medium text-blue-400 hover:text-blue-300"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
