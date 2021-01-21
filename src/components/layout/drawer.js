import React from "react"
import styled from "styled-components"
import hexToRgba from "hex-to-rgba"

import NavLink from "./nav-link"

const StyledDrawer = styled.div`
  position: fixed;
  top: 0rem;
  right: ${props => (props.isOpen === true ? "0" : "-100%")};
  display: none;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 14rem 2rem 2rem 2rem;
  background-color: ${props => hexToRgba(props.theme.color.dark, "0.95")};
  opacity: ${props => (props.isOpen === true ? 1 : 0)};
  transition: ${props => props.theme.transition.normal};
  transition-timing-function: ease-in;
  transition-duration: 200ms;
  z-index: 10;

  @media (max-width: 40em) {
    display: flex;
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
    border-radius: 0.2rem;
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
