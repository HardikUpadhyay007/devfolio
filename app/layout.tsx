import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "DevFolio - Showcase Your Developer Portfolio",
    description:
        "The ultimate platform for developers to create, showcase, and share their professional portfolios. Join our community, get discovered, and stand out with a premium profile.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
            >
                {/* Global Navy Blue Grid Background with normal scroll */}
                <div className="relative w-screen h-screen overflow-y-scroll overflow-x-hidden bg-[#0f172a]">
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
                    {children}
                </div>
            </body>
        </html>
    );
}
