import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 py-16 md:py-24 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Quality Stationery</span>
              <span className="block text-primary">for Students</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Discover our wide range of high-quality stationery products designed to make learning fun and productive.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="text-base">
                  Shop Now
                </Button>
              </Link>
              <Link href="/categories">
                <Button variant="outline" size="lg" className="text-base">
                  Browse Categories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block">
        <div className="w-80 h-80 rounded-full bg-primary/5 transform rotate-45"></div>
      </div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden lg:block">
        <div className="w-60 h-60 rounded-full bg-secondary/5"></div>
      </div>
      <div className="absolute top-1/2 right-1/4 hidden lg:block">
        <div className="w-40 h-40 rounded-full bg-primary/5"></div>
      </div>
    </div>
  )
}

