import React from 'react'
import Button from 'components/Button'
import Typography from 'components/Typography'
//import { Container, TextContainer, ImageContainer } from './styles'
import { useHistory } from 'react-router-dom'
import { DASHBOARD } from 'config/paths'
import { Wrapper } from 'styles/globalStyles'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TestimonialCard from 'components/TestimonialCard'

import { testimonials } from 'services/testimonials'
import randomKey from 'utils/random-key.util'
import Slider from 'react-slick'
import { Container, ContainerButton } from './styles'
import './styles.css'

function Testimonials() {
  const history = useHistory()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        },
      },
    ],
  }

  const goToDashboard = () => history.push(DASHBOARD)

  return (
    <Container>
      <Wrapper>
        <Typography
          align="center"
          variant="title2"
          value="What Clients Say?"
          mb="78px"
        />
      </Wrapper>

      <Slider {...settings}>
        {testimonials.map(testimonial => (
          <TestimonialCard
            key={randomKey()}
            image={testimonial.personAvatar}
            name={testimonial.personName}
            description={testimonial.description}
          />
        ))}
      </Slider>

      <ContainerButton>
        <Button onClick={goToDashboard} width="155px">
          Get Started
        </Button>
      </ContainerButton>
    </Container>
  )
}

export default Testimonials
