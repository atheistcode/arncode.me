import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

const StyledNavLink = styled.li`
  margin-left: 3rem;
  border-radius: 0.4rem;
  cursor: pointer;
  padding: 1rem;
  color: ${props => props.theme.color.white};
  font-weight: bold;
  transition: ${props => props.theme.transition.quick};

  &:hover {
    background-color: ${props => props.theme.color.black};
    color: ${props => props.theme.color.primary};
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
