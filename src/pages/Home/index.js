import React from 'react'
import { Wrapper } from 'styles/globalStyles'
import RevenuePerProductChart from 'components/RevenuePerProductChart'

function Home() {
  return (
    <>
      <Wrapper>
        <RevenuePerProductChart />
      </Wrapper>
    </>
  )
}

export default React.memo(Home)
