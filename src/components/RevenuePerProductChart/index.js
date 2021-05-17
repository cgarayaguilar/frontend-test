import React from 'react'
import useRevenuePerProduct from 'hooks/useRevenuePerProduct.hook'
import ErrorComponent from 'components/Error'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import PageLoader from 'loaders/PageLoader'
import { Container, Header, Filter, Option } from './styles'
import Typography from 'components/Typography'

require('highcharts/modules/debugger')(Highcharts)
require('highcharts/modules/accessibility')(Highcharts)
window.Highcharts = Highcharts

function RevenuePerProductChart() {
  const {
    loading,
    isError,
    refetchRevenueData,
    revenueData,
    filterBy,
    Filters,
    filterActive,
  } = useRevenuePerProduct()

  if (loading) return <PageLoader />

  if (isError)
    return (
      <ErrorComponent
        onClick={refetchRevenueData}
        width="700px"
        height="700px"
      />
    )

  return (
    <Container>
      <Header>
        <Typography variant="title2" value="Revenue Per product" />

        <Filter>
          <Option
            isActive={filterActive === Filters.TOP_3}
            onClick={() => filterBy({ option: Filters.TOP_3 })}
          >
            Top 3
          </Option>
          <Option
            isActive={filterActive === Filters.TOP_5}
            onClick={() => filterBy({ option: Filters.TOP_5 })}
          >
            Top 5
          </Option>
          <Option
            isActive={filterActive === Filters.TOP_10}
            onClick={() => filterBy({ option: Filters.TOP_10 })}
          >
            Top 10
          </Option>
        </Filter>
      </Header>
      {revenueData?.chart && Highcharts && (
        <HighchartsReact highcharts={Highcharts} options={revenueData} />
      )}
    </Container>
  )
}

export default React.memo(RevenuePerProductChart)
