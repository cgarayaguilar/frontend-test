import React from 'react'
import { Wrapper } from 'styles/globalStyles'
import RevenuePerProductChart from 'components/RevenuePerProductChart'
import AllCustomerTable from 'components/AllCustomerTable'
import { Container, BackIcon } from './styles'
import { MdArrowBack as ArrowIcon } from 'react-icons/md'
import Typography from 'components/Typography'
import { useHistory } from 'react-router-dom'
import { HOME } from 'config/paths'

function Dashboard() {
  const history = useHistory()
  const goToHome = () => history.push(HOME)

  return (
    <Container>
      <Wrapper>
        <BackIcon onClick={goToHome}>
          <ArrowIcon size={24} />
          <Typography variant="title3" value={'Back'} />
        </BackIcon>
        <RevenuePerProductChart />
        <AllCustomerTable />
      </Wrapper>
    </Container>
  )
}

export default React.memo(Dashboard)
