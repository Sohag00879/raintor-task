'use client'
import Image from 'next/image';
import { useState } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
export default function WorkProcess() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <section className='px-6'>
            <div className='bg-[#1B1B1B] text-white py-20 px-4 md:px-10 font-sans rounded-4xl'>
                <div className="w-11/12 mx-auto">
                    {/* Section Title */}

                    <div className='flex items-center gap-x-100 mb-16'>
                        <div className="flex group cursor-pointer">
                            {/* Arrow Circle */}
                            <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-black transition-all duration-300 hover:bg-white">
                                <span className="text-white text-xl font-bold leading-none group-hover:text-black transition-all duration-300">&#x2193;</span>
                            </div>

                            {/* Work Process Pill */}
                            <div className="border border-white rounded-full px-6 py-2 text-sm flex items-center transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-black">
                                <span>Work Process</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold  text-center">My Work Process</h1>
                    </div>

                    {/* Grid layout */}
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Discovery */}
                        <div className="bg-black hover:bg-[#C3FF46] text-white hover:text-black rounded-2xl p-8 hover:transform hover:rotate-6 group"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span

                                    className={`px-8 py-1 rounded-full font-semibold transition-colors duration-300
                                 ${isHovered ? 'bg-black text-white' : 'bg-[#C5FFEE] text-black'}`}
                                >
                                    Discovery
                                </span>

                                <a href="#" className="text-sm underline">
                                    <span className='flex items-center gap-x-2'>
                                        <span>
                                            <IoIosArrowRoundForward className='w-8 h-8 text-white group-hover:text-black transition-colors duration-300' />
                                        </span>
                                        <span className='text-white group-hover:text-black transition-colors duration-300'>
                                            Read More
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <p className="text-sm leading-relaxed">
                                Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to
                                in-depth cxxle reviews we&apos;re here to set the stage for success.
                            </p>
                        </div>
                        {/* Strategy */}
                        <div className="bg-black hover:bg-[#C3FF46] text-white hover:text-black rounded-2xl p-8 hover:transform hover:rotate-6 group"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span
                                    className={`px-8 py-1 rounded-full font-semibold transition-colors duration-300
                                ${isHovered ? 'bg-black text-white' : 'bg-[#C5FFEE] text-black'}`}
                                >
                                    Strategy
                                </span>

                                <a href="#" className="text-sm underline">
                                    <span className='flex items-center gap-x-2'>
                                        <span>
                                            <IoIosArrowRoundForward className='w-8 h-8 text-white group-hover:text-black transition-colors duration-300' />
                                        </span>
                                        <span className='text-white group-hover:text-black transition-colors duration-300'>
                                            Read More
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <p className="text-sm leading-relaxed">
                                Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to
                                in-depth cxxle reviews we&apos;re here to set the stage for success.
                            </p>
                        </div>


                        {/* Design */}
                        <div className="bg-black hover:bg-[#C3FF46] text-white hover:text-black rounded-2xl p-8 hover:transform hover:rotate-6 group"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span

                                    className={`px-8 py-1 rounded-full font-semibold transition-colors duration-300
                                 ${isHovered ? 'bg-black text-white' : 'bg-[#C5FFEE] text-black'}`}
                                >
                                    Design
                                </span>

                                <a href="#" className="text-sm underline">
                                    <span className='flex items-center gap-x-2'>
                                        <span>
                                            <IoIosArrowRoundForward className='w-8 h-8 text-white group-hover:text-black transition-colors duration-300' />
                                        </span>
                                        <span className='text-white group-hover:text-black transition-colors duration-300'>
                                            Read More
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <p className="text-sm leading-relaxed">
                                Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to
                                in-depth cxxle reviews we&apos;re here to set the stage for success.
                            </p>
                        </div>

                        {/* Build */}
                        <div className="bg-black hover:bg-[#C3FF46] text-white hover:text-black rounded-2xl p-8 hover:transform hover:rotate-6 group"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span
                                    className={`px-8 py-1 rounded-full font-semibold transition-colors duration-300
                                ${isHovered ? 'bg-black text-white' : 'bg-[#C5FFEE] text-black'}`}
                                >
                                    Build
                                </span>

                                <a href="#" className="text-sm underline">
                                    <span className='flex items-center gap-x-2'>
                                        <span>
                                            <IoIosArrowRoundForward className='w-8 h-8 text-white group-hover:text-black transition-colors duration-300' />
                                        </span>
                                        <span className='text-white group-hover:text-black transition-colors duration-300'>
                                            Read More
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <p className="text-sm leading-relaxed">
                                Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to
                                in-depth cxxle reviews we&apos;re here to set the stage for success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}