import React from 'react'
import useRevenuePerProduct from 'hooks/useRevenuePerProduct.hook'

function RevenuePerProductChart() {
  const { loading, error } = useRevenuePerProduct()

  return (
    <section>
      <figure className="highcharts-figure">
        <div id="container"></div>
      </figure>
    </section>
  )
}

export default React.memo(RevenuePerProductChart)
