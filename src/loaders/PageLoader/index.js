import React from 'react'
import Lottie from 'react-lottie'
import chartLoader from 'assets/animations/polichat.json'
import { Overlay, Content } from './styles'

export default function PageLoader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: chartLoader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Overlay>
      <Content>
        <Lottie options={defaultOptions} height={400} width={400} />
      </Content>
    </Overlay>
  )
}
