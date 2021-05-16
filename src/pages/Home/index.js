import React from 'react'
import { Wrapper } from 'styles/globalStyles'
import { Container, BackgroundImage, BackgroundImageMiddle } from './styles'
import HeroSection from 'components/HeroSection'
import AboutUs from 'components/AboutUs'
import Appbar from 'components/Appbar'
import Image from 'assets/images/bg-tablet-pattern.svg'
import Testimonials from 'components/Testimonials'

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
        {/*<BackgroundImageMiddle src={Image} alt="Background Image" />*/}
      </Container>
    </>
  )
}

export default React.memo(Home)
