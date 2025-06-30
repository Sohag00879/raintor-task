'use client'
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiArrowDown } from 'react-icons/fi';
import callIcon from '../../assets/call.png';
import messageIcon from '../../assets/Vector (7).png';
import email from '../../assets/Vector (8).png';

export default function Contact() {
    return (
        <section className="w-full px-6 py-20 bg-gradient-to-b from-white to-lime-200 dark:from-black dark:to-gray-900 text-black dark:text-white font-sans">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Left Side */}
                <div className="space-y-8">
                    <div className='flex items-center'>
                        <span className="inline-flex items-center justify-center border border-black dark:border-white rounded-full p-2 hover:bg-black/10 dark:hover:bg-white/10 transition">
                            <FiArrowDown className="text-lg text-black dark:text-white cursor-pointer" />
                        </span>

                        <button className="border border-black dark:border-white rounded-full px-4 py-1 hover:bg-black/10 dark:hover:bg-white/10 transition cursor-pointer">
                            <span>Contact</span>
                        </button>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold">
                        Interested in <br />
                        <span className="inline-block bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded-md">
                            work
                        </span>{' '}
                        together?
                    </h1>

                    <p className="text-lg max-w-md">
                        We start every new client interaction with an in-depth discovery call where we get to know each other
                    </p>

                    <button className="flex cursor-pointer items-center gap-2 border border-black dark:border-white rounded-full pr-8 py-3 hover:bg-black/10 dark:hover:bg-white/10 transition">
                        <span className="border border-black dark:border-white rounded-full p-1">
                            <Image src={callIcon} alt="icon" />
                        </span>
                        <span>Schedule a Call</span>
                    </button>
                </div>

                {/* Right Side */}
                <div className="bg-black dark:bg-white text-white dark:text-black p-6 md:p-10 rounded-3xl space-y-6">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full bg-transparent border-b border-gray-600 dark:border-gray-300 hover:border-lime-400 py-2 placeholder-gray-400 dark:placeholder-gray-600 outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full bg-transparent border-b border-gray-600 dark:border-gray-300 hover:border-lime-400 py-2 placeholder-gray-400 dark:placeholder-gray-600 outline-none"
                    />
                    <textarea
                        placeholder="Describe your project"
                        className="w-full bg-transparent border-b border-gray-600 dark:border-gray-300 hover:border-lime-400 py-2 placeholder-gray-400 dark:placeholder-gray-600 outline-none"
                        rows={1}
                    ></textarea>

                    <div className="flex items-center gap-4 flex-wrap">
                        <button className="flex items-center border border-white dark:border-black rounded-full pr-10 py-1.5 hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition">
                            <span className="border border-white dark:border-black rounded-full p-2">
                                <Image src={messageIcon} alt="icon" />
                            </span>
                            <span className="ml-1">Send</span>
                        </button>
                        <span>or</span>
                        <button className="flex items-center gap-2 border border-white dark:border-black rounded-full pr-10 py-1.5 hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition">
                            <span className="border border-white dark:border-black rounded-full p-2">
                                <Image src={email} alt="icon" />
                            </span>
                            <span>Contact me</span>
                        </button>
                    </div>

                    <div className="flex items-center justify-start gap-x-10 pt-6 text-lg text-gray-400 dark:text-gray-700">
                        <span>@williamrey</span>

                        <div className="flex gap-2 items-center">
                            <div>
                                <hr className="w-10 border-t border-gray-100 dark:border-gray-700" />
                            </div>
                            <FaFacebookF className="hover:text-lime-400 cursor-pointer text-white dark:text-black" />
                            <FaTwitter className="hover:text-lime-400 cursor-pointer text-white dark:text-black" />
                            <FaInstagram className="hover:text-lime-400 cursor-pointer text-white dark:text-black" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
