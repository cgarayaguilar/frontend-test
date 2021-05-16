import Button from 'components/Button'
import Typography from 'components/Typography'
import React from 'react'
import { Container, TextContainer, ImageContainer } from './styles'
import illustration from 'assets/images/illustration-intro.svg'
import { useHistory } from 'react-router-dom'
import { DASHBOARD } from 'config/paths'

function HeroSection() {
  const history = useHistory()

  const goToDashboard = () => history.push(DASHBOARD)

  return (
    <Container id="products">
      <TextContainer>
        <Typography
          variant="title"
          value="Be proactive, not reactive. We help your online."
          mb="16px"
        />
        <Typography
          variant="body"
          value="Running a successful SaaS and eCommerce store means that you need to successfully collect your recurring subscriptions on time, retain your active customers, track unshipped items, and at all cost, avoid refunds."
          mb="40px"
        />
        <Button onClick={goToDashboard} width="155px">
          Get Started
        </Button>
      </TextContainer>
      <ImageContainer>
        <img src={illustration} alt="illustration" />
      </ImageContainer>
    </Container>
  )
}

export default HeroSection
