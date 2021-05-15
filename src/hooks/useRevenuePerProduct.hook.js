import { useQuery, gql } from '@apollo/client'
import { useEffect, useState } from 'react'

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
  const { loading, error: isError, data, refetch } = useQuery(REVENUE_QUERY)
  const [revenueData, setRevenueData] = useState({})

  const refetchRevenueData = () => {
    console.log('Se hizo refetch')
    refetch()
  }

  useEffect(() => {
    setRevenueData(data?.stripeTotalRevenueAndProduct)
    console.log(data?.stripeTotalRevenueAndProduct)
  }, [data])

  return {
    loading,
    isError,
    refetchRevenueData,
    options: revenueData,
  }
}
