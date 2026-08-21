import Services from '@/components/Services'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Gynecology & Pregnancy Care Services in Hydrabad",
  description: "Explore expert gynecology, obstetrics, infertility, PCOS, pregnancy care, and women's health services offered by Dr. Ankita Chauhan in Varanasi.",
  alternates: {
    canonical: "https://www.drankitachauhan.com/services",
  },
}


export default function ServicesPage() {
  return (
    <main className='w-full relative'>
      <Services />
    </main>
  )
}
