import { useQuery, gql } from '@apollo/client'
import { useEffect, useState } from 'react'

const EMPTY_OBJECT = 0

const REVENUE_QUERY = gql`
  query ($topProducts: topProducts!) {
    stripeTotalRevenueAndProduct(
      from: "2020-09-01"
      to: "2021-04-30"
      groupBy: MONTH
      limit: $topProducts
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

export default function useRevenuePerProduct() {
  const Filters = {
    TOP_3: 'TOP_3',
    TOP_5: 'TOP_5',
    TOP_10: 'TOP_10',
  }

  const {
    loading,
    error: isError,
    data,
    fetchMore,
  } = useQuery(REVENUE_QUERY, {
    variables: {
      topProducts: Filters.TOP_10,
    },
  })

  //Estado que gestiona el filtro activo (Ej. TOP_3, TOP_5, TOP_10)
  const [filterActive, setFilterActive] = useState(Filters.TOP_10)

  //Estado que almacena los datos de la grafica
  const [chartOptions, setChartOptions] = useState(data || {})

  /**
   * @param  {String} {option} =>{Recibe el tipo de filtro a realizar (Ej. TOP_3, TOP_5, TOP_10)
   * @return  {void}
   */
  const filterBy = ({ option }) => {
    setFilterActive(option)

    let filter = Filters.TOP_10

    if (option === Filters.TOP_3) {
      filter = Filters.TOP_3
    }
    if (option === Filters.TOP_5) {
      filter = Filters.TOP_5
    }
    if (option === Filters.TOP_10) {
      filter = Filters.TOP_10
    }

    try {
      fetchMore({
        variables: {
          topProducts: filter,
        },
      }).then(response => {
        if (typeof response !== 'object') return
        if (Object.keys(response).length === EMPTY_OBJECT) return

        setChartOptions(response.data.stripeTotalRevenueAndProduct)
      })
    } catch (error) {
      console.error(error)
    }
  }

  //Actualizar la grafica cuando se obtengan los datos del servidor
  useEffect(() => {
    //Validamos la respuesta
    if (typeof data !== 'object') return
    if (Object.keys(data).length === EMPTY_OBJECT) return

    setChartOptions(data?.stripeTotalRevenueAndProduct)
  }, [data])

  return {
    loading,
    isError,
    filterBy,
    Filters,
    filterActive,
    chartOptions,
  }
}
