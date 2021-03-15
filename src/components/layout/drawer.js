import React from "react"
import styled from "styled-components"
import hexToRgba from "hex-to-rgba"

import NavLink from "./nav-link"

const StyledDrawer = styled.div`
  display: none;
  opacity: ${props => (props.isOpen === true ? 1 : 0)};
  position: fixed;
  top: 0rem;
  right: ${props => (props.isOpen === true ? "0" : "-100%")};
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: ${props => hexToRgba(props.theme.color.dark, "0.95")};
  padding: 14rem 2rem 2rem 2rem;
  transition: ${props => props.theme.transition.normal};
  transition-timing-function: ease-in;
  transition-duration: 200ms;

  @media (max-width: 40em) {
    display: flex;
    justify-content: center;
  }
`
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;

  & > * {
    margin-top: 4rem;
    margin-left: 0;
    border-radius: 0.4rem;
  }
`

const Drawer = props => {
  return (
    <StyledDrawer {...props}>
      <NavList>
        <NavLink
          to="#about-section"
          onClickHandler={() => props.toggleDrawer()}
        >
          About
        </NavLink>
        <NavLink
          to="#portfolio-section"
          onClickHandler={() => props.toggleDrawer()}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="#contact-section"
          onClickHandler={() => props.toggleDrawer()}
        >
          Contact
        </NavLink>
      </NavList>
    </StyledDrawer>
  )
}

export default Drawer
