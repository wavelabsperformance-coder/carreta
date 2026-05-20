import { HeroSection } from '@/sections/HeroSection'
import { ManifestoSection } from '@/sections/ManifestoSection'
import { EcosystemSection } from '@/sections/EcosystemSection'
import { DifferentiationSection } from '@/sections/DifferentiationSection'
import { ApplicationsSection } from '@/sections/ApplicationsSection'
import { GallerySection } from '@/sections/GallerySection'
import { TestimonialsSection } from '@/sections/TestimonialsSection'
import { CTASection } from '@/sections/CTASection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <EcosystemSection />
      <DifferentiationSection />
      <ApplicationsSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
