import React, { useState, useEffect } from 'react'
import { ReactComponent as Logo } from 'assets/images/logo.svg'
import { Container, NavBar, Overlay, ButtonContainer, Wrapper } from './styles'
import useWindowWidth from 'hooks/useWindowWidth.hook'
import { Spin as HamburgerMenu } from 'hamburger-react'
import Button from 'components/Button'
import { useHistory } from 'react-router-dom'
import { DASHBOARD } from 'config/paths'
const BREAKPOINT = 850

function Appbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const windowWidth = useWindowWidth()
  const history = useHistory()

  useEffect(() => {
    windowWidth > BREAKPOINT ? setMenuIsOpen(true) : setMenuIsOpen(false)
  }, [windowWidth])

  const closeMenu = () => windowWidth < BREAKPOINT && setMenuIsOpen(false)

  const goToDashboard = () => history.push(DASHBOARD)

  return (
    <Container id="home">
      <Wrapper>
        <Logo />
        <Overlay visible={menuIsOpen}>
          <NavBar>
            <a href="#products" onClick={closeMenu}>
              Products
            </a>
            <a href="#about" onClick={closeMenu}>
              About Us
            </a>
            <a href="#testimonials" onClick={closeMenu}>
              Testimonials
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact Us
            </a>
            <ButtonContainer>
              <Button variant="filled" onClick={goToDashboard}>
                Get Started
              </Button>
            </ButtonContainer>
          </NavBar>
        </Overlay>

        {windowWidth < BREAKPOINT && (
          <HamburgerMenu
            rounded
            toggled={menuIsOpen}
            toggle={setMenuIsOpen}
            size={20}
            color={'#242D52'}
          />
        )}
      </Wrapper>
    </Container>
  )
}

export default React.memo(Appbar)
