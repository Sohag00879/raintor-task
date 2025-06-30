'use client'
import { useState } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

export default function WorkProcess() {
    const [isHovered, setIsHovered] = useState(false);

    const processSteps = ["Discovery", "Strategy", "Design", "Build"];

    return (
        <section className='px-6 pb-10'>
            <div className='bg-[#1B1B1B] text-white dark:bg-white dark:text-black py-20 px-4 md:px-10 font-sans rounded-4xl'>
                <div className="w-11/12 mx-auto">
                    {/* Section Title */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-6 mb-16 text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 group cursor-pointer">
                            {/* Arrow Circle */}
                            <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-white dark:border-black transition-all duration-300 hover:bg-white dark:hover:bg-black">
                                <span className="text-white dark:text-black text-xl font-bold leading-none group-hover:text-black dark:group-hover:text-white transition-all duration-300">
                                    &#x2193;
                                </span>
                            </div>

                            {/* Work Process Pill */}
                            <div className="border border-white dark:border-black rounded-full px-6 py-2 text-sm flex items-center hover:text-black dark:hover:text-white transition-all duration-300 hover:bg-white dark:hover:bg-black">
                                <span>Work Process</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold">My Work Process</h1>
                    </div>

                    {/* Grid layout */}
                    <div className="grid md:grid-cols-2 gap-10">
                        {processSteps.map((title, index) => (
                            <div
                                key={index}
                                className="bg-black dark:bg-white hover:bg-[#C3FF46] text-white dark:text-black hover:text-black rounded-2xl p-8 hover:transform hover:rotate-6 group"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span
                                        className={`px-8 py-1 rounded-full font-semibold transition-colors duration-300
                      ${isHovered
                                                ? 'bg-black text-white dark:bg-[#C5FFEE] dark:text-black'
                                                : 'bg-[#C5FFEE] text-black dark:bg-black dark:text-white'}
                      group-hover:bg-black group-hover:text-white dark:group-hover:bg-[#C5FFEE] dark:group-hover:text-black`}
                                    >
                                        {title}
                                    </span>

                                    <a href="#" className="text-sm underline">
                                        <span className='flex items-center gap-x-2'>
                                            <IoIosArrowRoundForward className='w-8 h-8 text-white dark:text-black group-hover:text-black' />
                                            <span className='text-white dark:text-black group-hover:text-black'>Read More</span>
                                        </span>
                                    </a>
                                </div>

                                <p className="text-sm leading-relaxed">
                                    Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to
                                    in-depth code reviews we&apos;re here to set the stage for success.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
