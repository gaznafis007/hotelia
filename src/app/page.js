
import About from "@/components/About"
import FeaturedHotels from "@/components/FeaturedHotels"
import Hero from "@/components/Hero"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero/>
      {/* Featured Hotels Section */}
      <FeaturedHotels />
      {/* About Section */}
      <About/>
      {/* Testimonial Section */}
      <Testimonials/>
    </div>
  )
}

