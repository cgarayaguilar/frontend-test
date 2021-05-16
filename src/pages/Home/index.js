import React from 'react'
import { Wrapper } from 'styles/globalStyles'
import { Container, BackgroundImage } from './styles'
import HeroSection from 'components/HeroSection'
import AboutUs from 'components/AboutUs'
import Appbar from 'components/Appbar'
import Image from 'assets/images/bg-tablet-pattern.svg'
import Testimonials from 'components/Testimonials'
import ContactUs from 'components/ContactUs'
import Footer from 'components/Footer'

function Home() {
  return (
    <>
      <Container>
        <BackgroundImage src={Image} alt="Background Image" />
        <Appbar />
        <Wrapper>
          <HeroSection />
          <AboutUs />
        </Wrapper>
        <Testimonials />
        <ContactUs />
        <Footer />
      </Container>
    </>
  )
}

export default React.memo(Home)
