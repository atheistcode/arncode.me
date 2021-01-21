import React from "react"
import styled from "styled-components"

const StyledButton = styled.input`
  padding: 0.8rem;
  border: 0.2rem solid inherit;
  border-radius: 0.4rem;
  box-shadow: ${props => props.theme.shadow.type1};
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: ${props => props.theme.transition.quick};
  overflow: hidden;

  @media (max-width: 50em) {
    font-size: ${props => props.theme.fontSize.sm};
  }
`
const StyledAnchor = styled.a`
  display: inline-block;
  padding: 0.8rem;
  border: 0.2rem solid inherit;
  border-radius: 0.4rem;
  box-shadow: ${props => props.theme.shadow.type1};
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: bold;
  cursor: pointer;
  transition: ${props => props.theme.transition.quick};
  overflow: hidden;

  @media (max-width: 50em) {
    font-size: ${props => props.theme.fontSize.sm};
  }
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
