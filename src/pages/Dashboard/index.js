import React from 'react'
import { Wrapper } from 'styles/globalStyles'
import RevenuePerProductChart from 'components/RevenuePerProductChart'
import AllCustomerTable from 'components/AllCustomerTable'
import { Container } from './styles'

function Dashboard() {
  return (
    <Container>
      <Wrapper>
        <RevenuePerProductChart />
        <AllCustomerTable />
      </Wrapper>
    </Container>
  )
}

export default React.memo(Dashboard)
