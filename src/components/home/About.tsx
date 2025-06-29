import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function About() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image src="/images/about-bg.png" alt="About Background" fill className="object-cover" />
            </div>

            {/* About Button - Top Right */}
            <div className="absolute top-8 right-8 z-20">
                <Button
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white transition-colors rounded-full px-6 py-2 bg-transparent dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                >
                    About
                </Button>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Main Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                            <span className="text-black dark:text-white">I&apos;ve been </span>
                            <span className="bg-black text-white px-4 py-2 inline-block dark:bg-white dark:text-black">Developing</span>
                            <br />
                            <span className="text-black dark:text-white">Websites since </span>
                            <span className="bg-black text-white px-4 py-2 inline-block dark:bg-white dark:text-black">2013</span>
                        </h2>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-black/80 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
                            We start every new client interaction with an in-depth discovery call where we get to know each other and
                            recommend the best course of action.
                        </p>
                    </div>

                    {/* Previously Worked On Section */}
                    <div className="mt-20">
                        <div className="flex flex-col lg:flex-row items-start gap-8">
                            {/* Left Side Text */}
                            <div className="lg:w-1/4 flex-shrink-0">
                                <h3 className="text-xl font-bold text-black dark:text-white leading-tight">
                                    PREVIOUSLY
                                    <br />
                                    WORKED ON
                                </h3>
                            </div>

                            {/* Right Side - Company Logos with Flowing Design */}
                            <div className="lg:w-3/4 relative">
                                <div className="relative w-full h-48 text-black dark:text-white">
                                    {/* awwwards - top left */}
                                    <div className="absolute top-0 left-0">
                                        <div className="bg-black text-white px-6 py-3 rounded-full dark:bg-white dark:text-black">
                                            <span className="font-medium text-sm">awwwards.</span>
                                        </div>
                                    </div>

                                    {/* Curved line from awwwards to facebook */}
                                    <svg className="absolute top-6 left-32 w-32 h-16" viewBox="0 0 128 64" >
                                        <path d="M0,8 Q64,0 128,32" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
                                    </svg>

                                    {/* facebook - top center */}
                                    <div className="absolute top-8 left-64">
                                        <div className="bg-white border-2 border-black text-black px-6 py-3 rounded-full dark:bg-black dark:border-white dark:text-white">
                                            <span className="font-medium text-sm">facebook</span>
                                        </div>
                                    </div>

                                    {/* Curved line from facebook to CSS Design Awards */}
                                    <svg className="absolute top-14 left-80 w-24 h-12" viewBox="0 0 96 48" >
                                        <path d="M0,0 Q48,24 96,8" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
                                    </svg>

                                    {/* CSS Design Awards - top right */}
                                    <div className="absolute top-4 right-0">
                                        <div className="bg-white border-2 border-black text-black px-6 py-3 rounded-full dark:bg-black dark:border-white dark:text-white">
                                            <span className="font-medium text-sm">CSS Design Awards</span>
                                        </div>
                                    </div>

                                    {/* CSS WINNER - bottom left */}
                                    <div className="absolute bottom-8 left-8">
                                        <div className="bg-white border-2 border-black text-black px-6 py-3 rounded-full dark:bg-black dark:border-white dark:text-white">
                                            <span className="font-medium text-sm">CSS WINNER</span>
                                        </div>
                                    </div>

                                    {/* Curved line from CSS WINNER to thoughtworks */}
                                    <svg className="absolute bottom-4 left-40 w-28 h-12" viewBox="0 0 112 48" >
                                        <path d="M0,24 Q56,0 112,24" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
                                    </svg>

                                    {/* thoughtworks - bottom center */}
                                    <div className="absolute bottom-8 left-72">
                                        <div className="bg-white border-2 border-black text-black px-6 py-3 rounded-full dark:bg-black dark:border-white dark:text-white">
                                            <span className="font-medium text-sm">thoughtworks</span>
                                        </div>
                                    </div>

                                    {/* Curved line from thoughtworks to AUTODESK */}
                                    <svg className="absolute bottom-4 right-32 w-24 h-12" viewBox="0 0 96 48" >
                                        <path d="M0,24 Q48,0 96,24" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
                                    </svg>

                                    {/* AUTODESK - bottom right */}
                                    <div className="absolute bottom-8 right-8">
                                        <div className="bg-white border-2 border-black text-black px-6 py-3 rounded-full dark:bg-black dark:border-white dark:text-white">
                                            <span className="font-medium text-sm">AUTODESK</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile Layout - Stacked */}
                                <div className="lg:hidden flex flex-col items-center gap-4 mt-8">
                                    <div className="bg-black text-white px-6 py-3 rounded-full dark:bg-white dark:text-black">
                                        <span className="font-medium text-sm">awwwards.</span>
                                    </div>
                                    <div className="bg-white border-2 border-black text-black px-6 py-3 rounded-full dark:bg-black dark:border-white dark:text-white">
                                        <span className="font-medium text-sm">facebook</span>
                                    </div>
                                    <div className="bg-white border-2 border-black text-black px-6 py-3 rounded-full dark:bg-black dark:border-white dark:text-white">
                                        <span className="font-medium text-sm">CSS Design Awards</span>
                                    </div>
                                    <div className="bg-white border-2 border-black text-black px-6 py-3 rounded-full dark:bg-black dark:border-white dark:text-white">
                                        <span className="font-medium text-sm">CSS WINNER</span>
                                    </div>
                                    <div className="bg-white border-2 border-black text-black px-6 py-3 rounded-full dark:bg-black dark:border-white dark:text-white">
                                        <span className="font-medium text-sm">thoughtworks</span>
                                    </div>
                                    <div className="bg-white border-2 border-black text-black px-6 py-3 rounded-full dark:bg-black dark:border-white dark:text-white">
                                        <span className="font-medium text-sm">AUTODESK</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
