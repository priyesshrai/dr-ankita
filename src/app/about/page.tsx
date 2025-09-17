import About from '@/components/About'
import AboutPageStrip from '@/components/AboutPageStrip'
import OurMission from '@/components/OurMission'
import Testimonials from '@/components/Testimonials'
import React from 'react'

export default function AboutPage() {
  return (
    <main className='relative w-full'>
      <About />
      <AboutPageStrip />
      <OurMission />
      <Testimonials />
    </main>
  )
}
