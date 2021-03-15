import React from "react"
import styled from "styled-components"

const StyledButton = styled.input`
  overflow: hidden;
  border: 0.2rem solid ${props => props.theme.color.white};
  border-radius: 0.4rem;
  box-shadow: ${props => props.theme.shadow.type1};
  cursor: pointer;
  padding: 1.5rem 2rem;
  text-transform: uppercase;
  font-weight: bold;
  transition: ${props => props.theme.transition.quick};
`
const StyledAnchor = styled.a`
  overflow: hidden;
  border: 0.2rem solid ${props => props.theme.color.white};
  border-radius: 0.4rem;
  box-shadow: ${props => props.theme.shadow.type1};
  cursor: pointer;
  padding: 1.5rem 2rem;
  text-transform: uppercase;
  font-weight: bold;
  transition: ${props => props.theme.transition.quick};
`
const Button = ({ type, href, children, onClick, className }) => {
  if (href) {
    return (
      <StyledAnchor href={href} onClick={onClick} className={className}>
        {children}
      </StyledAnchor>
    )
  } else {
    return (
      <StyledButton
        type={type || "button"}
        value={children || "Button"}
        onClick={onClick}
        className={className}
      />
    )
  }
}

export default Button
