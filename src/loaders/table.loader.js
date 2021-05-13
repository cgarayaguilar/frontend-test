import React from 'react'
import ContentLoader from 'react-content-loader'

const TableLoader = ({ rows = 4, columns = 5 }) => {
    const arrRows = Array(rows).fill(1)
    const arrColumns = Array(columns).fill(1)

    return (
        <section className='table-loader'>
            {arrRows.map((_, index) => (
                <div className='table-rows' key={index}>
                    {arrColumns.map((_, index) => (
                        <FadingLoaderCard1 key={index} />
                    ))}
                </div>
            ))}
        </section>
    )
}

const FadingLoaderCard1 = () => {
    return (
        <ContentLoader
            width={'100%'}
            height={40}
            backgroundColor='#151515'
            foregroundColor='#1d1d1d'>
            <rect width='150px' height='15' y='40%' />
        </ContentLoader>
    )
}

export default TableLoader
