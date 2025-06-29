import herobg from '@/assets/hero-bg.png'
import { Button } from "@/components/ui/button"
import { Github, Instagram, Phone } from "lucide-react"
import Image from "next/image"

export default function Banner() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-black transition-colors duration-300">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image src={herobg} alt="Gradient Background" fill className="object-cover" priority />
            </div>

            {/* Social Media Sidebar */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex flex-col items-center space-y-4">
                <div className="transform -rotate-90 text-sm font-medium text-black dark:text-white mb-8">@williamroy</div>
                <div className="w-px h-16 bg-black/20 dark:bg-white/20"></div>
                <a href="#" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                    <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                    <Github className="w-5 h-5" />
                </a>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
                <div className="max-w-4xl">
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                        <span className="text-black dark:text-white">Trusted </span>
                        <span className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 inline-block">Partner</span>
                        <span className="text-black dark:text-white"> for</span>
                        <br />
                        <span className="text-black dark:text-white">Your Website </span>
                        <span className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 inline-block">Develop.</span>
                    </h1>

                    {/* Description */}
                    <div className="mb-8 max-w-2xl">
                        <p className="text-lg md:text-xl text-black/80 dark:text-white/80 mb-2">
                            Building the worlds best marketing websites for over a decade.
                        </p>
                        <p className="text-lg md:text-xl text-black/80 dark:text-white/80">
                            Your trusted partner for strategy, design, and dev.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors rounded-full px-8 py-6 text-lg font-medium bg-transparent"
                    >
                        <Phone className="w-5 h-5 mr-2" />
                        Schedule a Call
                    </Button>
                </div>
            </div>

            {/* Badge */}
            <div className="absolute top-1/3 right-8 z-20 hidden lg:block">
                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full p-3">
                    <div className="bg-white dark:bg-black rounded-full px-4 py-2">
                        <span className="text-sm font-bold text-black dark:text-white">MM4</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
