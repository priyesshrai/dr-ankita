import AboutDesc, { OtherData } from '@/components/AboutDesc'
import AboutPageStrip from '@/components/AboutPageStrip'
import Academic from '@/components/Academic'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main className='relative w-full'>
        <AboutDesc />
        <AboutPageStrip />
        <Academic />
        <OtherData />
      </main>
      <Contact />
      <Footer />
    </>
  )
}
