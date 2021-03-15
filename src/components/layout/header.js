import React, { useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import scrollTo from "gatsby-plugin-smoothscroll"

import NavLink from "./nav-link"

const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 15;
  width: 100%;
  height: ${props => (props.height === "initial" ? "5.5rem" : "5rem")};
  background-color: ${props =>
    props.bgColor === "initial" ? "transparent" : props.theme.color.primary};
  transition: ${props => props.theme.transition.normal};
`
const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 100%;
  max-width: 120rem;
  height: 100%;
  padding: 0 1.5rem;
`
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${props => (props.logoSize === "lg" ? "scale(1.1)" : "scale(1)")};
  height: 100%;
  border-radius: 0.2rem;
  background-color: ${props => props.theme.color.dark};
  cursor: pointer;
  padding: 1.5rem;
  color: ${props => props.theme.color.primary};
  letter-spacing: 0.1rem;
  font-weight: bold;
  transition: ${props => props.theme.transition.normal};
  will-change: contents;

  & span:nth-child(1) {
    color: ${props => props.theme.color.white};
  }

  & span:nth-child(3) {
    color: ${props => props.theme.color.white};
    font-size: ${props => props.theme.fontSize.sm};
  }
`
const NavList = styled.ul`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  list-style-type: none;

  @media (max-width: 40em) {
    display: none;
  }
`
const MenuBtn = styled.div`
  display: none;
  color: ${props => props.theme.color.secondary};
  cursor: pointer;

  @media (max-width: 40em) {
    display: inline-block;
    padding: 1rem;
  }
`
const MenuIcon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
`

const MainHeader = ({ toggleDrawer }) => {
  const [logoSize, setLogoSize] = useState("lg")
  const [headerBgColor, setHeaderBgColor] = useState("initial")
  const [headerHeight, setHeaderHeight] = useState("initial")

  /* resize header on window scroll */
  if (typeof window !== `undefined`) {
    window.onscroll = function () {
      if (window.pageYOffset > 20) {
        setHeaderHeight("moved")
        setHeaderBgColor("moved")
        setLogoSize("n")
      }

      if (window.pageYOffset < 20) {
        setHeaderHeight("initial")
        setHeaderBgColor("initial")
        setLogoSize("lg")
      }
    }
  }

  return (
    <Header bgColor={headerBgColor} height={headerHeight}>
      <Navigation>
        <Logo logoSize={logoSize} onClick={() => scrollTo("#intro-section")}>
          <p>
            <span>ARN</span>
            <span>CODE</span>
            <span>.me</span>
          </p>
        </Logo>
        <NavList>
          <NavLink to="#about-section">About</NavLink>
          <NavLink to="#portfolio-section">Portfolio</NavLink>
          <NavLink to="#contact-section">Contact</NavLink>
        </NavList>
        <MenuBtn onClick={toggleDrawer}>
          <MenuIcon icon={faBars} />
        </MenuBtn>
      </Navigation>
    </Header>
  )
}

export default MainHeader
