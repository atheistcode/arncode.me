import React from "react"
import styled from "styled-components"
import hexToRgba from "hex-to-rgba"

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateX(-20%);
  width: 100%;
  height: 100%;
  background-color: ${props => hexToRgba(props.theme.color.dark, "0.9")};
  padding: 2rem 2rem 8rem 2rem;
  color: ${props => props.theme.color.white};
  text-align: center;
  transition: ${props => props.theme.transition.normal};

  & > *:first-child {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
`

const Description = ({ techs, details, className }) => {
  return (
    <StyledDescription className={className}>
      <h4>{techs.join(" - ")}</h4>
      <p>{details}</p>
    </StyledDescription>
  )
}

export default Description
