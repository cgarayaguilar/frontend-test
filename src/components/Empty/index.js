import React from 'react'
import Lottie from 'react-lottie'
import empty from 'assets/animations/53200-empty-file.json'
import { Container } from './styles'
import Typography from 'components/Typography'

export default function WithoutResults({
  width = 400,
  height = 250,
  text = 'No se encontraron resultados',
}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: empty,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Container>
      <Lottie options={defaultOptions} height={height} width={width} />
      <Typography variant="title2" color="#8D8D8D" value={text} mt="24px" />
    </Container>
  )
}
