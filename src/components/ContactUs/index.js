import Button from 'components/Button'
import Typography from 'components/Typography'
import React from 'react'
import { Container, Wrapper } from './styles'
import { useHistory } from 'react-router-dom'
import { DASHBOARD } from 'config/paths'

function ContactUs() {
  const history = useHistory()

  const goToDashboard = () => history.push(DASHBOARD)

  return (
    <Container id="contact">
      <Wrapper>
        <Typography
          variant="title2"
          value="Keep on track on your day-to-day KPI to draw effective business conclusions"
          color="#fff"
          mb="29px"
        />

        <Button
          textColor="#F3603C"
          color="#fff"
          onClick={goToDashboard}
          width="155px"
        >
          Contact Us
        </Button>
      </Wrapper>
    </Container>
  )
}

export default ContactUs
