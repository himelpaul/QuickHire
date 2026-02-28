import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import CompanyLogos from '@/components/sections/CompanyLogos'
import CategorySection from '@/components/sections/CategorySection'
import CTASection from '@/components/sections/CTASection'
import FeaturedJobs from '@/components/sections/FeaturedJobs'
import LatestJobs from '@/components/sections/LatestJobs'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CompanyLogos />
        <CategorySection />
        <CTASection />
        <FeaturedJobs />
        <LatestJobs />
      </main>
      <Footer />
    </>
  )
}
