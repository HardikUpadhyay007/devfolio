import Link from "next/link";
// import { ExternalLink } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full py-16 px-6 bg-[#0f172a] border-t border-gray-800/50 relative">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#1e3a8a30_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a30_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            {/* Footer content */}
            <div className="z-10 max-w-4xl mx-auto relative">
                {/* Main Navigation Links */}
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-6">
                    <Link
                        href="/browse"
                        className="text-gray-300 hover:text-white transition-colors font-medium"
                    >
                        Browse
                    </Link>
                    <Link
                        href="/login"
                        className="text-gray-300 hover:text-white transition-colors font-medium"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/register"
                        className="text-gray-300 hover:text-white transition-colors font-medium"
                    >
                        Join Now
                    </Link>
                </div>
            </div>

            {/* Large background text */}
            <div className="flex items-center justify-center overflow-hidden relative z-0">
                <div className="text-[5rem] sm:text-[7rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold select-none pointer-events-none leading-none bg-gradient-to-br from-blue-400/30 to-blue-600/20 bg-clip-text text-transparent opacity-60 tracking-tighter">
                    DEVFOLIO
                </div>
            </div>
        </footer>
    );
}
