import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Phone, Send, Twitter } from "lucide-react"
import Image from "next/image"

export default function Contact() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image src="/images/contact-bg.png" alt="Contact Background" fill className="object-cover" />
            </div>

            {/* Contact Button - Top Left */}
            <div className="absolute top-8 left-8 z-20">
                <Button
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white transition-colors rounded-full px-6 py-2 bg-transparent
                     dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                >
                    Contact
                </Button>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Content */}
                        <div className="space-y-8">
                            {/* Main Heading */}
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="text-black dark:text-white">Interested in</span>
                                <br />
                                <span className="bg-black text-white px-4 py-2 inline-block dark:bg-white dark:text-black">work</span>
                                <span className="text-black dark:text-white"> together?</span>
                            </h2>

                            {/* Description */}
                            <p className="text-lg md:text-xl text-black/80 dark:text-white/80 max-w-lg leading-relaxed">
                                We start every new client interaction with an in-depth discovery call where we get to know each other
                            </p>

                            {/* CTA Button */}
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-black text-black hover:bg-black hover:text-white transition-colors rounded-full px-8 py-6 text-lg font-medium bg-transparent
                           dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Schedule a Call
                            </Button>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="bg-black rounded-3xl p-8 text-white dark:bg-white dark:text-black">
                            <form className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <Input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="bg-transparent border-white/20 border-b border-t-0 border-l-0 border-r-0 rounded-none text-white placeholder:text-white/60 focus:border-white px-0 py-4 text-lg
                               dark:border-black/20 dark:text-black dark:placeholder:text-black/60 dark:focus:border-black"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <Input
                                        type="email"
                                        placeholder="Your email address"
                                        className="bg-transparent border-white/20 border-b border-t-0 border-l-0 border-r-0 rounded-none text-white placeholder:text-white/60 focus:border-white px-0 py-4 text-lg
                               dark:border-black/20 dark:text-black dark:placeholder:text-black/60 dark:focus:border-black"
                                    />
                                </div>

                                {/* Project Description */}
                                <div>
                                    <Textarea
                                        placeholder="Describe your project"
                                        rows={4}
                                        className="bg-transparent border-white/20 border-b border-t-0 border-l-0 border-r-0 rounded-none text-white placeholder:text-white/60 focus:border-white px-0 py-4 text-lg resize-none
                               dark:border-black/20 dark:text-black dark:placeholder:text-black/60 dark:focus:border-black"
                                    />
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-4 pt-4">
                                    <Button
                                        type="submit"
                                        variant="outline"
                                        className="border-white text-white hover:bg-white hover:text-black transition-colors rounded-full px-6 py-2 bg-transparent
                               dark:border-black dark:text-black dark:hover:bg-black dark:hover:text-white"
                                    >
                                        <Send className="w-4 h-4 mr-2" />
                                        Send
                                    </Button>
                                    <span className="text-white/60 dark:text-black/60">or</span>
                                    <Button
                                        variant="outline"
                                        className="border-white text-white hover:bg-white hover:text-black transition-colors rounded-full px-6 py-2 bg-transparent
                               dark:border-black dark:text-black dark:hover:bg-black dark:hover:text-white"
                                    >
                                        Contact me
                                    </Button>
                                </div>

                                {/* Social Media */}
                                <div className="flex items-center gap-4 pt-8 border-t border-white/10 dark:border-black/10">
                                    <span className="text-white/80 dark:text-black/80">@williamroy</span>
                                    <div className="flex items-center gap-3">
                                        <a href="#" className="text-white hover:text-white/70 transition-colors dark:text-black dark:hover:text-black/70">
                                            <Facebook className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="text-white hover:text-white/70 transition-colors dark:text-black dark:hover:text-black/70">
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="text-white hover:text-white/70 transition-colors dark:text-black dark:hover:text-black/70">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
