import React from 'react'
import ContentLoader from 'react-content-loader'

const CarouselLoader = ({
	columns = 6,
	rows = 1,
	coverHeight = 280,
	coverWidth = 200,
}) => {
	// Get values from props
	// const { rows, columns, coverHeight, coverWidth, padding, speed } = props;

	// Hardcoded values
	const padding = 16
	const speed = 1

	const coverHeightWithPadding = coverHeight + padding
	const coverWidthWithPadding = coverWidth + padding
	const initial = 35
	const covers = Array(columns * rows).fill(1)

	return (
		<ContentLoader
			speed={speed}
			width={columns * coverWidthWithPadding}
			height={rows * coverHeightWithPadding}
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'>
			{covers.map((g, i) => {
				let vy =
					Math.floor(i / columns) * coverHeightWithPadding + initial
				let vx =
					(i * coverWidthWithPadding) %
					(columns * coverWidthWithPadding)
				return (
					<rect
						key={i}
						x={vx}
						y={vy}
						rx='0'
						ry='0'
						width={coverWidth}
						height={coverHeight}
					/>
				)
			})}
		</ContentLoader>
	)
}

export default CarouselLoader
