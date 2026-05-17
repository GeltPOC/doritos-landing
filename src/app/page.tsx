import HeroSection from '@/features/landing/components/HeroSection'
import FlavorsSection from '@/features/landing/components/FlavorsSection'
import ExperienceSection from '@/features/landing/components/ExperienceSection'
import CtaSection from '@/features/landing/components/CtaSection'
import Footer from '@/features/landing/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1A0A00] overflow-x-hidden">
      <HeroSection />
      <FlavorsSection />
      <ExperienceSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
