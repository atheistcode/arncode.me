import React from "react"
import styled from "styled-components"

import Button from "./button"

const StyledSecondaryButton = styled(Button)`
  border: 0.2rem solid ${props => props.theme.color.dark};
  background-color: ${props => props.theme.color.secondary};
  color: ${props => props.theme.color.dark};

  & + * {
    color: ${props => props.theme.color.dark};
  }

  &:hover {
    border: 0.2rem solid ${props => props.theme.color.secondary};
    background-color: ${props => props.theme.color.dark};
    color: ${props => props.theme.color.secondary};
  }

  &:hover + * {
    color: ${props => props.theme.color.secondary};
  }
`

const SecondaryButton = props => {
  return <StyledSecondaryButton {...props} />
}

export default SecondaryButton
