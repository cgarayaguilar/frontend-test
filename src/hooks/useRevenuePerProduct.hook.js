import { useQuery, gql } from '@apollo/client'
import { useEffect, useState } from 'react'
import { top3, top5, top10 } from 'services/dataChart.service'

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

export default function useRevenuePerProduct() {
  const Filters = {
    TOP_3: 'TOP_3',
    TOP_5: 'TOP_5',
    TOP_10: 'TOP_10',
  }

  const { loading, error: isError, data, refetch } = useQuery(REVENUE_QUERY)
  const [revenueData, setRevenueData] = useState(
    top10.data.stripeTotalRevenueAndProduct
  )
  const [filterActive, setFilterActive] = useState(Filters.TOP_10)

  /**
   * @param  {String} {option} =>{Recibe el tipo de filtro a realizar (Ej. TOP_3, TOP_5, TOP_10)
   * @return  {void}
   */
  const filterBy = ({ option }) => {
    setFilterActive(option)

    if (option === Filters.TOP_3)
      return setRevenueData(top3.data.stripeTotalRevenueAndProduct)
    if (option === Filters.TOP_5)
      return setRevenueData(top5.data.stripeTotalRevenueAndProduct)
    if (option === Filters.TOP_10)
      return setRevenueData(top10.data.stripeTotalRevenueAndProduct)
  }

  useEffect(() => {
    if (typeof data !== 'object') return
    if (Object.keys(data).length === EMPTY_OBJECT) return

    console.log(data?.stripeTotalRevenueAndProduct)
    //setRevenueData(data?.stripeTotalRevenueAndProduct)
  }, [data])

  return {
    loading,
    isError,
    revenueData,
    filterBy,
    Filters,
    filterActive,
  }
}
