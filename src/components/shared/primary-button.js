import React from "react"
import styled from "styled-components"

import Button from "./button"

const StyledPrimaryButton = styled(Button)`
  border: 0.2rem solid ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.white};

  & + * {
    color: ${props => props.theme.color.white};
  }

  &:hover {
    border-color: ${props => props.theme.color.primary};
    background-color: ${props => props.theme.color.dark};
    color: ${props => props.theme.color.primary};
  }

  &:hover + * {
    color: ${props => props.theme.color.primary};
  }
`

const PrimaryButton = props => {
  return <StyledPrimaryButton {...props} />
}

export default PrimaryButton
