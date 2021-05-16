import Typography from 'components/Typography'
import React from 'react'
import {
  Container,
  Wrapper,
  ContainerSocialMedia,
  Column,
  TwoColumns,
} from './styles'
import facebook from 'assets/images/icon-facebook.svg'
import youtube from 'assets/images/icon-youtube.svg'
import twitter from 'assets/images/icon-twitter.svg'
import instagram from 'assets/images/icon-instagram.svg'
import logo from 'assets/images/logo2.svg'

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Column>
          <img src={logo} alt="" />
          <ContainerSocialMedia>
            <li>
              <img src={facebook} alt="" />
            </li>
            <li>
              <img src={youtube} alt="" />
            </li>
            <li>
              <img src={twitter} alt="" />
            </li>
            <li>
              <img src={instagram} alt="" />
            </li>
          </ContainerSocialMedia>
        </Column>

        <TwoColumns>
          <Column>
            <Typography mb="13px" variant="caption" value="Products" />
            <Typography mb="13px" variant="caption" value="About Us" />
            <Typography mb="13px" variant="caption" value="Testimonials" />
          </Column>
          <Column>
            <Typography
              mb="13px"
              variant="caption"
              value="Terms & conditions"
            />
            <Typography mb="13px" variant="caption" value="Security" />
            <Typography mb="13px" variant="caption" value="Privacy Policy" />
          </Column>
        </TwoColumns>
      </Wrapper>
    </Container>
  )
}

export default Footer
