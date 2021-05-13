import React from 'react'
import empty from 'assets/empty.svg'

export default function EmptyComponent({
    width = 400,
    height = 400,
    text = 'No hay datos',
}) {
    const style = {
        width,
        height,
    }

    return (
        <section className='empty-component'>
            <img
                style={style}
                src={empty}
                alt='No hay datos'
                className='empty-component__image'
            />
            <p className='empty-component__text'>{text}</p>
        </section>
    )
}
