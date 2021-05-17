import React from 'react'
import useRevenuePerProduct from 'hooks/useRevenuePerProduct.hook'
import ErrorComponent from 'components/Error'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import PageLoader from 'loaders/PageLoader'
import { Container, Header, Filter, Option } from './styles'
import Typography from 'components/Typography'
import HighchartsAnnotations from 'highcharts/modules/annotations'

/** Setup additional Highcharts modules */
HighchartsAnnotations(Highcharts)

require('highcharts/modules/debugger')(Highcharts)
require('highcharts/modules/accessibility')(Highcharts)
window.Highcharts = Highcharts

function RevenuePerProductChart() {
  const {
    loading,
    isError,
    refetchRevenueData,
    filterBy,
    Filters,
    filterActive,
    chartOptions,
  } = useRevenuePerProduct()

  if (loading) return <PageLoader />

  if (isError)
    return (
      <ErrorComponent
        text="No pudieron cargar los datos de los productos"
        onClick={refetchRevenueData}
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
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </Container>
  )
}

export default React.memo(RevenuePerProductChart)
