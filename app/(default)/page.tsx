export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import About from '@/components/about'
import PricingDetails from '@/components/pricing'
import Profile from '@/components/profile'
import Schedule from '@/components/schedule'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PricingDetails />
      <Contact />
    </>
  )
}
