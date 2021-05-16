import React from 'react'
import Typography from 'components/Typography'
import { Container } from './styles'

function TestimonialCard({ image, name, description }) {
  return (
    <Container>
      <img src={image} alt={`Photo about ${name}`} />
      <div>
        <Typography align="center" variant="title3" value={name} mb="19px" />
        <Typography align="center" variant="body" value={description} />
      </div>
    </Container>
  )
}

export default TestimonialCard
