import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

const StyledNavLink = styled.li`
  margin-left: 3rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  color: ${props => props.theme.color.white};
  font-weight: bold;
  cursor: pointer;
  transition: ${props => props.theme.transition.quick};

  &:hover {
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.dark};
  }
`

const NavLink = ({ to, onClickHandler, ...props }) => {
  return (
    <StyledNavLink
      onClick={() => {
        scrollTo(to)
        onClickHandler && onClickHandler()
      }}
      {...props}
    />
  )
}

export default NavLink
