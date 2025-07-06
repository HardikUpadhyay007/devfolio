"use client";
import React from "react";
import { HeroSection } from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import Footer from "./components/Footer";

export default function Home() {
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

            {/* Main Content */}
            <HeroSection></HeroSection>
            <PortfolioSection></PortfolioSection>
            <Footer></Footer>
        </div>
    );
}
