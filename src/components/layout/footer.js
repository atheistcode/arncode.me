import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.dark};
  padding: 2rem 1rem;
  color: ${props => props.theme.color.secondary};

  & > *:nth-child(2) {
    margin: 0 2rem;
  }
`
const Line = styled.span`
  width: 15%;
  height: 0.2rem;
  background-color: ${props => props.theme.color.primary};
`

const Footer = () => {
  return (
    <StyledFooter>
      <Line />
      <h4>THANKS!</h4>
      <Line />
    </StyledFooter>
  )
}

export default Footer
