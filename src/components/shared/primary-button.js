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
    background-color: ${props => props.theme.color.dark};
  }
`

const PrimaryButton = props => {
  return <StyledPrimaryButton {...props} />
}

export default PrimaryButton
