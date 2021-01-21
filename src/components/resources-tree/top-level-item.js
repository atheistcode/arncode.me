import React from "react"
import styled from "styled-components"

import Anchor from "./anchor"

const StyledTopLevelItem = styled.h4`
  display: inline-block;
  min-width: 8rem;
  margin-bottom: 0.5rem;
  padding: 0.6rem 0.8rem;
  border-radius: 0.4rem;
  background-color: ${props => props.theme.color.primary};

  & a {
    margin-left: 0.8rem;
    font-size: ${props => props.theme.fontSize.sm};
  }
`

const TopLevelItem = ({ name, hrefs }) => {
  return (
    <StyledTopLevelItem>
      <span>{name}</span>
      <span>
        {" ["}
        {hrefs
          ? hrefs.map((href, index) => (
              <Anchor href={href} name={index + 1} key={index} />
            ))
          : null}
        {" ]"}
      </span>
    </StyledTopLevelItem>
  )
}

export default TopLevelItem
