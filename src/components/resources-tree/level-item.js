import React from "react"
import styled from "styled-components"

import Anchor from "./anchor"

const StyledLevelItem = styled.li`
  justify-self: start;
  align-self: start;
  min-width: 8rem;
  margin-top: 0.7rem;
  margin-right: 0.7rem;
  padding: 0.6rem 0.8rem;
  border-radius: 0.4rem;
  background-color: ${props =>
    props.level === 2
      ? props.theme.color.secondary
      : props.level === 3
      ? props.theme.color.dark
      : props.theme.color.secondary};
  text-align: center;
`

const LevelItem = ({ name, hrefs, level, className }) => {
  return (
    <StyledLevelItem level={level} className={className}>
      {hrefs ? <Anchor name={name} href={hrefs[0]} /> : name}
    </StyledLevelItem>
  )
}

export default LevelItem
