import React, { useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import hexToRgba from "hex-to-rgba"
import scrollTo from "gatsby-plugin-smoothscroll"

import NavLink from "./nav-link"

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${props => (props.height === "default" ? "5.5rem" : "4rem")};
  border-bottom: 0.2rem solid ${props => props.theme.color.white};
  box-shadow: ${props => props.theme.shadow.type1};
  background-color: ${props =>
    props.bgColor === "default"
      ? hexToRgba(props.theme.color.primary, "0.6")
      : hexToRgba(props.theme.color.primary, "0.9")};
  overflow: hidden;
  transition: ${props => props.theme.transition.normal};
  z-index: 15;
`
const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 120rem;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 0 1.5rem;
`
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: 0.2rem solid ${props => props.theme.color.secondary};
  border-bottom: none;
  border-radius: 0.2rem 0.2rem 0 0;
  box-shadow: ${props => props.theme.shadow.type1};
  padding: 1rem;
  background-color: ${props => props.theme.color.secondary};
  color: ${props => props.theme.color.dark};
  letter-spacing: 0.1rem;
  cursor: pointer;
  transform: ${props => (props.logoSize === "lg" ? "scale(1.05)" : "scale(1)")};
  transition: ${props => props.theme.transition.normal};

  & span:nth-child(1) {
    color: ${props => props.theme.color.primary};
  }

  & span:nth-child(3) {
    color: ${props => props.theme.color.primary};
    font-size: ${props => props.theme.fontSize.sm};
  }
`
const NavList = styled.ul`
  display: flex;
  align-items: center;
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
  const [headerBgColor, setHeaderBgColor] = useState("default")
  const [headerHeight, setHeaderHeight] = useState("default")

  // resize header on window scroll

  if (typeof window !== `undefined`) {
    window.onscroll = function () {
      if (window.pageYOffset > 20) {
        setHeaderHeight("moved")
        setHeaderBgColor("moved")
        setLogoSize("n")
      }

      if (window.pageYOffset < 20) {
        setHeaderHeight("default")
        setHeaderBgColor("default")
        setLogoSize("lg")
      }
    }
  }

  return (
    <Header bgColor={headerBgColor} height={headerHeight}>
      <Navigation>
        <Logo logoSize={logoSize} onClick={() => scrollTo("#intro-section")}>
          <h4>
            <span>ARN</span>
            <span>CODE</span>
            <span>.me</span>
          </h4>
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
