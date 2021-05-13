import React from 'react'
import Lottie from 'react-lottie'
import astronaut from 'assets/animations/astronaut.json'
import { Button } from 'components'

export default function ErrorComponent({
    width = 400,
    height = 400,
    text = 'No se pudieron obtener los datos',
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
        window.location.href = '/'
    }

    return (
        <section className='error-component'>
            <Lottie options={defaultOptions} height={height} width={width} />
            <p className='error-component__text'>{text}</p>
            <div className='error-component__cta'>
                <Button color='#3b66b7' variant='filled' onClick={handleClick}>
                    Volver a intentar
                </Button>
            </div>
        </section>
    )
}
