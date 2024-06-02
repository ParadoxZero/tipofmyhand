export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import About from '@/components/about'
import PricingDetails from '@/components/pricing'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Schedule from '@/components/schedule'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PricingDetails />
      <FeaturesBlocks />
      <Testimonials />
      <Schedule />
    </>
  )
}
