import React from 'react'
import Lottie from 'react-lottie'
import astronaut from 'assets/animations/astronaut.json'
import Button from 'components/Button'
import { Container } from './styles'
import Typography from 'components/Typography'

export default function ErrorComponent({
  width = 400,
  height = 400,
  text = 'No se pudieron obtener los datos',
  onClick = () => {},
}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: astronaut,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const handleClick = () => {
    if (!onClick) return (window.location.href = '/')

    onClick()
  }

  return (
    <Container className="error-component">
      <Lottie options={defaultOptions} height={height} width={width} />
      <Typography variant="Title" value={text} color="#4d4d4d" mb="32px" />
      <div className="error-component__cta">
        <Button color="#3b66b7" variant="filled" onClick={handleClick}>
          Volver a intentar
        </Button>
      </div>
    </Container>
  )
}
