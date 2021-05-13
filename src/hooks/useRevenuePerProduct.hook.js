import { useEffect } from 'react'
import Highcharts from 'highcharts'
import { useQuery, gql } from '@apollo/client'

require('highcharts/modules/debugger')(Highcharts)
require('highcharts/modules/accessibility')(Highcharts)

window.Highcharts = Highcharts

const EMPTY_OBJECT = 0

const REVENUE_QUERY = gql`
  query {
    stripeTotalRevenueAndProduct(
      from: "2020-09-01"
      to: "2021-04-30"
      groupBy: MONTH
      limit: TOP_3
    ) {
      chart {
        type
      }
      title {
        text
      }
      subTitle {
        text
      }
      xAxis {
        categories
      }
      yAxis {
        title
      }
      series {
        type
        name
        data
      }
    }
  }
`

const obj_data = {
  data: {
    stripeTotalRevenueAndProduct: {
      chart: {
        type: 'area',
      },
      title: {
        text: 'Total Revenue Per Product',
      },
      subTitle: {
        text: '',
      },
      xAxis: [
        {
          categories: [
            'Sep-2020',
            'Oct-2020',
            'Nov-2020',
            'Dec-2020',
            'Jan-2021',
            'Feb-2021',
            'Mar-2021',
            'Apr-2021',
          ],
        },
      ],
      yAxis: [
        {
          title: 'Y-Axis',
        },
      ],
      series: [
        {
          type: 'areaspline',
          name: 'Premium',
          data: [16716, 4378, 1194, 995, 995, 6182, 3389, 3788],
        },
        {
          type: 'areaspline',
          name: 'Deluxe',
          data: [0, 1196, 598, 588, 588, 5384, 2996, 16185],
        },
        {
          type: 'areaspline',
          name: 'Medium',
          data: [5841, 3168, 1386, 1188, 1188, 4770, 2780, 3377],
        },
      ],
    },
  },
}

export default function useRevenuePerProduct() {
  const { loading, error, data } = useQuery(REVENUE_QUERY)

  /**
   * recibe la informacion del usuario autenticado
   */
  const initChart = () => {
    //Validar que se hayan recibido los datos
    if (error) return
    if (typeof data !== 'object') return
    if (Object.keys(data).length === EMPTY_OBJECT) return

    const RevenuePerProductData = data.stripeTotalRevenueAndProduct

    console.log(RevenuePerProductData)
    console.log(obj_data.data.stripeTotalRevenueAndProduct)

    Highcharts.chart('container', obj_data.data.stripeTotalRevenueAndProduct)
  }

  useEffect(() => {
    initChart()
  }, [data])

  return { loading, error }
}
