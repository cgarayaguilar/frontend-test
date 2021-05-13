import React from 'react'
import CarouselLoader from 'components/loaders/carousel.loader'
import ContentLoader from 'react-content-loader'

export default function HomeSkeleton() {
    return (
        <section className='max-width__skeleton'>
            <ContentLoader
                width={'100%'}
                height={60}
                backgroundColor='#151515'
                foregroundColor='#1d1d1d'>
                <rect
                    x='0'
                    y='0'
                    rx='0'
                    ry='0'
                    width={'300px'}
                    height={'100%'}
                />
            </ContentLoader>

            <CarouselLoader />

            <ContentLoader
                width={'100%'}
                height={500}
                backgroundColor='#151515'
                foregroundColor='#1d1d1d'>
                <rect
                    x='0'
                    y='16px'
                    rx='0'
                    ry='0'
                    width={'100%'}
                    height={'100%'}
                />
            </ContentLoader>
        </section>
    )
}
