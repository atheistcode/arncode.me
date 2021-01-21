import React from "react"
import styled from "styled-components"
import hexToRgba from "hex-to-rgba"

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem 2rem 7rem 2rem;
  background-color: ${props => hexToRgba(props.theme.color.secondary, "0.9")};
  color: ${props => props.theme.color.black};
  text-align: center;
  opacity: 0;
  transform: translateX(-20%);
  transition: ${props => props.theme.transition.normal};

  & > *:first-child {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  & * {
    line-height: 1.5 !important;
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
