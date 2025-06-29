import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      title: "HTML & CSS",
      description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    },
    {
      title: "Javascript",
      description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    },
    {
      title: "Webflow",
      description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    },
  ]

  return (
    <section className="bg-black text-white dark:bg-black dark:text-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Why Choose me Button - Top Left */}
        <div className="mb-8">
          <Button
            variant="outline"
            className="border-white dark:border-white text-white dark:text-white hover:bg-white hover:text-black transition-colors rounded-full px-6 py-2 bg-transparent"
          >
            Why Choose me
          </Button>
        </div>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          {/* Left Side - Heading */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white leading-tight">
              My Extensive
              <br />
              List of Skills
            </h2>
          </div>

          {/* Right Side - Description and Navigation */}
          <div className="lg:w-1/2 lg:pl-12">
            <p className="text-white/80 dark:text-white/80 text-lg leading-relaxed mb-8">
              Building the worlds best marketing Your trusted partner for strategy, design, and dev.
            </p>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black transition-colors rounded-full w-12 h-12 bg-transparent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black transition-colors rounded-full w-12 h-12 bg-transparent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-900 dark:bg-gray-900 rounded-3xl p-8">
              {/* Skill Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  {/* Atom-like icon */}
                  <svg
                    className="w-12 h-12 text-lime-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="1" fill="currentColor" />
                    <path d="M12 2c-1.5 4-1.5 8 0 10 1.5-2 1.5-6 0-10z" />
                    <path d="M12 22c1.5-4 1.5-8 0-10-1.5 2-1.5 6 0 10z" />
                    <path d="M2 12c4 1.5 8 1.5 10 0-2-1.5-6-1.5-10 0z" />
                    <path d="M22 12c-4-1.5-8-1.5-10 0 2 1.5 6 1.5 10 0z" />
                    <path d="M8 4.5c2 2.5 6 2.5 8 0-2 2.5-6 2.5-8 0z" />
                    <path d="M16 19.5c-2-2.5-6-2.5-8 0 2-2.5 6-2.5 8 0z" />
                  </svg>
                </div>
              </div>

              {/* Skill Title */}
              <h3 className="text-2xl font-bold text-white dark:text-white mb-4">{skill.title}</h3>

              {/* Skill Description */}
              <p className="text-white/70 dark:text-white/70 text-base leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
