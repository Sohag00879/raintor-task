
export default function WorkProcess() {
    return (
        <section className="bg-[#1B1B1B] min-h-screen text-white py-20 px-4 md:px-10 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="flex items-center space-x-4 mb-12">
                    <div className="border border-white rounded-full px-4 py-1 text-sm flex items-center gap-2">
                        <span className="text-white">\u2193</span> <span>Work Process</span>
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-16">My Work Process</h1>

                {/* Grid layout */}
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Discovery */}
                    <div className="bg-black rounded-2xl p-8">
                        <div className="flex justify-between items-start mb-4">
                            <span className="bg-[#C4FFE3] text-black px-4 py-1 rounded-full font-semibold">Discovery</span>
                            <a href="#" className="text-sm text-white underline">Read More \u2192</a>
                        </div>
                        <p className="text-[#CCCCCC] text-sm leading-relaxed">
                            We start every new client interaction with an in-depth discovery call where we get to know each other,
                            discuss your current and future objectives, and recommend the best course of action.
                        </p>
                    </div>

                    {/* Strategy */}
                    <div className="bg-[#C3FF46] text-black rounded-2xl p-8 transform -rotate-2">
                        <div className="flex justify-between items-start mb-4">
                            <span className="bg-black text-white px-4 py-1 rounded-full font-semibold">Strategy</span>
                            <a href="#" className="text-sm text-black underline">Read More \u2192</a>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to
                            in-depth cxxle reviews we&apos;re here to set the stage for success.
                        </p>
                    </div>

                    {/* Design */}
                    <div className="bg-black rounded-2xl p-8">
                        <div className="flex justify-between items-start mb-4">
                            <span className="bg-[#C4FFE3] text-black px-4 py-1 rounded-full font-semibold">Design</span>
                            <a href="#" className="text-sm text-white underline">Read More \u2192</a>
                        </div>
                        <p className="text-[#CCCCCC] text-sm leading-relaxed">
                            After we have a comprehensive understanding of your brand, we&apos;ll be ready to move onto design. Each page
                            or will be designed, reviewed, and given your stamp of approval.
                        </p>
                    </div>

                    {/* Build */}
                    <div className="bg-black rounded-2xl p-8">
                        <div className="flex justify-between items-start mb-4">
                            <span className="bg-[#C4FFE3] text-black px-4 py-1 rounded-full font-semibold">Build</span>
                            <a href="#" className="text-sm text-white underline">Read More \u2192</a>
                        </div>
                        <p className="text-[#CCCCCC] text-sm leading-relaxed">
                            Whether we&apos;ve just finished designing your new site or you&apos;re handing off finished designs for us to
                            develop in Webflow, we&apos;re here to apply our trusted development process to your project.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}