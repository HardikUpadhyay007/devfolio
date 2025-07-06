import Link from "next/link";
import { ExternalLink } from "lucide-react";

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
                        href="/product"
                        className="text-gray-300 hover:text-white transition-colors font-medium"
                    >
                        Product
                    </Link>
                    <Link
                        href="/about"
                        className="text-gray-300 hover:text-white transition-colors font-medium"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/pricing"
                        className="text-gray-300 hover:text-white transition-colors font-medium"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="/faq"
                        className="text-gray-300 hover:text-white transition-colors font-medium"
                    >
                        FAQ
                    </Link>
                    <Link
                        href="/contact"
                        className="text-gray-300 hover:text-white transition-colors font-medium"
                    >
                        Contact
                    </Link>
                    <Link
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors font-medium inline-flex items-center gap-1"
                    >
                        Twitter
                        <ExternalLink className="w-3 h-3" />
                    </Link>
                    <Link
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors font-medium inline-flex items-center gap-1"
                    >
                        LinkedIn
                        <ExternalLink className="w-3 h-3" />
                    </Link>
                </div>
            </div>

            {/* Large background text */}
            <div className="flex items-center justify-center overflow-hidden relative z-0">
                <div className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold select-none pointer-events-none leading-none bg-gradient-to-br from-blue-400/30 to-blue-600/20 bg-clip-text text-transparent opacity-60 tracking-tighter">
                    DEVFOLIO
                </div>
            </div>
        </footer>
    );
}
